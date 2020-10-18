import { Feed } from 'feed';
import { getYear, parseISO } from 'date-fns';
import { Converter } from 'showdown';
import { writeFileSync } from 'fs';

import { getContentItems, ContentType, IBlogPost } from '../src/helpers/content';

const markdownConverter = new Converter();

const feed = new Feed({
  title: 'Luke Hansford',
  description: 'Experiments and notes from Luke Hansford.',
  id: 'http://lukehansford.me',
  link: 'http://lukehansford.me',
  language: 'en',
  // image: "http://example.com/image.png",
  // favicon: "http://example.com/favicon.ico",
  copyright: `All rights reserved ${getYear(new Date())}, Luke Hansford`,
  author: {
    name: 'Luke Hansford',
    email: 'mail@lukehansford.me',
    link: 'http://lukehansford.me',
  },
});

const posts = getContentItems<IBlogPost>(ContentType.BLOG_POST);

posts.forEach((post) => {
  feed.addItem({
    title: post.indexData.title,
    id: `http://lukehansford.me/posts/${post.directoryName}/`,
    link: `http://lukehansford.me/posts/${post.directoryName}/`,
    description: markdownConverter.makeHtml(post.indexData.content),
    // content: post.indexData.content,
    author: [
      {
        name: 'Luke Hansford',
        email: 'mail@lukehansford.me',
        link: 'http://lukehansford.me',
      },
    ],
    date: parseISO(post.indexData.date),
    // image: post.image
  });
});

writeFileSync('./public/feed.xml', feed.rss2());
