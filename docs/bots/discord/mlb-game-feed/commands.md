---
title: Commands
description: Commands in the MLB Game Feed Discord bot
---

# Commands

The bot current has 7 commands.

## Game Feed Commands

The bot is primarily a game feed bot, and these commands are used to interact with the game feed.

- [`/plangame`](/bots/discord/mlb-game-feed/commands/plangame) - Plans a game by sending an embed of the upcoming game. Optionally create a thread or a scheduled event! Select a team, then a date, shows up to 25 upcoming games. Optionally pass a sport to find minor league games!
- [`/score`](/bots/discord/mlb-game-feed/commands/score) - Shows you the current score privately.
- [`/startgame [game]`](/bots/discord/mlb-game-feed/commands/startgame) - Starts a game. Select a game from the list, but any gamePk is acceptable. You can grab this from sites like https://mlb.chew.pw to show minor league games. If no games show up, there are no active Major League games.
- [`/stopgame`](/bots/discord/mlb-game-feed/commands/stopgame) - Stops the currently running game.
- [`/setinfo`](/bots/discord/mlb-game-feed/commands/setinfo) - A command to show specific info as a Voice Channel name.
- [`/config`](/bots/discord/mlb-game-feed/commands/config) - A way to tune the bot to your liking per-channel!

## Other Commands

There are other commands as well, to view standings and other information (soon!)

- [`/standings`](/bots/discord/mlb-game-feed/commands/standings) - Shows the current standings for the provided division.

## Permissions

The bot requires these permissions (and why):

- Manage Channels - For `/setinfo`
- Create Events - For `/plangame`
- View Channels, Send Messages, Embed Links - For basic bot functionality. *Only required in channels where you intend to run games.*
- Create Public Threads - For `/plangame`. *Only required in channels where you intend to run the games.*

The bot does NOT do permission checking (except for its own permissions).

Commands access must be modified and fine tuned in Discord's integrations settings for the server. However, by default, some commands do require the user to have certain permissions, but these can be overridden by adding roles/members. Here are commands that require a permission:

- `/config` - Requires the user to have Manage Channels.
- `/setinfo` - Requires the user to have Manage Channels.

If you wish to edit where commands can be ran, who can run them, etc, head to your server's integration settings:

Here's how to edit permissions:

1) Go to your server settings, then click Integrations.
    ![step1](https://cdn.chew.pro/imgs/iQcwiI2.png)

2) Select a command, for example, `/startgame`
   ![step2](https://cdn.chew.pro/imgs/uOiUnCr.png)

3) Use the menu to add roles/channels.
   ![step3](https://cdn.chew.pro/imgs/PvbeVzE.png)
