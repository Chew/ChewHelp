---
title: Watching a Game Feed
description: See examples and usage of how running a game works for the MLB Game Feed Discord bot
---

# Watching a Game Feed

The core of the bot is watching game feeds. A feed can be started with the [`/startgame`](/bots/discord/mlb-game-feed/commands/startgame) command, or the Start button on the [`/plangame`](/bots/discord/mlb-game-feed/commands/plangame) command.

Every 10 seconds, the bot will query MLB to find new events. They will send after a [configurable](/bots/discord/mlb-game-feed/commands/config) amount of time depending on the action.

## Messages

There are 3 types of messages the bot will send during play.

### Play Events

Play events are results of plate appearances. For example, a walk, a hit, etc. They only get sent after a plate appearance is over. However, messges may get re-sent whenever it changes, most commonly due to reviews.

![out](https://cdn.chew.pro/imgs/jFlqhGI.png)

If a ball goes more than 300 feet, the bot will check baseball savant to see how many ballparks the hit would have been a homer at. It will additionally show if it would have been one at the opponent's ballpark.

![hit](https://cdn.chew.pro/imgs/cRhRQDp.png)

Speaking of, when a team scores, or when the 3rd out is reached, the score will be shown in the embed.

Play events are also color coded. In order of priority, blue means a player has scored, red means a player has gotten out, and green means the player has reached base via walk or hit by pitch.

### Game Advisories

The bot will also post game advisories. These typically include pitching changes, mound visits, and batter timeouts, but also include game delays and state changes, such as to Warmup or In Progress. Additionally, inning state changes are also sent as well. Below are some examples.

![inning](https://cdn.chew.pro/imgs/XSZ2gXd.png)

![switches](https://cdn.chew.pro/imgs/wH8xWqs.png)

![mound visit](https://cdn.chew.pro/imgs/YB0WaRS.png)

![injury delay](https://cdn.chew.pro/imgs/kJ72Lam.png)

![wild pitch](https://cdn.chew.pro/imgs/gH1rttE.png)

![batter timeout](https://cdn.chew.pro/imgs/8JyuVk4.png)

### Final Scorecard

At the end of the game, a final scorecard is sent to the channel, showing the inning breakdown, score/hits/errors/LOB, with a button to view the game on my MLB Stats website.

![scorecard](https://cdn.chew.pro/imgs/y3P97b6.png)
