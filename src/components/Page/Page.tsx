import React, { ReactNode } from "react";
import Head from "next/head";
import Footer from "../Footer/Footer";

interface IProps {
  children: ReactNode;
  title: string;
}

const Page = ({ children, title }: IProps): JSX.Element => (
  <div className="container">
    <Head key="PageHead">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <link
        href="/feed.xml"
        rel="alternate"
        title="Luke Hansford"
        type="application/atom+xml"
      />

      <link
        href="//fonts.googleapis.com/css?family=Inconsolata:400,700"
        rel="stylesheet"
        type="text/css"
      />
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.3/styles/zenburn.min.css"
      />
      <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.3/highlight.min.js"></script>
      <script>hljs.initHighlightingOnLoad();</script>
      <title>Luke Hansford - {title}</title>
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
            <a href="/photos">Photos</a>
          </li>
          <li>
            <a href="/music">Music</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/reading-list">What I'm Reading</a>
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
);

export default Page;
