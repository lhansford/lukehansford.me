// get existing note names, strip dates, and use to ensure we have no duplicates
// create folder
// create template index.md

import inquirer from 'inquirer';
import slugify from 'slugify';
import { getContentPaths, ContentType } from '../src/helpers/content';
import { format } from 'date-fns';
import { mkdirSync, writeFileSync } from 'fs';

const existingNotes = getContentPaths(ContentType.NOTE).map(p => p.params.id.slice(11));

function getTemplate(title: string): string {
  return `---
title: ${title}
date: ${(new Date()).toISOString()}
tags:
---

## References
`;
}

function validate(input: string): boolean | string {
  const slug = slugify(input, { lower: true, strict: true });
  return existingNotes.includes(slug) ? `A note with ID "${slug} already exists` : true;
}

const main = async () => {

  await inquirer
    .prompt([
      {
        type: 'input',
        name: 'noteTitle',
        message: 'Title:',
        validate,
      },
    ])
    .then(({ noteTitle }) => {
      const slug = slugify(noteTitle, { lower: true, strict: true });
      const dirName = `${format(new Date(), 'yyyy-MM-dd')}-${slug}`;
      mkdirSync(`./public/contents/notes/${dirName}`);
      writeFileSync(`./public/contents/notes/${dirName}/index.md`, getTemplate(noteTitle));
    });
};

main();
