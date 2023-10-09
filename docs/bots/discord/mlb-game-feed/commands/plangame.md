---
title: /plangame Command
description: Description, usage, and examples about the /plangame command for the MLB Game Feed Discord bot.
---

# /plangame Command

The `/plangame` command allows users to "plan" a game to run. Games can be picked up to 25 games in advance, with options to make a thread, support for forum channels, ability to make an event, and buttons to view the lineup, and more.

## Usage

The command has 6 options, 3 of which are required.

The required options are:

1. Team Name
2. Channel to post planned game to (text and forum channels only)
3. The date of the game

The optional options are:

4. Sport, used to select a minor league game. Defaults to the majors.
5. Thread, whether to make a thread (in text channels) or not. Defaults to false. (Bot requires Create Public Thread)
6. Whether to make an event for the game or not. Defaults to false. (Bot requires Create Events)

A successful input of the command may look like this:

![usage](https://cdn.chew.pro/imgs/xJIlAbHo.png)

## Examples

Below is an example output of the command.

![example](https://cdn.chew.pro/imgs/mbEIK7h.png)

Below is an example of the event that is created when `event` is set to `true`.

![event](https://cdn.chew.pro/imgs/bE4JRNO.png)
