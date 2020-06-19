import Page from '../../components/Page/Page';
import PostComponent from '../../components/Post/Post';

import {
  ContentType,
  getContentItem,
  IContentItem,
  getContentPaths,
  INote,
} from '../../helpers/content';

export default function Note({ note }: { note: IContentItem<INote> }) {
  return (
    <Page title={note.indexData.title}>
      <PostComponent
        title={note.indexData.title}
        content={note.indexData.content}
        date={note.indexData.date}
        id={note.directoryName}
        url={`lukehansford.me/notes/${note.directoryName}`}
      />
    </Page>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      note: getContentItem<INote>(ContentType.NOTE, context.params.id),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getContentPaths(ContentType.NOTE),
    fallback: false,
  };
}
