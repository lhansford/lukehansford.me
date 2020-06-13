import Page from "../components/Page/Page";

export default function StockholmRestaurants() {
  return (
    <Page title="Stockholm Restaurants">
      <p>
        Below are some of the restaurants in Stockholm I've been to and can
        recommend. Everything on this list is good. No stars just means I
        haven't decided how to rate it yet. 1 star means I'm going back there, 2
        means that I think this restaurant is mastering its cuisine, and 3 stars
        means that it's one of the best meals I've ever had. The pricing is more
        of a gut feel thing at the moment.
      </p>
      <p>
        Inspired by{" "}
        <a href="https://maxistentialism.com/chicago/">
          Max Temkin's Chicago restaurants list
        </a>
        .
      </p>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/shr6AVejy9iqgHcgr?backgroundColor=red"
        frameBorder="0"
        width="100%"
        height="800"
        style={{ background: "transparent", border: "1px solid #ccc" }}
      ></iframe>
    </Page>
  );
}
