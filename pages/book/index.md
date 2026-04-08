---
title: Papercraft Book
titleTemplate: false
description: An online book on developing Telegram bots. Focuses on building user-friendly, feature-rich, and stable bots.
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/tm-a-t.png',
    name: 'Art Ivanov',
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


# Papercraft Book

<p style="display: flex; align-items: start;">
    <a href="https://github.com/tm-a-t/papercraft" target="_blank">
        <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/tm-a-t/papercraft?style=flat-square&logo=github" style="border-radius: 10px">
    </a>
    <Badge type="info" text="formerly Telegram Bot Handbook"/>
</p>

---

Welcome to the Papercraft Book!
This is your guide to developing user-friendly, feature-rich, and stable bots for Telegram.
The book is independent of any specific programming language or library—
contributions with examples for different libraries are welcome.

We cover all major features of the Telegram bot platform,
starting from common features like `/commands` and progressing to specialized ones,
such as managing join requests and forum topics.
You'll also find corner cases and development tips throughout.

Another focus is user experience.
You'll learn how to make bots easy to use and which Telegram features work best in different scenarios.

This aims to be the most comprehensive and practical guide on developing bots for Telegram.

## What’s inside?

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

Feel free to use navigation on the left or just hit the “Next page” button below.

## Who made this?

<VPTeamMembers size="small" :members="members" />

Some pictures and videos are taken from the Telegram site. Most screenshots are made in Telegram web apps.

The sources are open on GitHub—corrections and improvements are welcome!
