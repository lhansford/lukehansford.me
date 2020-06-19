import Page from '../components/Page/Page';

export default function ReadingList(): JSX.Element {
  return (
    <Page title="Reading List">
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/shrHQdhZRt0ct1ARd?backgroundColor=orange"
        frameBorder="0"
        width="100%"
        height="533"
        style={{ background: 'transparent', border: '1px solid #ccc' }}
        title="Reading List"
      />
    </Page>
  );
}
