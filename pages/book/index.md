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
After that, it explores the Telegram features that shape real bots:
dialogs, commands, buttons, groups, channels, forums, and product features such as login or payments.

I focus on good user experience.
You'll learn when a command is enough, and when more complex surfaces provide a better flow.

This aims to be the most comprehensive and practical guide on developing bots for Telegram.

## Build the first working program

At minimum, you need four things:

1. A bot registered in [BotFather](botfather).
2. A token for controlling the bot.
3. A library for your programming language.
4. A program that receives [updates](updates) and sends responses.

While you can run the bot program on your computer during development,
you'll want to deploy it to a hosting service when the code is ready for production.

The following section covers these steps in order.


## Who made this?

<VPTeamMembers size="small" :members="members" />

Some pictures and videos are taken from the Telegram site. Most screenshots are made in Telegram web apps.

The sources are open on GitHub—corrections and improvements are welcome!
