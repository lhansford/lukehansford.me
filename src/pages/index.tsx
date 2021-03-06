import Page from '../components/Page/Page';

export default function Home() {
  return (
    <Page title="Home">
      <h2>Hey, I&apos;m Luke</h2>
      <p>
        I&apos;m a Stockholm based developer at <a href="https://fishbrain.com">Fishbrain</a>.
      </p>
      <p>
        I&apos;m also the founder of the internet radio station{' '}
        <a href="https://frequency.asia">Frequency Asia</a>, co-founder of independent music
        label/magazine <a href="http://jingweir.tumblr.com/">Jingweir</a>, and an{' '}
        <a href="http://www.lukehansford.me/music.html">intermittent musician</a>.
      </p>
      <p>
        The best way to contact me is via{' '}
        <a href="mailto:mail@lukehansford.me" rel="me">
          email
        </a>
        , but feel free to connect with me through{' '}
        <a href="https://twitter.com/lukehansford" rel="me">
          Twitter
        </a>
        ,{' '}
        <a href="https://github.com/lhansford" rel="me">
          Github
        </a>
        , <a href="https://bandcamp.com/frequencyasia">Bandcamp</a>, or{' '}
        <a href="https://soundcloud.com/dallol">Soundcloud</a>.
      </p>
    </Page>
  );
}
