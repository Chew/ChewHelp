// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type {Options, ThemeConfig} from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ChewHelp',
  tagline: "Knowledgebase for Chew's Projects",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://help.chew.pro',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Chew', // Usually your GitHub org/user name.
  projectName: 'ChewHelp', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Chew/ChewHelp/tree/master/',

          routeBasePath: '/', // Serve the docs at the site's root
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }) satisfies Options,
    ],
  ],

  themeConfig:
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: "Chew's Projects",
        logo: {
          alt: 'ChewHelp Logo',
          src: 'https://cdn.discordapp.com/emojis/753826144272515122.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Home',
          },
          {
            type: 'dropdown',
            sidebarId: 'discordBots',
            position: 'left',
            label: 'Discord Bots',
            items: [{
              label: 'Chewbotcca',
              href: '/bots/discord/chewbotcca',
            }, {
              label: "MLB Game Feed",
              href: '/bots/discord/mlb-game-feed',
            }]
          },
          {
            href: 'https://github.com/Chew/ChewHelp',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Home',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/sSpqETA',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/chewcodes',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Chew/ChewHelp',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Chew. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.oneLight,
        darkTheme: prismThemes.oneDark,
      },
      themeConfig: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      }
    }) satisfies ThemeConfig,
}

export default config;
