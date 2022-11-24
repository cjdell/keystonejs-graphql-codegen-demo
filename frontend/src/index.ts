import { bold, cyan, green, redBright, underline, yellow } from 'console-log-colors';
import { Anonymous, Api, ApolloError, OrderDirection } from './api.generated.js';

async function useApi() {
  try {
    await showUsers();
    await showPosts();
  } catch (err) {
    if (err instanceof ApolloError) {
      displayError(err);
    } else {
      throw err;
    }
  }
}

async function showUsers() {
  const users = await Api.GetUsers(Anonymous, {});
  console.table(users.data.users);

  const user = await Api.GetUser(Anonymous, { id: users.data.users![0].id });
  console.log(green("The user's DOB:"), cyan(user.data.user?.dateOfBirth));
  console.log('\n');
}

async function showPosts() {
  const posts = await Api.GetPosts(Anonymous, { ord: OrderDirection.Asc });

  for (const post of posts.data.posts!) {
    console.log(bold(underline(post.title)));
    console.log(post.content?.document[0].children[0].text);
    console.log('\n');
  }

  if (posts.data.posts?.length || 0 > 0) {
    await generateComment(posts.data.posts![0].id);
  }
}

async function generateComment(postId: string) {
  const result = await Api.WriteComment(Anonymous, {
    data: {
      post: { connect: { id: 'clasvog7s024639kmxtzqtu1k' } },
      text: 'This is a generated comment!',
    },
  });

  console.log(yellow('New comment ID:'), bold(underline(result.data?.createComment?.id)));
}

function displayError(err: ApolloError) {
  console.error('ApolloError', err);

  err.graphQLErrors.forEach((m) => console.error(redBright(m.message)));
}

useApi();
