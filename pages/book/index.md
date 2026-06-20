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
This is a practical guide to developing user-friendly, feature-rich, and stable bots for Telegram.
The book is independent of any specific programming language or library—
contributions with examples for different libraries are welcome.

The book starts with the path to a working bot:
register it, choose a library, receive updates, and run the program on a server.
After that, it focuses on the Telegram features that shape real bots:
dialogs, commands, buttons, groups, channels, forums, and product features such as login or payments.

Another focus is user experience.
You'll learn when a command is enough, when buttons are better, why deep links matter,
and which Telegram limits affect the way you store data and send messages.

This aims to be the most comprehensive and practical guide on developing bots for Telegram.

## Choose a path

You can read the book in order or jump to the path that matches your bot:

- [**Build and ship a bot.**](dev/basics)
  Create a bot, choose a library, receive updates, and run it outside your laptop.
- [**Design conversations.**](chats/pm)
  Start personal dialogs, choose between commands and buttons, and send messages that behave well.
- [**Work with chats.**](chats/users)
  Store user data correctly and support groups, forums, channels, supergroups, and IDs.
- [**Add Telegram features.**](interaction/join-requests)
  Use join requests, inline mode, login, mini apps, payments, stickers, and HTML games.
- [**Use reference pages.**](dev/api)
  Check Bot API vs Telegram API differences and other lists when you need details.

Use the navigation on the left to follow the book in order or jump to a specific topic.

## Who made this?

<VPTeamMembers size="small" :members="members" />

Some pictures and videos are taken from the Telegram site. Most screenshots are made in Telegram web apps.

The sources are open on GitHub—corrections and improvements are welcome!
