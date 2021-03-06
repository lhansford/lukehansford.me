import { parseISO, format } from 'date-fns';

import Page from '../../components/Page/Page';
import {
  ContentType,
  IPhoto,
  getContentItem,
  IContentItem,
  getContentPaths,
} from '../../helpers/content';

export default function Photo({
  photo: {
    indexData: { date, description, link, images, videos },
  },
}: {
  photo: IContentItem<IPhoto>;
}) {
  const formattedDate = format(parseISO(date), 'MMM d, y');
  const title = `Photo from ${formattedDate}`;
  return (
    <Page title={title}>
      <article className="blog-post h-entry">
        <h1 className="p-name">{title}</h1>
        <div className="post-header__date">
          <time className="dt-published" dateTime={parseISO(date).toISOString()}>
            {formattedDate}
          </time>
        </div>
        <div className="e-content">
          <p>{description}</p>
          {videos
            .split(',')
            .filter((f) => f.length > 0)
            .map((src) => (
              <video key={`video-${src}`} src={`/contents${src}`} controls />
            ))}
          {images
            .split(',')
            .filter((f) => f.length > 0)
            .map((src) => (
              <img key={`image-${src}`} src={`/contents${src}`} alt={description} />
            ))}
          <p>
            <a href={link}>Original post</a>
          </p>
        </div>
      </article>
    </Page>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      photo: getContentItem<IPhoto>(ContentType.PHOTO, context.params.id),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getContentPaths(ContentType.PHOTO),
    fallback: false,
  };
}
