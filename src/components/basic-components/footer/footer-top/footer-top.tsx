import React from "react";
import { FooterSiteImg, FooterSiteName } from "../models/footer-site";
import { SiteColumn, SitesSection } from "../models/sites-section";
import "./footer-top.scss";

import facebook_icon from '../../../../assets/footer-icons/facebook_icon.png';
import instagram_icon from '../../../../assets/footer-icons/instagram_icon.png';
import pinterest_icon from '../../../../assets/footer-icons/pinterest_icon.png';
import tiktok_icon from '../../../../assets/footer-icons/tiktok_icon.png';
import twitter_icon from '../../../../assets/footer-icons/twitter_icon.png';
import youtube_icon from '../../../../assets/footer-icons/youtube_icon.png';

const FooterBottom : React.FC = () => {

  const footerSiteColumns: Array<SiteColumn> = [
    new SiteColumn([
      new SitesSection("Produkty", 
      [
        new FooterSiteName("Buty", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Ubrania", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Akcesoria", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Nowości", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Najpopularniejsze", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Daty premiery", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("adidas Outlet", "Adidas", "https://www.adidas.pl/mezczyzni")
      ])
    ]),
    new SiteColumn([
      new SitesSection("SPORTS", 
      [
        new FooterSiteName("Futbol", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Koszykówka", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Golf", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Fitness i trening", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Outdoor", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Rugby", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Bieganie", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Tenis", "Adidas", "https://www.adidas.pl/mezczyzni")
      ])
    ]),
    new SiteColumn([
      new SitesSection("KOLEKCJE", 
      [
        new FooterSiteName("Originals", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("IVY PARK", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Ultraboost", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("NMD", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Gazelle", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Superstar", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Stan Smith", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Ozweego", "Adidas", "https://www.adidas.pl/mezczyzni")
      ])
    ]),
    new SiteColumn([
      new SitesSection("WSPARCIE", 
      [
        new FooterSiteName("Pomoc i Obsługa Klienta", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Dostawa", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Zwroty i refundacja", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Tabela rozmiarów", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Wyszukiwarka sklepów", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Mapa strony", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Europejska Procedura Rozstrzygania Sporów", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Dane informacyjne", "Adidas", "https://www.adidas.pl/mezczyzni")
      ])
    ]),
    new SiteColumn([
      new SitesSection("O FIRMIE", 
      [
        new FooterSiteName("O nas", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Praca", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Dla mediów", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Aplikacje mobilne", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("adidas Confirmed", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("adidas Blog", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("adidas News", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Affiliate Program", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Selektor lokalizacji", "Adidas", "https://www.adidas.pl/mezczyzni")
      ]),
      new SitesSection("Więcej adidas", 
      [
        new FooterSiteName("Do treningu", "Adidas", "https://www.adidas.pl/mezczyzni"),
      ])
    ]),
    new SiteColumn([
      new SitesSection("OBSERWUJ NAS", 
      [
        new FooterSiteImg(facebook_icon, "https://www.adidas.pl/mezczyzni"),
        new FooterSiteImg(instagram_icon, "https://www.adidas.pl/mezczyzni"),
        new FooterSiteImg(twitter_icon, "https://www.adidas.pl/mezczyzni"),
        new FooterSiteImg(pinterest_icon, "https://www.adidas.pl/mezczyzni"),
        new FooterSiteImg(tiktok_icon, "https://www.adidas.pl/mezczyzni"),
        new FooterSiteImg(youtube_icon, "https://www.adidas.pl/mezczyzni"),
      ])
    ]),
  ]
  
  return (
    <div className="footer-top">
      <ul className="desktop">{
        footerSiteColumns.map((footerSiteColumn) => (
            <li>
              {
                footerSiteColumn.sitesSections.map((footerSiteSection) =>  (
                  <div>
                    <h5 className="footer-site-section-title">{footerSiteSection.title}</h5>
                    <ul>
                      {
                        footerSiteSection.sites.map((site) => (
                          <li>
                            <a>
                              <span>
                                { 
                                  site instanceof FooterSiteName ? site.name : 
                                    site instanceof FooterSiteImg ? <img src={site.src} alt="xD" /> 
                                      : <div/> 
                                }
                              </span>
                            </a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                ))
              }
            </li>
          )
        )
    }
    </ul>
  </div>
  );
};

export default FooterBottom;