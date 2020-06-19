import { parseISO, format } from 'date-fns';

import Page from '../components/Page/Page';
import { getContentItems, ContentType, IContentItem, INote } from '../helpers/content';

export default function Notes({ notes }: { notes: IContentItem<INote>[] }) {
  return (
    <Page title="Notes">
      <p>
        These are notes covering things I come across in my daily life. I was inspired by{' '}
        <a href="https://notes.andymatuschak.org/About_these_notes">
          Andy Matuschak&apos;s website
        </a>{' '}
        and reading about the{' '}
        <a href="https://en.wikipedia.org/wiki/Zettelkasten">Zettelkasten system</a>.
      </p>
      {notes.map(({ directoryName, indexData: { title, date } }) => (
        <div className="post-entry h-entry" key={directoryName}>
          <div className="post-date dt-published">{format(parseISO(date), 'MMM d, y')}</div>
          <div className="post-title p-name">
            <a href={`/notes/${directoryName}`} className="u-url">
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
      notes: getContentItems<INote>(ContentType.NOTE)
        .sort((a, b) => {
          return parseISO(a.indexData.date).valueOf() - parseISO(b.indexData.date).valueOf();
        })
        .reverse(),
    },
  };
}
