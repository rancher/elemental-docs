// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Elemental - Immutable Linux for Rancher',
  url: 'https://rancher.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rancher', // Usually your GitHub org/user name.
  projectName: 'elemental-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    ["@docusaurus/plugin-client-redirects",
      {
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          {
            to: '/installation',
            from: '/elemental/installation',
          },
          {
            to: '/',
            from: '/elemental',
          },
          {
            to: '/architecture',
            from: '/elemental/architecture',
          },
          {
            to: '/backup',
            from: '/elemental/backup',
          },
          {
            to: '/cloud-config-reference',
            from: '/elemental/cloud-config-reference',
          },
          {
            to: '/cluster-reference',
            from: '/elemental/cluster-reference',
          },
          {
            to: '/customizing',
            from: '/elemental/customizing',
          },
          {
            to: '/elemental-plans',
            from: '/elemental/elemental-plans',
          },
          {
            to: '/elementaloperatorchart-reference',
            from: '/elemental/elementaloperatorchart-reference',
          },
          {
            to: '/inventory-management',
            from: '/elemental/inventory-management',
          },
          {
            to: '/kubernetesversions',
            from: '/elemental/kubernetesversions',
          },
          {
            to: '/machineinventoryselectortemplate-reference',
            from: '/elemental/machineinventoryselectortemplate-reference',
          },
          {
            to: '/machineregistration-reference',
            from: '/elemental/machineregistration-reference',
          },
          {
            to: '/quickstart',
            from: '/elemental/quickstart',
          },
          {
            to: '/restore',
            from: '/elemental/restore',
          },
          {
            to: '/smbios',
            from: '/elemental/smbios',
          },
          {
            to: '/tpm',
            from: '/elemental/tpm',
          },
          {
            to: '/troubleshooting-restore',
            from: '/elemental/troubleshooting-restore',
          },
          {
            to: '/upgrade',
            from: '/elemental/upgrade',
          },
        ],
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          include: ['**/*.md', '**/*.mdx'],
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
      algolia: {
        appId: 'QLF01IU46G',
        apiKey: '6399abce2893cd405e6b53acf2667f51',
        indexName: 'elemental',
        contextualSearch: true,
      },
      navbar: {
        title: 'Elemental',
        logo: {
          alt: 'Elemental - Immutable Linux for Rancher',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/rancher/elemental',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            href: 'https://rancher-users.slack.com/channels/elemental',
            position: 'right',
            className: 'header-slack-link',
            'aria-label': 'Slack Channel',
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
                label: 'Elemental',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack #elemental',
                href: 'https://rancher-users.slack.com/channels/elemental',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Elemental Toolkit',
                href: 'https://rancher.github.io/elemental-toolkit',
              },
              {
                label: 'Elemental Operator',
                href: 'https://github.com/rancher/elemental-operator',
              },
              {
                label: 'Elemental CLI',
                href: 'https://github.com/rancher/elemental-cli',
              },
              {
                label: 'Rancher System Agent',
                href: 'https://github.com/rancher/system-agent',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SUSE Rancher. All Rights Reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['docker'],
      },
    }),
};

module.exports = config;
