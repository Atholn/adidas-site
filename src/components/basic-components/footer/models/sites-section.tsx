import { FooterSite } from "./footer-site";

export class SitesSection {
  title: string;
  sites: FooterSite[];

  constructor(title: string, sites: FooterSite[]) {
    this.title = title;
    this.sites = sites;
  }
}

export class SiteColumn {
  sitesSections: SitesSection[];

  constructor(sitesSections: SitesSection[]) {
    this.sitesSections = sitesSections;
  }
}