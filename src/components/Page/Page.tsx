import React, { ReactNode } from 'react';
import Head from 'next/head';

import Footer from '../Footer/Footer';

interface IProps {
  children: ReactNode;
  title: string;
}

const Page = ({ children, title }: IProps): JSX.Element => (
  <>
    <div className="container">
      <Head key="PageHead">
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <link href="/feed.xml" rel="alternate" title="Luke Hansford" type="application/atom+xml" />

        <link
          href="//fonts.googleapis.com/css?family=Inconsolata:400,700"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.3/styles/zenburn.min.css"
        />
        <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.3/highlight.min.js" />
        <script>hljs.initHighlightingOnLoad();</script>
        <title>Luke Hansford - {title}</title>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <header>
        <div className="page-title">
          <h1>
            <a href="/" rel="author" className="p-author h-card">
              Luke Hansford
            </a>
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/posts">Blog</a>
            </li>
            <li>
              <a href="/notes">Notes</a>
            </li>
            <li>
              <a href="/photos">Photos</a>
            </li>
            <li>
              <a href="/music">Music</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/reading-list">What I&apos;m Reading</a>
            </li>
            <li>
              <a href="/stockholm-restaurants">Stockholm Restaurants</a>
            </li>
            <li>
              <a target="_blank" href="files/resume_luke_hansford_jan_2016.pdf">
                Résumé
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="content">{children}</div>
      <Footer />
    </div>
    <script
      data-goatcounter="https://lukehansford.goatcounter.com/count"
      async
      src="//gc.zgo.at/count.js"
    />
  </>
);

export default Page;
