/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: "Score_Hub Benutzerhandbuch",
  tagline: "Anleitungen für Vereine und Wettkampforganisation",
  url: "https://peterdurrer.github.io",
  baseUrl: "/Score_Hub-docs/",
  organizationName: "PeterDurrer",
  projectName: "Score_Hub-docs",
  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
  },
  i18n: {
    defaultLocale: "de",
    locales: ["de", "fr", "it"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          path: ".",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          exclude: [
            "CONTRIBUTING.md",
            "screenshots/**",
            "node_modules/**",
            "build/**",
            ".docusaurus/**",
            "src/**",
            "i18n/**",
          ],
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: "Score_Hub",
      items: [
        {
          type: "docSidebar",
          sidebarId: "userGuide",
          position: "left",
          label: "Handbuch",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/PeterDurrer/Score_Hub",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Handbuch",
          items: [
            { label: "Einstieg", to: "/" },
            { label: "Häufige Fragen", to: "/faq" },
          ],
        },
      ],
      copyright: "Score_Hub Benutzerhandbuch",
    },
  },
};
