---
title: NaNoCroSoMo [Offline]
description: Man-machine novel writing that makes very little sense.
author: luke
date: 2014-11-23 15:00
template: post.hbs
---
[NaNoCroSoMo](https://nanocrosomo.herokuapp.com/) (National Novel Crowd Sourcing Month) is my take on [NaNoWriMo](http://nanowrimo.org/) inspired by the work of those mentioned in the [recent Verge article](http://www.theverge.com/2014/11/25/7276157/nanogenmo-robot-author-novel) covering the work of a number of programmers trying to use algorithms to generate novels. My implementation meets somewhere in the middle of these two. Every thirty seconds a computer generated word is added to the story. This word is selected using n-grams taken from the Google Books corpus.
To add a human element, however, anyone can add their own word. Simply type a word and hit enter to add it to the story.

So far the results are mixed. There's no narrative from the computer-generated words, as they are only selected based on the previous two words. I've also come across cases where the language randomly changes (usually at the start of a new sentence). Despite these issues, however, the sentences being produced are somewhat legible. I'm more interested to see what could happen if numerous people are editing it at the same time. Hopefully the web gets a hold of it!

You can [view the code on Github](https://github.com/lhansford/NaNoCroSoMo).