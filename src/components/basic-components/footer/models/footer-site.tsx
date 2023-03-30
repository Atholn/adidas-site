export class FooterSite {
  url: string;

  constructor(url: string) {
    this.url = url;
  }
}

export class FooterSiteImg extends FooterSite {
  src: string

  constructor(src: string, url: string) {
    super(url);
    this.src = src;
  }
}

export class FooterSiteName extends FooterSite {
  name: string;
  translation: string;
  
  constructor(name: string, translation: string, url: string) {
    super(url);
    this.name = name;
    this.translation = translation;
  }
}

