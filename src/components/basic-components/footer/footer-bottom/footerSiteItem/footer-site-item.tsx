import { FooterSiteName } from "../../models/footer-site";
import "./footer-site-item.scss";

interface FooterSiteItemComponent {
  footerSite: FooterSiteName;
} 

const FooterSiteItem : React.FC<FooterSiteItemComponent> = ({ 
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