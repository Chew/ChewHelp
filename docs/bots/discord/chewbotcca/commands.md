---
title: Chewbotcca Commands
description: Commands for Chewbotcca Discord bot
---

# Chewbotcca Discord Commands

The majority of commands do not require special permissions. Add it and you're ready to go!

Exceptions are as follows:

- Add Reactions - needed for some paginators to work properly
- External Emotes - makes some commands look nicer (this must be given to the @everyone role for slash-commands)
- Manage Webhooks - to view webhook count in `/channelinfo` and to `/rory follow`

## Command List

:::caution

*Please note: A lot of pages are not complete!*

:::

### Bot Commands

These commands relate to information about the bot, like stats and basic info.

| Command                           | Description                                                                                  |
|-----------------------------------|----------------------------------------------------------------------------------------------|
| [/feedback](commands/feedback.md) | Leave some feedback for Chew! :3                                                             |
| [/help](commands/help.md)         | Get help and some basic information about the bot                                            |
| [/invite](commands/invite.md)     | Get a link to invite the bot to your server                                                  |
| [/ping](commands/ping.md)         | Ping the bot to check its heart rate. Is it ok? If it doesn't respond, it might not be okay. |
| [/stats](commands/stats.md)       | Get some cool, interesting, and very epic stats about the bot                                |

### Fun Commands

Fun commands! Silly commands like 8ball, coinflip, and, of course, Rory!!

| Command                                 | Description                                                                                           |
|-----------------------------------------|-------------------------------------------------------------------------------------------------------|
| [/8ball](commands/8ball.md)             | Ask the magic 8 ball a question!                                                                      |
| [/apod](commands/apod.md)               | Gets the current (or if args, that day's) NASA Astronomy Photo of the Day.                            |
| [/acronym](commands/acronym.md)         | Generates a random acronym based on input! Letters only.                                              |
| [/cat](commands/cat.md)                 | A crucial command. Get a random picture of a cat!                                                     |
| [/catfact](commands/catfact.md)         | Get a random cat fact! Cats are really interesting!                                                   |
| [/coinflip](commands/coinflip.md)       | Flip a coin, very simple!                                                                             |
| [/dog](commands/dog.md)                 | Same as cat, but a dog instead of a cat. Occasionally it puts a video which won't embed, but oh well. |
| [/numberfact](commands/numberfact.md)   | Gets a numberfact for the specified number and type.                                                  |
| [/poll](commands/poll.md)               | Create a poll!                                                                                        |
| [/qrcode](commands/qrcode.md)           | Turn input into a QR Code!                                                                            |
| [/roll](commands/roll.md)               | Rolls dice.  Using this command with no arguments rolls 1 6-sided die.                                |
| [/rory](commands/rory.md)               | Gets a random picture of Rory :3. Add "follow" to receive new Rory pics!                              |
| [/spigotdrama](commands/spigotdrama.md) | Generates some spigot drama.                                                                          |
| [/trbmb](commands/trbmb.md)             | Generate a TRBMB Phrase!                                                                              |

### Info Commands

Commands that send back information about a user, bot, channel, role, ruby gem, or more!

| Command                                 | Description                                                        |
|-----------------------------------------|--------------------------------------------------------------------|
| [/botinfo](commands/botinfo.md)         | Gets bot information from an optionally specified bot list.        |
| [/channelinfo](commands/channelinfo.md) | Gets basic information about a channel.                            |
| [/info](commands/info.md)               | Gets information about a specific command                          |
| [/roleinfo](commands/roleinfo.md)       | Gets information about a role! Add "members" to view role members. |
| [/serverinfo](commands/serverinfo.md)   | Gets basic information for the server                              |
| [/userinfo](commands/userinfo.md)       | Gets user info for you! Mention a user to get their info.          |

### Minecraft Commands

Commands relating to Minecraft, including querying servers, users, and the Minecraft Wiki.

| Command                                                      | Description                                                                                                     |
|--------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| [/hangar](commands/hangar.md)                                | Searches Hangar for a specified project.                                                                        |
| [/modrinth](commands/modrinth.md)                            | Searches modrinth.com for a specified project.                                                                  |
| [/minecraft issue](commands/minecraft.md#issue-subcommand)   | Gets an issue from Mojira or Spigot JIRA and describes it.                                                      |
| [/minecraft server](commands/minecraft.md#server-subcommand) | Queries a Minecraft (Java or Bedrock) server for its stats.                                                     |
| [/minecraft user](commands/minecraft.md#user-subcommand)     | Gets Minecraft profile information for a user, including their name, name history, and a picture of their face. |
| [/minecraft wiki](commands/minecraft.md#wiki-subcommand)     | Searches the Minecraft Wiki for an article and returns a summary and an image.                                  |
| [/wynncraft](commands/wynncraft.md)                          | Finds player or guild stats for Wynncraft.                                                                      |

### Services Commands

Commands that query specific services (e.g. YouTube, GitHub, etc.) for information.

| Command                                                        | Description                                                                               |
|----------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| [/github issue](commands/github.md#issue-subcommand)           | Gets an issue or pull request from the specified GitHub repository.                       |
| [/github user](commands/github.md#user-subcommand)             | Gets a user or org's profile from GitHub                                                  |
| [/github repository](commands/github.md#repository-subcommand) | Gets information about a specific GitHub repo. For example, Chewbotcca/Discord            |
| [/lastfm](commands/lastfm.md)                                  | Gets last played \(or currently playing) song information for the specified last.fm user. |
| [/memerator](commands/memerator.md)                            | Finds a Memerator.me meme or user based on query.                                         |
| [/ocr](commands/ocr.md)                                        | Runs an OCR which finds texts on a given image and returns the result. 1 minute cooldown! |
| [/packages rubygem](commands/packages.md#rubygem-subcommand)   | Gets information for the specific ruby gem.                                               |
| [/reddit](commands/reddit.md)                                  | Grabs a post from a subreddit and links it. Leave both blank for a random post?           |
| [/youtube](commands/youtube.md)                                | Searches YouTube for a video and posts cool stats about it!                               |

### Settings Commands

Commands to manage your settings.

| Command                                       | Description                                            |
|-----------------------------------------------|--------------------------------------------------------|
| [/profile](commands/profile.md)               | Gets your bot profile                                  |
| [/serversettings](commands/serversettings.md) | Get settings for your server. Must have Manage Server. |

### Utility Commands

Commands that are useful for various things, like defining words, and more.

| Command                       | Description                                                                                                                                           |
|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| [/define](commands/define.md) | Defines a word via a dictionary. Returns the first result, may not be the best result, but definitely a result nonetheless.                           |
| [/urban](commands/urban.md)   | Like define, but instead of defining with a real dictionary, it queries the slightly edgier Urban dictionary. As a result, this command is NSFW only. |
