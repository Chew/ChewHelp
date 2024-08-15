/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

    // But you can create a sidebar manually
    /*
    tutorialSidebar: [
      'intro',
      'hello',
      {
        type: 'category',
        label: 'Tutorial',
        items: ['tutorial-basics/create-a-document'],
      },
    ],
     */

    indexSidebar: [
        //'index'
    ],

    chewbotccaSidebar: [
        'bots/discord/chewbotcca',
        'bots/discord/chewbotcca/unfurl',
        {
            type: 'category',
            label: 'Commands',
            link: {
                type: 'doc',
                id: 'bots/discord/chewbotcca/commands',
            },
            items: [
                {
                    type: 'category',
                    label: "Bot Commands",
                    items: [
                        'bots/discord/chewbotcca/commands/feedback',
                        'bots/discord/chewbotcca/commands/help',
                        'bots/discord/chewbotcca/commands/invite',
                        'bots/discord/chewbotcca/commands/ping',
                        'bots/discord/chewbotcca/commands/privacy',
                        'bots/discord/chewbotcca/commands/stats',
                    ]
                },
                {
                    type: 'category',
                    label: "Fun Commands",
                    items: [
                        'bots/discord/chewbotcca/commands/8ball',
                        'bots/discord/chewbotcca/commands/apod',
                        'bots/discord/chewbotcca/commands/acronym',
                        'bots/discord/chewbotcca/commands/alt',
                        'bots/discord/chewbotcca/commands/cat',
                        'bots/discord/chewbotcca/commands/catfact',
                        'bots/discord/chewbotcca/commands/coinflip',
                        'bots/discord/chewbotcca/commands/dog',
                        'bots/discord/chewbotcca/commands/numberfact',
                        'bots/discord/chewbotcca/commands/poll',
                        'bots/discord/chewbotcca/commands/qrcode',
                        'bots/discord/chewbotcca/commands/roll',
                        'bots/discord/chewbotcca/commands/rory',
                        'bots/discord/chewbotcca/commands/spigotdrama',
                        'bots/discord/chewbotcca/commands/trbmb',
                    ]
                },
                {
                    type: 'category',
                    label: "Info Commands",
                    items: [
                        'bots/discord/chewbotcca/commands/botinfo',
                        'bots/discord/chewbotcca/commands/channelinfo',
                        'bots/discord/chewbotcca/commands/discrim',
                        'bots/discord/chewbotcca/commands/info',
                        'bots/discord/chewbotcca/commands/lastfm',
                        'bots/discord/chewbotcca/commands/roleinfo',
                        'bots/discord/chewbotcca/commands/rubygem',
                        'bots/discord/chewbotcca/commands/serverinfo',
                        'bots/discord/chewbotcca/commands/userinfo',
                        'bots/discord/chewbotcca/commands/userstats',
                    ]
                },
                {
                    type: 'category',
                    label: "Minecraft Commands",
                    items: [
                        'bots/discord/chewbotcca/commands/hangar',
                        'bots/discord/chewbotcca/commands/minecraft',
                        'bots/discord/chewbotcca/commands/modrinth',
                        'bots/discord/chewbotcca/commands/wynncraft',
                    ]
                },
                {
                    type: 'category',
                    label: "Services Commands",
                    items: [
                        'bots/discord/chewbotcca/commands/github',
                        'bots/discord/chewbotcca/commands/memerator',
                        'bots/discord/chewbotcca/commands/ocr',
                        'bots/discord/chewbotcca/commands/reddit',
                        'bots/discord/chewbotcca/commands/youtube',
                    ]
                },
                {
                    type: 'category',
                    label: "Settings Commands",
                    items: [
                        'bots/discord/chewbotcca/commands/profile',
                        'bots/discord/chewbotcca/commands/serversettings',
                    ]
                },
                {
                    type: 'category',
                    label: "Utility Commands",
                    items: [
                        'bots/discord/chewbotcca/commands/define',
                        'bots/discord/chewbotcca/commands/quote',
                        'bots/discord/chewbotcca/commands/urban',
                    ]
                },
                {
                    type: 'category',
                    label: "All Commands",
                    items: [
                        {
                            type: 'autogenerated',
                            dirName: 'bots/discord/chewbotcca/commands',
                        }
                    ]
                }
            ]
        }
    ],

    mlbSidebar: [
        'bots/discord/mlb-game-feed',
        {
            type: 'link',
            label: "Add To Server",
            href: 'https://canary.discord.com/api/oauth2/authorize?client_id=987144502374436895&permissions=1067024&scope=bot%20applications.commands'
        },
        'bots/discord/mlb-game-feed/watching-a-game-feed',
        'bots/discord/mlb-game-feed/languages',
        'bots/discord/mlb-game-feed/betting',
        'bots/discord/mlb-game-feed/changelog',
        'bots/discord/mlb-game-feed/planned',
        {
            type: 'category',
            label: 'Commands',
            link: {
                type: 'doc',
                id: 'bots/discord/mlb-game-feed/commands',
            },
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'bots/discord/mlb-game-feed/commands',
                }
            ]
        }
    ]
};

export default sidebars;
