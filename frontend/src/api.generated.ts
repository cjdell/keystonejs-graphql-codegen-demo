import { getApolloClient, Anonymous } from './apollo-client';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export { Anonymous };
export { ApolloError } from '@apollo/client/core/index.js';
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
};

export type AuthenticatedItem = User;

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  post?: Maybe<Post>;
  text?: Maybe<Scalars['String']>;
};

export type CommentCreateInput = {
  post?: InputMaybe<PostRelateToOneForCreateInput>;
  text?: InputMaybe<Scalars['String']>;
};

export type CommentManyRelationFilter = {
  every?: InputMaybe<CommentWhereInput>;
  none?: InputMaybe<CommentWhereInput>;
  some?: InputMaybe<CommentWhereInput>;
};

export type CommentOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  text?: InputMaybe<OrderDirection>;
};

export type CommentRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  create?: InputMaybe<Array<CommentCreateInput>>;
};

export type CommentRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  create?: InputMaybe<Array<CommentCreateInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
};

export type CommentUpdateArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateInput = {
  post?: InputMaybe<PostRelateToOneForUpdateInput>;
  text?: InputMaybe<Scalars['String']>;
};

export type CommentWhereInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  id?: InputMaybe<IdFilter>;
  post?: InputMaybe<PostWhereInput>;
  text?: InputMaybe<StringFilter>;
};

export type CommentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};

export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  fieldMeta?: Maybe<Scalars['JSON']>;
  isFilterable: Scalars['Boolean'];
  isOrderable: Scalars['Boolean'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int'];
};

export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read',
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar',
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read',
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  initialColumns: Array<Scalars['String']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
  isSingleton: Scalars['Boolean'];
  itemQueryName: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
  labelField: Scalars['String'];
  listQueryName: Scalars['String'];
  pageSize: Scalars['Int'];
  path: Scalars['String'];
  plural: Scalars['String'];
  singular: Scalars['String'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createComment?: Maybe<Comment>;
  createComments?: Maybe<Array<Maybe<Comment>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createPost?: Maybe<Post>;
  createPosts?: Maybe<Array<Maybe<Post>>>;
  createTag?: Maybe<Tag>;
  createTags?: Maybe<Array<Maybe<Tag>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteComment?: Maybe<Comment>;
  deleteComments?: Maybe<Array<Maybe<Comment>>>;
  deletePost?: Maybe<Post>;
  deletePosts?: Maybe<Array<Maybe<Post>>>;
  deleteTag?: Maybe<Tag>;
  deleteTags?: Maybe<Array<Maybe<Tag>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean'];
  updateComment?: Maybe<Comment>;
  updateComments?: Maybe<Array<Maybe<Comment>>>;
  updatePost?: Maybe<Post>;
  updatePosts?: Maybe<Array<Maybe<Post>>>;
  updateTag?: Maybe<Tag>;
  updateTags?: Maybe<Array<Maybe<Tag>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};

export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationCreateCommentArgs = {
  data: CommentCreateInput;
};

export type MutationCreateCommentsArgs = {
  data: Array<CommentCreateInput>;
};

export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};

export type MutationCreatePostArgs = {
  data: PostCreateInput;
};

export type MutationCreatePostsArgs = {
  data: Array<PostCreateInput>;
};

export type MutationCreateTagArgs = {
  data: TagCreateInput;
};

export type MutationCreateTagsArgs = {
  data: Array<TagCreateInput>;
};

export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};

export type MutationDeleteCommentArgs = {
  where: CommentWhereUniqueInput;
};

export type MutationDeleteCommentsArgs = {
  where: Array<CommentWhereUniqueInput>;
};

export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};

export type MutationDeletePostsArgs = {
  where: Array<PostWhereUniqueInput>;
};

export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput;
};

export type MutationDeleteTagsArgs = {
  where: Array<TagWhereUniqueInput>;
};

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};

export type MutationUpdateCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};

export type MutationUpdateCommentsArgs = {
  data: Array<CommentUpdateArgs>;
};

export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};

export type MutationUpdatePostsArgs = {
  data: Array<PostUpdateArgs>;
};

export type MutationUpdateTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};

export type MutationUpdateTagsArgs = {
  data: Array<TagUpdateArgs>;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean'];
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  comments?: Maybe<Array<Comment>>;
  commentsCount?: Maybe<Scalars['Int']>;
  content?: Maybe<Post_Content_Document>;
  id: Scalars['ID'];
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type PostCommentsArgs = {
  orderBy?: Array<CommentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CommentWhereInput;
};

export type PostCommentsCountArgs = {
  where?: CommentWhereInput;
};

export type PostTagsArgs = {
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TagWhereInput;
};

export type PostTagsCountArgs = {
  where?: TagWhereInput;
};

export type PostCreateInput = {
  author?: InputMaybe<UserRelateToOneForCreateInput>;
  comments?: InputMaybe<CommentRelateToManyForCreateInput>;
  content?: InputMaybe<Scalars['JSON']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type PostManyRelationFilter = {
  every?: InputMaybe<PostWhereInput>;
  none?: InputMaybe<PostWhereInput>;
  some?: InputMaybe<PostWhereInput>;
};

export type PostOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type PostRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  create?: InputMaybe<Array<PostCreateInput>>;
};

export type PostRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  create?: InputMaybe<Array<PostCreateInput>>;
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
};

export type PostRelateToOneForCreateInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  create?: InputMaybe<PostCreateInput>;
};

export type PostRelateToOneForUpdateInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  create?: InputMaybe<PostCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type PostUpdateArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateInput = {
  author?: InputMaybe<UserRelateToOneForUpdateInput>;
  comments?: InputMaybe<CommentRelateToManyForUpdateInput>;
  content?: InputMaybe<Scalars['JSON']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  author?: InputMaybe<UserWhereInput>;
  comments?: InputMaybe<CommentManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Post_Content_Document = {
  __typename?: 'Post_content_Document';
  document: Scalars['JSON'];
};

export type Post_Content_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  authenticatedItem?: Maybe<AuthenticatedItem>;
  comment?: Maybe<Comment>;
  comments?: Maybe<Array<Comment>>;
  commentsCount?: Maybe<Scalars['Int']>;
  keystone: KeystoneMeta;
  post?: Maybe<Post>;
  posts?: Maybe<Array<Post>>;
  postsCount?: Maybe<Scalars['Int']>;
  tag?: Maybe<Tag>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']>;
};

export type QueryCommentArgs = {
  where: CommentWhereUniqueInput;
};

export type QueryCommentsArgs = {
  orderBy?: Array<CommentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CommentWhereInput;
};

export type QueryCommentsCountArgs = {
  where?: CommentWhereInput;
};

export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};

export type QueryPostsArgs = {
  orderBy?: Array<PostOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: PostWhereInput;
};

export type QueryPostsCountArgs = {
  where?: PostWhereInput;
};

export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};

export type QueryTagsArgs = {
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TagWhereInput;
};

export type QueryTagsCountArgs = {
  where?: TagWhereInput;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};

export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Post>>;
  postsCount?: Maybe<Scalars['Int']>;
};

export type TagPostsArgs = {
  orderBy?: Array<PostOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: PostWhereInput;
};

export type TagPostsCountArgs = {
  where?: PostWhereInput;
};

export type TagCreateInput = {
  name?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<PostRelateToManyForCreateInput>;
};

export type TagManyRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type TagRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  create?: InputMaybe<Array<TagCreateInput>>;
};

export type TagRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  create?: InputMaybe<Array<TagCreateInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
};

export type TagUpdateArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<PostRelateToManyForUpdateInput>;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostManyRelationFilter>;
};

export type TagWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  password?: Maybe<PasswordState>;
  posts?: Maybe<Array<Post>>;
  postsCount?: Maybe<Scalars['Int']>;
};

export type UserPostsArgs = {
  orderBy?: Array<PostOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: PostWhereInput;
};

export type UserPostsCountArgs = {
  where?: PostWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult =
  | UserAuthenticationWithPasswordFailure
  | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String'];
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<PostRelateToManyForCreateInput>;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  dateOfBirth?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<PostRelateToManyForUpdateInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  dateOfBirth?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostManyRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  __typename?: 'Query';
  users?: Array<{
    __typename?: 'User';
    id: string;
    name?: string | null;
    email?: string | null;
    postsCount?: number | null;
  }> | null;
};

export type GetUserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetUserQuery = {
  __typename?: 'Query';
  user?: {
    __typename?: 'User';
    id: string;
    name?: string | null;
    email?: string | null;
    dateOfBirth?: any | null;
  } | null;
};

export type GetPostsQueryVariables = Exact<{
  ord: OrderDirection;
}>;

export type GetPostsQuery = {
  __typename?: 'Query';
  posts?: Array<{
    __typename?: 'Post';
    id: string;
    title?: string | null;
    content?: { __typename?: 'Post_content_Document'; document: any } | null;
  }> | null;
};

export type WriteCommentMutationVariables = Exact<{
  data: CommentCreateInput;
}>;

export type WriteCommentMutation = {
  __typename?: 'Mutation';
  createComment?: { __typename?: 'Comment'; id: string } | null;
};

export const GetUsersDoc = gql`
  query GetUsers {
    users {
      id
      name
      email
      postsCount
    }
  }
`;
export const GetUserDoc = gql`
  query GetUser($id: ID!) {
    user(where: { id: $id }) {
      id
      name
      email
      dateOfBirth
    }
  }
`;
export const GetPostsDoc = gql`
  query GetPosts($ord: OrderDirection!) {
    posts(orderBy: { id: $ord }) {
      id
      title
      content {
        document
      }
    }
  }
`;
export const WriteCommentDoc = gql`
  mutation WriteComment($data: CommentCreateInput!) {
    createComment(data: $data) {
      id
    }
  }
`;

export namespace Api {
  export const GetUsers = (token: string | Anonymous, variables: GetUsersQueryVariables) => {
    return getApolloClient(token).query<GetUsersQuery>({ query: GetUsersDoc, variables });
  };

  export const GetUser = (token: string | Anonymous, variables: GetUserQueryVariables) => {
    return getApolloClient(token).query<GetUserQuery>({ query: GetUserDoc, variables });
  };

  export const GetPosts = (token: string | Anonymous, variables: GetPostsQueryVariables) => {
    return getApolloClient(token).query<GetPostsQuery>({ query: GetPostsDoc, variables });
  };

  export const WriteComment = (token: string | Anonymous, variables: WriteCommentMutationVariables) => {
    const m = getApolloClient(token).mutate<WriteCommentMutation, WriteCommentMutationVariables>({
      mutation: WriteCommentDoc,
      variables,
    });
    return m;
  };
}
