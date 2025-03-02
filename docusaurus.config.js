// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const fs = require('fs');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const versionList = JSON.parse(fs.readFileSync('./versions.json', 'utf-8'));
const lastVersion = versionList[0];


const versionListConversion = (/** @type {String[]} */ list) => {
    const versions = {};

    for (const version of list) {
        versions[version] = { label: `v${version}` };
    }

    return versions;
};


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'contract-farming',
  tagline: 'contract-farming',
  favicon: 'img/favicon.ico',

  url: 'https://contract-farming.github.io',
  baseUrl: '/',

  organizationName: 'contract-farming',         // GitHub org/user name.
  projectName: 'contract-farming.github.io',    //repo name.

  trailingSlash: false,

  onBrokenLinks: 'throw',
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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/contract-farming/contract-farming.github.io/blob/main/',
            lastVersion: lastVersion,
            onlyIncludeVersions: versionList,
            versions: versionListConversion(versionList),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/contract-farming/contract-farming.github.io/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'keywords', content: 'react carousel, react swipe, react slick'}],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: 'img/contract-farming-card.webp',
      navbar: {
        title: '契作農地',
        logo: {
          alt: 'contract-farming Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
              type: 'docsVersionDropdown',
              position: 'right',
              // dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
              dropdownActiveClassDisabled: false,
          },
          {
            href: 'https://github.com/contract-farming/contract-farming.github.io',
            position: 'right',
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © 2023-${new Date().getFullYear()} contract-farming, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        injectManifestConfig: {
          manifestTransforms: [
            //...
          ],
          modifyURLPrefix: {
            //...
          },
          // We already add regular static assets (HTML, images...) to be available offline
          // You can add more files according to your needs
          globPatterns: ['**/*.{pdf,docx,xlsx}'],
          // ...
        },
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#09d3ac',
          },
        ],
      },
    ]
  ]
};

module.exports = config;