import Page from "../components/Page/Page";
import {
  getContentItems,
  ContentType,
  IContentItem,
  IPhoto,
} from "../helpers/content";
import { parseISO } from "date-fns";

export default function Photos({ photos }: { photos: IContentItem<IPhoto>[] }) {
  return (
    <Page title="Photos">
      <ul className="c-photo-grid">
        {photos.map(({ directoryName, indexData: { thumbnail } }) => (
          <li>
            <a href={`photos/${directoryName}`}>
              <img
                className="c-photo-grid__image"
                src={`/contents${thumbnail}`}
              />
            </a>
          </li>
        ))}
      </ul>
    </Page>
  );
}

export async function getStaticProps() {
  return {
    props: {
      photos: getContentItems<IPhoto>(ContentType.PHOTO)
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
