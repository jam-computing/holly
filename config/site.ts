export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Holly",
  description: "The web interface for tree lights",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Songs",
      href: "songs",
    },
    {
      label: "Configuration",
      href: "/configuration",
    },
    {
      label: "Scanner",
      href: "/scanner",
    },
  ],
};
