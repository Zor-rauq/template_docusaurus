import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Documentation Technique',
  tagline:
    "Traçabilité des informations et technologies découvertes au fil du travail — approche Docs as Code",
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://Zor-rauq.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/template_docusaurus/',

  // GitHub pages deployment config.
  organizationName: 'Zor-rauq', // Usually your GitHub org/user name.
  projectName: 'template_docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Remove this to remove the "Modifier cette page" links.
          editUrl: 'https://github.com/Zor-rauq/template_docusaurus/tree/main/',
        },
        blog: {
          routeBasePath: 'blog',
          blogTitle: 'Journal',
          blogDescription:
            'Carnet de bord chronologique des découvertes et notes techniques du quotidien.',
          blogSidebarTitle: 'Billets récents',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Remove this to remove the "Modifier cette page" links.
          editUrl: 'https://github.com/Zor-rauq/template_docusaurus/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Documentation Technique',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Journal', position: 'left'},
        {
          href: 'https://github.com/Zor-rauq/template_docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Cartographie', to: '/docs/cartographie/'},
            {label: 'Architecture', to: '/docs/architecture/'},
            {label: 'Procédures', to: '/docs/procedures/'},
            {label: 'Référentiel', to: '/docs/referentiel/'},
            {label: 'Historique', to: '/docs/historique/'},
          ],
        },
        {
          title: 'Plus',
          items: [
            {label: 'Journal', to: '/blog'},
            {label: 'GitHub', href: 'https://github.com/Zor-rauq/template_docusaurus'},
          ],
        },
        {
          title: 'Ressources',
          items: [
            {
              label: 'Guide Docs as Code (Stéphane Robert)',
              href: 'https://blog.stephane-robert.info/docs/documenter/',
            },
            {label: 'Docusaurus', href: 'https://docusaurus.io/'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Antonin Quarroz. Construit avec Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
