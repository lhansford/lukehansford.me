import { getYear, parseISO } from "date-fns";

import Page from "../components/Page/Page";
import {
  getContentItems,
  ContentType,
  IContentItem,
  IProject,
} from "../helpers/content";

export default function Projects({
  projects,
}: {
  projects: IContentItem<IProject>[];
}) {
  return (
    <Page title="Projects">
      <ul>
        {projects.map(
          ({ directoryName, indexData: { title, date, description } }) => (
            <li>
              <p>
                <a href={`/projects/${directoryName}`}>{`${title} (${getYear(
                  parseISO(date)
                )})`}</a>
              </p>
              <p>
                <em>{description}</em>
              </p>
            </li>
          )
        )}
      </ul>
    </Page>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projects: getContentItems<IProject>(ContentType.PROJECT)
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
