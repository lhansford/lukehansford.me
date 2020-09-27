import Page from '../components/Page/Page';

export default function StockholmRestaurants(): JSX.Element {
  return (
    <Page title="Stockholm Restaurants">
      <p>
        Below are some of the restaurants in Stockholm I&apos;ve been to and can recommend.
        Everything on this list is good. No stars just means I haven&apos;t decided how to rate it
        yet. 1 star means I&apos;m going back there, 2 means that I think this restaurant is
        mastering its cuisine, and 3 stars means that it&apos;s one of the best meals I&apos;ve ever
        had. The pricing is more of a gut feel thing at the moment.
      </p>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/shr6AVejy9iqgHcgr?backgroundColor=red"
        frameBorder="0"
        width="100%"
        height="800"
        style={{ background: 'transparent', border: '1px solid #ccc' }}
        title="Stockhol Restaurants"
      />
    </Page>
  );
}
