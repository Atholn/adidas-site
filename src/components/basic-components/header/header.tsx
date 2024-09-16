import React, { useEffect, useState } from "react";
import "./header.scss";

const Header: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const [height, setHeight] = useState<number>(0);

  const toggleCollapse = (): void => {

    setIsCollapsed((prev) => !prev);
  };

  useEffect(() => {
    setHeight(isCollapsed ? 0 : 300);
    document.body.style.overflow = isCollapsed ? "visible" : "hidden";
  }, [isCollapsed]);

  return (
    <div className="header">
      <div className="header-collapsed">
        <a onClick={toggleCollapse}>DARMOWE ZsWROTYsadasd I DOSTAWA</a>
      </div>
      <div className="header-expanded" style={{ height: `${height}px` }}>
        <div className="header-expanded-content">
          <a onClick={toggleCollapse}>DARMOWE ZWROTY I DOSTAsWA2222222222222</a>
        </div>
        {!isCollapsed && <div className="filler" onClick={toggleCollapse}></div>}
      </div>
    </div>
  );
};

export default Header;
