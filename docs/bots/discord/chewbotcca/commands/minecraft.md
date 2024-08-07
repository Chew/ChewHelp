---
title: /minecraft
description: Breakdown and description for the minecraft command for the Chewbotcca Discord bot
---

# `/minecraft` Command

Gathers some info from Minecraft

## `issue` Subcommand

Searches Mojira or Spigot MC Jira for a specified issue. Requires PROJ-NUM or link

### Arguments

| Name | Type | Kind | Description |
| ---- | ---- | ---- | ----------- |
| issue | String | Required | The issue to lookup |

## `server` Subcommand

Find some information about a specified server

### Arguments

| Name | Type | Kind | Description |
| ---- | ---- | ---- | ----------- |
| ip | String | Required | The server IP, port optional |

## `user` Subcommand

Looks up a Minecraft user and returns their profile

### Arguments

| Name | Type | Kind | Description |
| ---- | ---- | ---- | ----------- |
| user | String | Required | The user name or UUID to lookup |

## `wiki` Subcommand

Search the [Minecraft Wiki](https://minecraft.wiki) for the specified query (case-insensitive).
Returns the first result (if any) and shows the summary and a picture (if any).

### Arguments

| Name  | Type   | Kind     | Description                     |
|-------|--------|----------|---------------------------------|
| query | String | Required | The query to lookup on the wiki |

### Example

![minecraft wiki command usage](https://cdn.chew.pro/imgs/bdnczGF.png)

## Permissions

The bot does not need any special permissions to run this command.
