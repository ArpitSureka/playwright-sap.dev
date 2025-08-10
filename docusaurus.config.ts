import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '🎭 Playwright SAP - Automated Testing for SAP Applications',
  tagline: 'Specialized Playwright module for Reliable SAP Web Applications Testing',
  // favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
    url: 'https://ArpitSureka.github.io',
  baseUrl: '/playwright-sap/',
  organizationName: 'ArpitSureka',
  projectName: 'playwright-sap',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Playwright-SAP is a specialized extension for Microsoft Playwright that provides reliable automation for SAP applications including Fiori Launchpad, SAP WebGUI, and UI5-based applications.',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'playwright, sap, automation, testing, ui5, fiori, webgui, e2e testing, end-to-end testing, test automation, SAP Automation, SAP Testing, SAP UI5 Testing, SAP Fiori Testing, SAP WebGUI Testing, Worsoft,E2E Testing, UIPath, Automation Anywhere',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:type',
        content: 'website',
      },
    },
  ],
  customFields: {
    description: 'Specialized Playwright extension for reliable SAP application testing',
    keywords: ['playwright', 'sap', 'automation', 'testing', 'ui5', 'fiori', 'webgui', 'e2e testing', 'end-to-end testing', 'test automation', 'SAP Automation', 'SAP Testing', 'SAP UI5 Testing', 'SAP Fiori Testing', 'SAP WebGUI Testing', 'Worsoft', 'E2E Testing', 'UIPath', 'Automation Anywhere'],
  },
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    // Project's social card for better sharing on social media
    // image: 'img/playwright-sap-social-card.jpg',
    metadata: [
      // {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'og:title', content: 'Playwright SAP - Automated Testing for SAP Applications'},
      {name: 'og:description', content: 'Specialized Playwright extension for reliable SAP application testing including Fiori, WebGUI, and UI5 applications'},
    ],
    navbar: {
      title: '🎭 Playwright SAP',
      items: [
        {
          href: 'https://www.npmjs.com/package/playwright-sap',
          label: 'NPM',
          position: 'right',
        },
        {
          href: 'https://github.com/ArpitSureka/playwright-sap',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    sidebar: {
      autoCollapseCategories: false,
      hideable: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
