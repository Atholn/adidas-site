import "./footer.scss";
import FooterSiteItem from "./footerSiteItem";
import { FooterSite } from "./interfaces/footer-site";


const Footer :React.FC = () => {
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
    <div className="footer">
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

export default Footer;