---
title: /config Command
description: Description, usage, and examples of the config command for the MLB Game Feed Discord bot.
---

# `/config` Command

The `/config` command allows you to modify settings for your server and game channels. There are sub-commands depending on what you want to change.

## `/config channel`

The `/config channel` subcommand allows you to modify config options for the bot per-channel/thread. As of now, there are 4 options.

### Config Options

The current channel config options are as follows.

1. Delay of in-play balls (hits, ground out, etc.) (Default: 18 seconds)
2. Delay of no-hit balls (walks, strikeouts, etc.) (Default: 13 seconds)
3. Whether to send game advisories. (Default: true)
4. Whether to only send scoring plays. (Default: false)

We spent several weeks fine-tuning the defaults of the delays to match the TV broadcast. If you think we're slightly off, you can change it!

### Usage

You can retrieve the current config options by running `/config channel` with no arguments.

![config get](https://cdn.chew.pro/imgs/9a3BtJ1.png)

You can modify an option by typing `/config channel` and setting the arguments you wish to change.

![config set](https://cdn.chew.pro/imgs/SOigWpH.png)

You can modify as many options at once.

## `/config server`

The `/config server` subcommand allows you to modify config options for the bot per-server. As of now, there is 1 option.

### Config Options

The current server config options are as follows. These aren't currently used, but there are [plans to use them in the future](../planned.md).

1. The associated team of the server. E.g. Texas Rangers. (Default: None)

### Usage

Much like `/config channel`, you can retrieve the current config options by running `/config server` with no arguments.

If you have not already set any configuration options, you will see the following message.

![config server no server](https://cdn.chew.pro/imgs/Przb3Mv.png)

You can modify an option by typing `/config server` and setting the arguments you wish to change.

![config server set](https://cdn.chew.pro/imgs/DYNKiOI.png)

Once you set it, you can run `/config server` again to see the changes.

![config server set](https://cdn.chew.pro/imgs/JBr42jC.png)
