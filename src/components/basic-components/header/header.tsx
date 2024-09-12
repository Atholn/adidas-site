import { render } from "@testing-library/react";
import "./header.scss";
import { useState } from "react";

function Header() {
  const [show, toggleShow] = useState(true);
  let xD:boolean = false;

  const handleUrlSite = () => {
    toggleShow(!show)
  };

  return <div className="header">
    <div>
      {show && 
        <a onClick={handleUrlSite}>
          DARMOWE ZWROTY I DOSTAWA
        </a>
      } 

      {!show && 
        <a onClick={handleUrlSite}>
          DARMOWE ZWROTY I DOSTAWA2222222222222
        </a>
      }
    </div>
  </div>
}

export default Header;
