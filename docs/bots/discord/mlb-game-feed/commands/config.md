---
title: /config Command
description: Description, usage, and examples of the config command for the MLB Game Feed Discord bot.
---

# `/config` Command

The `/config` command allows you to modify config options for the bot per-channel/thread. As of now, there are 4 options.

## Config Options

The config options are as follows.

1. Delay of in-play balls (hits, groundout, etc) (Default: 18 seconds)
2. Delay of no-hit balls (walks, strikeouts, etc) (Default: 13 seconds)
3. Whether to send game advisories. (Default: true)
4. Whether to only send scoring plays. (Default: false)

We spent several weeks fine tuning the defaults of the delays to match the TV broadcast. If you think we're slightly off, you can change it!

## Usage

You can retrieve the current config options with `/config get`.

![config get](https://cdn.chew.pro/imgs/AVrizpP.png)

You can modify an option by typing `/config set`.

![config set](https://cdn.chew.pro/imgs/x5qSmiz.png)

You can modify up to all the options at once.
