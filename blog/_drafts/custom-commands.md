---
layout: blogpost
title:  Custom Commands
---

The next major milestone for Lacona will be custom *addons*. I wanted to give a quick preview of how these work. It's a bit technical, but rest assured you won't need to understand this completely to make good use of addons.

Addons are composed of *commands* and *slots*.

Commands are a composed of a sentence which starts with a verb, which may reference any number of slots. You can *execute* a command for it to perform some action on your Mac.

Slots are the individual bits of data you fill in within commands. You can also enter slots first, add them to the [shelf](/guide#shelf), and fill in the command afterwards.

#### An Example

Let's say we want to build a [Github](https://github.com) addon. There could be many useful commands we may want to build - opening repos or comments, sending out pull requests, or closing issues. But for starters, let's 