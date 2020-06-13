import Page from "../../components/Page/Page";
import Post from "../../components/Post/Post";
import {
  ContentType,
  IProject,
  getContentItem,
  IContentItem,
  getContentPaths,
} from "../../helpers/content";

export default function Project({
  project,
}: {
  project: IContentItem<IProject>;
}) {
  return (
    <Page title={project.indexData.title}>
      <Post
        title={project.indexData.title}
        content={project.indexData.content}
        date={project.indexData.date}
        id={project.directoryName}
        url={`lukehansford.me/projects/${project.directoryName}`}
      />
    </Page>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      project: getContentItem<IProject>(ContentType.PROJECT, context.params.id),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getContentPaths(ContentType.PROJECT),
    fallback: false,
  };
}
