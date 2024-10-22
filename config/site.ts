export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Holly",
  description: "The web interface for tree lights",
  navItems: [
    {
      label: "Overview",
      href: "/",
    },
    {
      label: "Configuration",
      href: "/projects",
    },
    {
      label: "Scanner",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/SemicolonUnexpected",
  },
};
