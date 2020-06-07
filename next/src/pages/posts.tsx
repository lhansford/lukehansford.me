import Page from "../components/Page/Page";
import {
  getContentItems,
  ContentType,
  IBlogPost,
  IContentItem,
} from "../helpers/content";
import { parseISO, format } from "date-fns";

export default function Posts({ posts }: { posts: IContentItem<IBlogPost>[] }) {
  return (
    <Page title="Blog">
      {posts.map(({ directoryName, indexData: { title, date } }) => (
        <div className="post-entry h-entry">
          <div className="post-date dt-published">
            {format(parseISO(date), "MMM d, y")}
          </div>
          <div className="post-title p-name">
            <a href={`/posts/${directoryName}`} className="u-url">
              {title}
            </a>
          </div>
        </div>
      ))}
    </Page>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: getContentItems<IBlogPost>(ContentType.BLOG_POST)
        .sort((a, b) => {
          return (
            parseISO(a.indexData.date).valueOf() -
            parseISO(b.indexData.date).valueOf()
          );
        })
        .reverse(),
    },
  };
}
