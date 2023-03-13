import { FooterSite } from "../interfaces/footer-site";
import "./footer-site-item.scss";

interface FooterSiteItemComponent {
  footerSite: FooterSite;
} 

const FooterSiteItem: React.FC<FooterSiteItemComponent> = ({ 
  footerSite 
} : FooterSiteItemComponent) => {

  const handleUrlSite = () => {
    console.log("click");
  };

  return (
    <li>
        <a onClick={handleUrlSite}>
          {footerSite.name}
        </a>
    </li>
  );
};

export default FooterSiteItem;