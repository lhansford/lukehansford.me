import React from 'react';
import { format, parseISO } from 'date-fns';
import Markdown from 'markdown-to-jsx';
import { DiscussionEmbed } from 'disqus-react';

interface IProps {
  title: string;
  content: string;
  date: string;
  url: string;
  id: string;
}

const Post = ({ title, content, date, url, id }: IProps): JSX.Element => (
  <>
    <article className="blog-post h-entry">
      <h1 className="p-name">{title}</h1>
      <div className="post-header__date">
        <time className="dt-published" dateTime={parseISO(date).toISOString()}>
          {format(parseISO(date), 'MMM d, y')}
        </time>
      </div>
      <div className="e-content">
        <Markdown>{content}</Markdown>
      </div>
    </article>
    <aside>
      <p style={{ fontStyle: 'italic' }}>
        <a
          href={`https://github.com/lhansford/lukehansford.me/commits/master/public/contents/notes/${id}/index.md`}
        >
          Check out how this note has changed over time here.
        </a>
      </p>
    </aside>

    <DiscussionEmbed
      shortname="lukehansford"
      config={{
        url,
        identifier: id,
        title,
      }}
    />
  </>
);

export default Post;
