import React from "react";
import { FooterSiteImg, FooterSiteName } from "../models/footer-site";
import { SitesSection } from "../models/sites-section";
import "./footer-top.scss";

import facebook_icon from '../../../../assets/footer-icons/facebook_icon.png';
import instagram_icon from '../../../../assets/footer-icons/instagram_icon.png';
import pinterest_icon from '../../../../assets/footer-icons/pinterest_icon.png';
import tiktok_icon from '../../../../assets/footer-icons/tiktok_icon.png';
import twitter_icon from '../../../../assets/footer-icons/twitter_icon.png';
import youtube_icon from '../../../../assets/footer-icons/youtube_icon.png';

const FooterBottom : React.FC = () => {

  const footerSiteSections: Array<SitesSection> = [
    new SitesSection("Produkty", 
      [
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni")
      ]),
      new SitesSection("SPORTS", 
      [
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni")
      ]),
      new SitesSection("KOLEKCJE", 
      [
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni")
      ]),
      new SitesSection("WSPARCIE", 
      [
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni")
      ]),
      new SitesSection("O FIRMIE", 
      [
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni"),
        new FooterSiteName("Adidas col 1", "Adidas", "https://www.adidas.pl/mezczyzni")
      ]),
      new SitesSection("OBSERWUJ NAS", 
      [
        new FooterSiteImg(facebook_icon, "https://www.adidas.pl/mezczyzni"),
        new FooterSiteImg(instagram_icon, "https://www.adidas.pl/mezczyzni"),
        new FooterSiteImg(twitter_icon, "https://www.adidas.pl/mezczyzni"),
        new FooterSiteImg(pinterest_icon, "https://www.adidas.pl/mezczyzni"),
        new FooterSiteImg(tiktok_icon, "https://www.adidas.pl/mezczyzni"),
        new FooterSiteImg(youtube_icon, "https://www.adidas.pl/mezczyzni"),
      ]),
  ]
  
  return (
    <div className="footer-top">
      <ul className="desktop">{
        footerSiteSections.map((footerSiteSection) => (
                <li>
                  <h5 className="footer-site-section-title"> {footerSiteSection.title}</h5>
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
                </li>
              ))
    }
    </ul>
  </div>
  );
};

export default FooterBottom;