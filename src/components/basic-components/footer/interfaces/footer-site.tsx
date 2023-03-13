export class FooterSite {
  name: string;
  translation: string;
  url: string;
  
  constructor(name: string, translation: string, url: string) {
    this.name = name;
    this.translation = translation;
    this.url = url;
  }
}