import React, { useState } from "react";
import TabStyled from "./Tab.styles";

const Tab = () => {
  const tabs = ["Tab1", "Tab2", "Tab3"];
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <TabStyled>
      <TabStyled.Nav>
        <ul>
          {tabs.map((tab, index) => (
            <li key={tab} onClick={() => setCurrentIndex(index)} className={index === currentIndex ? "active" : ""}>
              {tab}
            </li>
          ))}
        </ul>
      </TabStyled.Nav>
      <TabStyled.Content>{tabs[currentIndex]}</TabStyled.Content>
    </TabStyled>
  );
};

export default Tab;
