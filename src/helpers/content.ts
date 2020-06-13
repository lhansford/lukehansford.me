const fs = require("fs");

interface IIndexData {
  content: string;
  date: string;
  title: string;
}

export interface IProject extends IIndexData {
  description: string;
}

export interface IBlogPost extends IIndexData {}

export interface IPhoto extends IIndexData {
  link: string;
  thumbnail: string;
  images: string;
  description: string;
  videos: string;
}

export interface INote extends IIndexData {
  tags: string;
}

function parseIndexData<T>(directory: string): T {
  const file = fs.readFileSync(`${directory}/index.md`, { encoding: "utf8" });
  const parts = file.split("---");

  if (parts.length !== 3) {
    throw new Error(`Incorrect template format for file ${directory}/index.md`);
  }

  const attributes = parts[1]
    .trim()
    .split("\n")
    .reduce((obj: {}, string: string) => {
      const [key, ...rest] = string.split(":");
      return { ...obj, [key]: rest.join(":").trim() };
    }, {});

  return { content: parts[2].trim(), ...attributes };
}

export enum ContentType {
  PROJECT = "projects",
  BLOG_POST = "articles",
  PHOTO = "photos",
  NOTE = "notes",
}

export interface IContentItem<T> {
  directoryName: string;
  files: string[];
  indexData: T;
}

export function getContentItems<T>(
  contentType: ContentType
): IContentItem<T>[] {
  const directories = fs
    .readdirSync(`./public/contents/${contentType}`, { withFileTypes: true })
    .filter((result) => result.isDirectory())
    .map(result => result.name);
  return directories.map((directoryName) => ({
    directoryName,
    files: fs.readdirSync(`./public/contents/${contentType}/${directoryName}`),
    indexData: parseIndexData<T>(`./public/contents/${contentType}/${directoryName}`),
  }));
}

export function getContentItem<T>(
  contentType: ContentType,
  id: string
): IContentItem<T> {
  return {
    directoryName: id,
    files: fs.readdirSync(`./public/contents/${contentType}/${id}`),
    indexData: parseIndexData<T>(`./public/contents/${contentType}/${id}`),
  };
}

export function getContentPaths(
  contentType: ContentType
): { params: { id: string } }[] {
  return fs
    .readdirSync(`./public/contents/${contentType}`)
    .map((id) => ({ params: { id } }));
}
