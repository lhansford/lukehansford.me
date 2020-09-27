import Page from '../../components/Page/Page';
import PostComponent from '../../components/Post/Post';

import {
  ContentType,
  getContentItem,
  IContentItem,
  getContentPaths,
  IBlogPost,
} from '../../helpers/content';

export default function Post({ post }: { post: IContentItem<IBlogPost> }) {
  return (
    <Page title={post.indexData.title}>
      <PostComponent
        title={post.indexData.title}
        content={post.indexData.content}
        date={post.indexData.date}
        id={post.directoryName}
        url={`http://lukehansford.me/posts/${post.directoryName}`}
      />
    </Page>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      post: getContentItem<IBlogPost>(ContentType.BLOG_POST, context.params.id),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getContentPaths(ContentType.BLOG_POST),
    fallback: false,
  };
}
