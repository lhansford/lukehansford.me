import React from 'react';

import styles from './Footer.module.css';

const Footer = (): JSX.Element => (
  <footer>
    <div className="footer">
      <a href="http://twitter.com/lukehansford" rel="me">
        <i className="fa fa-twitter fa-3x" />
      </a>
      <a href="http://github.com/lhansford" rel="me">
        <i className="fa fa-github fa-3x" />
      </a>
      <a href="http://soundcloud.com/dallol">
        <i className="fa fa-soundcloud fa-3x" />
      </a>
      <a href="/feed.xml">
        <i className="fa fa-rss fa-3x" />
      </a>
    </div>
    <div className="h-card">
      <p className={styles.name}>
        <a className="p-name u-url" href="http://lukehansford.me">
          Luke Hansford
        </a>
      </p>
      <p className={styles.name}>
        <a className="u-email" href="mailto:mail@lukehansford.me">
          mail@lukehansford.me
        </a>
      </p>
      <p className={styles.location}>
        <span className="p-locality">Stockholm</span>,<span className="p-country-name">Sweden</span>
      </p>
      <p className={styles.sourceCode}>
        <a href="https://github.com/lhansford/lukehansford.me">
          View the source code for this blog on GitHub.
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
