import "./footer-bottom.scss";
import FooterSiteItem from "./footerSiteItem";
import { FooterSite } from "./interfaces/footer-site";

const FooterBottom : React.FC = () => {
  const footerSites: Array<FooterSite> = [
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