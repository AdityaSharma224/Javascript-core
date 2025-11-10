import { useState, useEffect, useMemo } from "react";

const Profile = () => {
  return <div>Profile</div>;
};

const Interests = () => {
  return <div>Interests</div>;
};

const Settings = () => {
  return <div>Settings</div>;
};

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interests",
      component: Interests,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const ActiveComponent = tabs[activeTab].component;

  return (
    <div>
      <div style={{ display: "flex" }}>
        {tabs.map((tabs, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "5px",
              border: "1px solid #000",
              cursor: "pointer",
            }}
            onClick={() => setActiveTab(index)}
          >
            {tabs.name}
          </div>
        ))}
      </div>
      <div
      style={{
        padding:'10px',
        border:'1px solid #000',
        height:'400px',
      }}
      >
        <ActiveComponent/>
      </div>
    </div>
  );
};

export default TabForm;
