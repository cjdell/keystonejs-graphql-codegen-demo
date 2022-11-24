'use strict';
var __spreadArray =
	(this && this.__spreadArray) ||
	function (to, from, pack) {
		if (pack || arguments.length === 2)
			for (var i = 0, l = from.length, ar; i < l; i++) {
				if (ar || !(i in from)) {
					if (!ar) ar = Array.prototype.slice.call(from, 0, i);
					ar[i] = from[i];
				}
			}
		return to.concat(ar || Array.prototype.slice.call(from));
	};
exports.__esModule = true;
var visitor_plugin_common_1 = require('@graphql-codegen/visitor-plugin-common');
var graphql_1 = require('graphql');
var pascal_case_1 = require('pascal-case');
module.exports = {
	plugin: function (schema, documents, config, info) {
		var allAst = (0, graphql_1.concatAST)(
			documents.map(function (d) {
				return d.document;
			}),
		);
		var allFragments = __spreadArray(
			__spreadArray(
				[],
				allAst.definitions
					.filter(function (d) {
						return d.kind === graphql_1.Kind.FRAGMENT_DEFINITION;
					})
					.map(function (fragmentDef) {
						return {
							node: fragmentDef,
							name: fragmentDef.name.value,
							onType: fragmentDef.typeCondition.name.value,
							isExternal: false,
						};
					}),
				true,
			),
			config.externalFragments || [],
			true,
		);
		var visitor = new visitor_plugin_common_1.ClientSideBaseVisitor(
			schema,
			allFragments,
			{},
			{ documentVariableSuffix: 'Doc' },
			documents,
		);
		var visitorResult = (0, graphql_1.visit)(allAst, visitor);
		var operations = allAst.definitions.filter(function (d) {
			return d.kind === graphql_1.Kind.OPERATION_DEFINITION;
		});
		var imports = [
			'import { getApolloClient, Anonymous } from "'.concat(config.clientPath, '";'),
			'import gql from "graphql-tag"',
			'export { Anonymous }',
			'export { ApolloError } from "@apollo/client/core/index.js"',
		];
		var ops = operations
			.map(function (o) {
				var op = ''
					.concat((0, pascal_case_1.pascalCase)(o.name.value))
					.concat((0, pascal_case_1.pascalCase)(o.operation));
				var opv = ''.concat(op, 'Variables');
				var operation = '';
				if (o.operation == 'query') {
					operation =
						operation +
						'export const '
							.concat(
								o.name.value,
								' = (token: string | Anonymous, variables: ',
							)
							.concat(
								opv,
								') => {\n  return getApolloClient(token).query<',
							)
							.concat(op, '>({query: ')
							.concat(
								(0, pascal_case_1.pascalCase)(o.name.value),
								'Doc, variables})\n}\n',
							);
				}
				if (o.operation == 'mutation') {
					operation = 'export const '
						.concat(
							o.name.value,
							' = (token: string | Anonymous, variables: ',
						)
						.concat(
							opv,
							') => {\n  const m = getApolloClient(token).mutate<',
						)
						.concat(op, ', ')
						.concat(opv, '>({\n    mutation: ')
						.concat(
							(0, pascal_case_1.pascalCase)(o.name.value),
							'Doc,\n    variables,\n  });\n  return m;\n}',
						);
				}
				return operation;
			})
			.join('\n');
		return {
			prepend: imports,
			content: __spreadArray(
				__spreadArray(
					[visitor.fragments],
					visitorResult.definitions.filter(function (t) {
						return typeof t == 'string';
					}),
					true,
				),
				['\nexport namespace Api {\n', ops, '\n}\n'],
				false,
			).join('\n'),
		};
	},
	validate: function (schema, documents, config, outputFile, allPlugins) {
		if (!config.clientPath) {
			console.warn('Client path is not present in config');
		}
	},
};
