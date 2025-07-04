import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    'architecture',
    {
      type: 'category',
      label: 'Tutorial - Basics',
      items: [
        'tutorial-basics/create-a-document',
        'tutorial-basics/create-a-blog-post',
        'tutorial-basics/create-a-page',
        'tutorial-basics/deploy-your-site',
        'tutorial-basics/congratulations',
        'tutorial-basics/markdown-features',
      ],
    },
    {
      type: 'category',
      label: 'Tutorial - Extras',
      items: [
        'tutorial-extras/manage-docs-versions',
        'tutorial-extras/translate-your-site',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      collapsed: false,
      items: [
        'api/index',
        {
          type: 'category',
          label: 'Classes',
          items: [
            'api/classes/ExampleConstruct',
            'api/classes/ExampleStack',
          ],
        },
        {
          type: 'category',
          label: 'Interfaces',
          items: [
            'api/interfaces/ExampleConstructProps',
            'api/interfaces/ExampleStackProps',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
