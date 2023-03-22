import { FooterSite } from "../footer-bottom/interfaces/footer-site";
import "./footer-top.scss";

const FooterBottom : React.FC = () => {


  const footerSites: Array<Array<FooterSite>> = [
    [
      {
        name: "Adidas col 1",
        translation: "Adidas",
        url: "https://www.adidas.pl/mezczyzni"
      }
    ],
    [
      {
        name: "Adidas col 2",
        translation: "Adidas",
        url: "https://www.adidas.pl/mezczyzni"
      }
    ],
    [
      {
        name: "Adidas col 3",
        translation: "Adidas",
        url: "https://www.adidas.pl/mezczyzni"
      }
    ],
    [
      {
        name: "Adidas col4",
        translation: "Adidas",
        url: "https://www.adidas.pl/mezczyzni"
      }
    ],
    [
      {
        name: "Adidas col 5",
        translation: "Adidas",
        url: "https://www.adidas.pl/mezczyzni"
      }
    ],
    [
      {
        name: "Adidas col 6",
        translation: "Adidas",
        url: "https://www.adidas.pl/mezczyzni"
      }
    ],
    [
      {
        name: "Adidas col 7",
        translation: "Adidas",
        url: "https://www.adidas.pl/mezczyzni"
      }
    ]
  ]

  return (
    <div className="footer-top">
      <ul className="desktop">
        {
          footerSites.map((footerSite) => (
            <li>
              <h5> {footerSite[0].name}</h5>
              <ul>
                {
                  footerSite.map((footerSection) => (
                    <li>
                      footerSection.name

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