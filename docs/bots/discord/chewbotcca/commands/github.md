---
title: /github
description: Breakdown and description for the github command for the Chewbotcca Discord bot
---

# `/github` Command

Gathers some info from GitHub

## `issue` Subcommand

Gathers an issue from a repository on GitHub

### Arguments

| Name  | Type   | Kind     | Description                                  |
|-------|--------|----------|----------------------------------------------|
| repo  | String | Required | The repo to look up (format: UserOrOrg/Repo) |
| issue | String | Required | The issue. Provide a number or search term   |

## `repository` Subcommand

Gathers a repository from GitHub

### Arguments

| Name | Type   | Kind     | Description                                  |
|------|--------|----------|----------------------------------------------|
| repo | String | Required | The repo to look up (format: UserOrOrg/Repo) |

## `user` Subcommand

Gathers a user from GitHub

### Arguments

| Name     | Type   | Kind     | Description                                 |
|----------|--------|----------|---------------------------------------------|
| username | String | Optional | The user to look up (default: yours if set) |

## Permissions

Bots need the following permissions: Embed Links.
