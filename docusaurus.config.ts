import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Dynamic docs version handling so we can opt-in to viewing / editing the unversioned ("current") docs in dev.
// Run with DOCS_DEV=1 (via the new npm script) to include the live /docs content as the root version.
// In normal runs we only serve the published versioned docs for a production-like view.
// This lets you edit files in `docs/` and see hot-reload changes immediately without creating a new version.
//
// Usage:
//   npm run dev:current  -> includes 'current' (unversioned) docs at root
//   npm start            -> production style, only versioned docs
//
// If you already launched without DOCS_DEV and switch, you may want to `npm run clear` once to reset cache.

// eslint-disable-next-line @typescript-eslint/no-var-requires
const versions: string[] = require('./versions.json');
const includeCurrent = process.env.DOCS_DEV === '1' || process.env.DOCS_DEV === 'true';
const onlyIncludeVersions = includeCurrent ? ['current', ...versions] : versions;

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '🎭 Playwright SAP - Automated Testing for SAP Applications',
  tagline: 'SAP Testing & Automation',
  future: {
    v4: true,
  },
  url: 'https://playwright-sap.dev',
  baseUrl: '/',
  organizationName: 'ArpitSureka',
  projectName: 'playwright-sap',
  favicon: "img/playwright-logo.ico",
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
          // When DOCS_DEV is enabled we inject the live current docs first so changes are hot-reloaded.
          onlyIncludeVersions,
          // When showing current, make it the last (latest) version so it appears as default.
          lastVersion: includeCurrent ? 'current' : undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
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
    {
      tagName: 'script',
      attributes: {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-PQW7XM5D0Q',
        type: 'text/javascript',
        async: 'true',
      }
    },
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
      },
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-PQW7XM5D0Q');
      `
    }
  ],
  customFields: {
    description: 'Specialized Playwright extension for reliable SAP application testing',
    keywords: ['playwright', 'sap', 'automation', 'testing', 'ui5', 'fiori', 'webgui', 'e2e testing', 'end-to-end testing', 'test automation', 'SAP Automation', 'SAP Testing', 'SAP UI5 Testing', 'SAP Fiori Testing', 'SAP WebGUI Testing', 'Worsoft', 'E2E Testing', 'UIPath', 'Automation Anywhere'],
  },
  plugins: [
    'docusaurus-plugin-llms',
  ],
  scripts: [
    {
      src: 'https://scripts.simpleanalyticscdn.com/latest.js',
      async: true,
      'data-hostname': 'playwright-sap.dev'
    },
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-PQW7XM5D0Q',
      async: true,
    },
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    metadata: [
      { name: 'og:title', content: 'Playwright SAP - Automated Testing for SAP Applications' },
      { name: 'og:description', content: 'Specialized Playwright extension for reliable SAP application testing including Fiori, WebGUI, and UI5 applications' },
    ],
    navbar: {
      title: 'Playwright SAP',
      logo: {
        alt: "Playwright logo",
        src: "img/playwright-logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          label: "Docs",
          position: "left",
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
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
    // footer: {
    //   style: "dark",
    //   copyright: `Copyright © ${new Date().getFullYear()} Microsoft`,
    // },
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
