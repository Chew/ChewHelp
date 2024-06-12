---
title: Changelog
description: Changelog for the MLB Game Feed Discord bot
---

# MLB Game Feed Bot Changelog

Below is a list of changes to the bot, with most recent changes at the top.

## 2024 Season

### June 12th, 2024

- Fix a bug with the lineup buttons if there's no probable pitcher.

### June 9th, 2024

- The lineup buttons now show the probable pitcher and has better formatting.

### June 6th, 2024

- The team icon now shows in the lineup buttons.
- [`/score`](/bots/discord/mlb-game-feed/commands/score) now works if another channel in the server is running a game.

### June 5th, 2024

- Add [`/standings`](/bots/discord/mlb-game-feed/commands/standings) command to show the current standings for a division.

### March 1st, 2024

- Fix venue not showing the real venue.

## 2023 Season

### November 4th, 2023

- Migrated backend configuration storage. This allows for more configuration options in the future.

### October 4th, 2023

- Add a message when the bot cannot connect to MLB's servers.

### October 1st, 2023

- Fix formatting in `/plangame` when broadcasts are national.

### September 20th, 2023

- The game over summary now shows a proper summary with pitching decisions.
- [`/plangame`](/bots/discord/mlb-game-feed/commands/plangame) has much better and active responses.

### September 2nd, 2023

- [`/score`](/bots/discord/mlb-game-feed/commands/score) now shows players on base, and who is currently pitching and batting.

### August 27th, 2023

- Some options are now localized to Spanish.

### August 26th, 2023

- Command descriptions are now localized to Spanish.

### August 15th, 2023

- Home/Away lineup buttons now show the team name.

### July 28th, 2023

- Suggestions from [`/plangame`](/bots/discord/mlb-game-feed/commands/plangame) completions are more useful.

### July 14th, 2023

- Removed All Star Game Changes
- Fixed a bug where canceled or completed games could be started.

### July 11th, 2023

- Added option to easily find All Star Game and show proper win/losses.

### June 21st, 2023

- Matchup images are now shown when `/plangame`'s `event` option is used.

### May 5th, 2023

- Add support for "Homer at parks" during game feeds if the hit was over 300 feet.

### May 2nd, 2023

- `/plangame` message is now an embed.

### April 4th, 2023

- Added lineup buttons to the `/plangame` message.

### March 30th, 2023

- Added a "Start" button to the `/plangame` message.

### March 28th, 2023

- Added support for creating a thread or a scheduled event when planning a game with the [`/plangame`](/bots/discord/mlb-game-feed/commands/plangame) command.

### March 3rd, 2023

- Added support for games with no broadcasts to `/plangame` command.

### March 1st, 2023

- Improvements to [`/plangame`](/bots/discord/mlb-game-feed/commands/plangame) command.
  - Show probable pitchers
  - Show opponent on dates
  - Show "No TV/Radio" if applicable
  - Response is ephemeral
  - Fix date not being right for night games

### February 26th, 2023

- Add [`/plangame`](/bots/discord/mlb-game-feed/commands/plangame) command to plan a game by sending a message with details of an upcoming game.

## 2022 Season

### October 11th, 2022

- Fixed [`/score`](/bots/discord/mlb-game-feed/commands/score) command not working in threads.

### October 7th, 2022

- Added [`/config`](/bots/discord/mlb-game-feed/commands/config) command to tune the bot to your liking per-channel.

### June 29th, 2022

- Add embed colors to specific plays. For example, a home run will be blue, a strikeout will be red, etc.

### June 24th, 2022

- Bumped delay of results again.

### June 23rd, 2022

- Added [`/setinfo](/bots/discord/mlb-game-feed/commands/setinfo) command to show specific info as a Voice Channel name.

### June 22nd, 2022

- Bumped the delay of results to 9 seconds.

### June 19th, 2022

- Added a 5-second delay for results to show up in the game feed.
- Add [`/stopgame`](/bots/discord/mlb-game-feed/commands/stopgame) command to stop the currently running game.
- Add [`/score`](/bots/discord/mlb-game-feed/commands/score) command to show the current score privately.

### June 18th, 2022

- Show final scorecard at the end of the game.
- Games are now remembered if the bot shuts down, and will be resumed when the bot starts back up.

### June 17th, 2022

- Initial iteration of the bot.
