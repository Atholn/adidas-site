import "./footer-bottom.scss";
import FooterSiteItem from "./footerSiteItem";
import { FooterSiteName } from "../models/footer-site";

const FooterBottom : React.FC = () => {
  const footerSites: Array<FooterSiteName> = [
    {
      name: "Adidas",
      translation: "Adidas",
      url: "https://www.adidas.pl/mezczyzni"
    },
    {
      name: "Adidas",
      translation: "Adidas",
      url: "https://www.adidas.pl/mezczyzni"
    },
    {
      name: "Adidas",
      translation: "Adidas",
      url: "https://www.adidas.pl/mezczyzni"
    },
    {
      name: "Adidas",
      translation: "Adidas",
      url: "https://www.adidas.pl/mezczyzni"
    },
    {
      name: "Adidas",
      translation: "Adidas",
      url: "https://www.adidas.pl/mezczyzni"
    },
    {
      name: "Adidas",
      translation: "Adidas",
      url: "https://www.adidas.pl/mezczyzni"
    }
  ]

  return (
    <div className="footer-bottom">
      {
        footerSites.map((footerSite) => (
          <FooterSiteItem
            footerSite={footerSite}
          />     
        ))
      }
    </div>  
  );
};

export default FooterBottom;