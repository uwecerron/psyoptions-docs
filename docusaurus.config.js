module.exports = {
  title: "PsyOptions",
  tagline: "Trustless options protocol on Solana",
  url: "https://mithraiclabs.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/PsyOps.svg",
  organizationName: "mithraiclabs", // Usually your GitHub org/user name.
  projectName: "psyoptions-docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "PsyOptions",
      logo: {
        alt: "PsyOptions logo",
        src: "img/PsyOps.svg",
      },
      items: [
        {
          to: "https://medium.com/psyoptions",
          label: "Blog",
          position: "left",
        },
        {
          href: "https://github.com/mithraiclabs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://t.co/T28cJeQvS7?amp=1",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/PsyOptions",
            },
            {
              label: "Telegram",
              href: "https://t.co/SFP8AZH7kv?amp=1",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "https://medium.com/psyoptions",
            },
            {
              label: "GitHub",
              href: "https://github.com/mithraiclabs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PsyOptions. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/mithraiclabs/psyoptions-docs/tree/master",
        },
      },
    ],
  ],
};
