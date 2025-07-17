---
title: Papercraft Book
titleTemplate: false
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/tm-a-t.png',
    name: 'Artyom Ivanov',
    title: 'Author',
    links: [
      { icon: 'github', link: 'https://github.com/tm-a-t' },
    ]
  },
  {
    avatar: 'https://www.github.com/vanutp.png',
    name: 'Ivan Filipenkov',
    title: 'Expert',
    links: [
      { icon: 'github', link: 'https://github.com/vanutp' },
    ]
  },
]
</script>


# Papercraft Book <Badge type="info" text="formerly Telegram Bot Handbook"/>

Welcome to the Papercraft Book!
This is your guide to developing user-friendly, feature-rich, and stable bots for Telegram messenger.
The book is independent of any specific programming language or library —
I will gladly accept contributions from readers who add examples for different libraries.

We will cover all major features of the Telegram bot platform,
starting from common features like `/commands` and progressing to more specialized ones,
such as managing join requests and subtopics in groups.
Additionally, we will explore corner cases and development tips.

Another focus of this book is user experience.
The book describes how to make bots easy to use and which Telegram features are more suitable in different cases.

I believe the Papercraft Book to be the most comprehensive and practical guide on developing bots for Telegram.

## Table of contents

The book has four chapters, each divided into multiple pages:

1. [**Development.**](dev/basics)
   Things to note before you start coding: API and libraries, bot configuration, some basic notions and tips.
2. [**Messages.**](messages/sending)
   Features of messages: sending/editing/deleting, commands, markup, buttons.
3. [**Chats.**](chats/users) 
   Managing user data & developing bots for different kinds of chats.
   Rules of PM, groups, and channels. Forums and supergroups.
4. [**Interaction.**](interaction/join-requests) 
   Non-dialog Telegram features: join requests, deep links, payments, mini apps, etc.

Feel free to use navigation on the left or just hit the "Next page" button below.

## Book updated

This site was previously called Telegram Bot Handbook and was more like a reference of Telegram features.
Now, I've rewritten it so it became — well, a book.

The new platform is called Papercraft and also contains the docs for TGPy userbot and my new Folds framework.

## About

<VPTeamMembers size="small" :members="members" />

Some pictures and videos are taken from the Telegram site. Most screenshots are made in Telegram web apps.

The sources are open on GitHub — corrections and improvements are welcome!