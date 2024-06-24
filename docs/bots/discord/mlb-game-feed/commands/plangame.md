---
title: /plangame Command
description: Description, usage, and examples for the /plangame command for the MLB Game Feed Discord bot.
---

# `/plangame` Command

The `/plangame` command allows users to "plan" a game to run. 
Games can be picked up to 25 games in advance, with options to make a thread, support for forum channels, ability to make an event, buttons to view the lineup, and more.

## Usage

The command has 6 options, 2 of which are required.

The required options are:

- `team` - The team name. You can search to narrow down the list.
- `date` - The date of the game.

The optional options are:

- `channel` - Channel to post planned game to (text and forum channels only). By default, it will use the current channel.
- `sport` - Sport, used to select a minor league game. Defaults to the majors. If changed, you will need to search for the team.
- `thread` - Thread, whether to make a thread (in text channels) or not. Defaults to false. 
(Bot requires `Create Public Thread` if the `channel` is a text channel, or the ability to post in the specified `forum` channel.)
- `event` - Whether to make an event for the game or not. Defaults to false. (Bot requires `Create Events`)

A successful input of the command may look like this:

![usage](https://cdn.chew.pro/imgs/xJIlAbHo.png)

## Examples

Below is an example output of the command.

![example](https://cdn.chew.pro/imgs/mbEIK7h.png)

Below is an example of the event that is created when `event` is set to `true`.

![event](https://cdn.chew.pro/imgs/bE4JRNO.png)
