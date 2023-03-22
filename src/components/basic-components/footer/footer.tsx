import FooterBottom from "./footer-bottom";
import FooterTop from "./footer-top";
import "./footer.scss";

const Footer : React.FC = () => {

  return (
    <div className="footer">
      <FooterTop/>
      <FooterBottom/>
    </div>
  );
};

export default Footer;