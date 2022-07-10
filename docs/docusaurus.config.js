module.exports = {
  title: 'profileio',
  tagline: 'Simple web and resume generator',
  url: 'https://acrlakshman.github.io',
  baseUrl: '/profileio/',
  onBrokenLinks: 'throw',
  favicon: 'img/webLogo.ico',
  organizationName: 'acrlakshman.github.io',
  projectName: 'profileio',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'Rohit Mishra',
      logo: {
        alt: 'Logo',
        src: 'img/webLogo.ico',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/acrlakshman/profileio',
          label: 'Source Code',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} ProfileIO`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/acrlakshman/profileio/edit/master/docs/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
