import React, { useState } from "react";
import TabStyled, { TabList } from "./Tab.styles";

const Tab = () => {
  const tabs = ["Tab1", "Tab2", "Tab3"];
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <TabStyled>
      <TabStyled.Nav>
        <TabList>
          {tabs.map((tab, index) => (
            <TabList.Item key={tab} onClick={() => setCurrentIndex(index)} className={index === currentIndex ? "active" : ""}>
              {tab}
            </TabList.Item>
          ))}
        </TabList>
      </TabStyled.Nav>
      <TabStyled.Content>{tabs[currentIndex]}</TabStyled.Content>
    </TabStyled>
  );
};

export default Tab;
