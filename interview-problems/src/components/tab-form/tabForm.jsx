import { useState, useMemo, memo } from "react";

// 👇 Child components wrapped with React.memo 
const Profile = memo(() => <div>Profile</div>);
const Interests = memo(() => <div>Interests</div>);
const Settings = memo(() => <div>Settings</div>);

const TAB_STYLES = {
  padding: "5px",
  border: "1px solid #000",
  cursor: "pointer",
};

const ACTIVE_TAB_STYLES = {
  ...TAB_STYLES,
  backgroundColor: "#eee",
  fontWeight: "bold",
};

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);

  // 👇 useMemo so tabs object isn’t re-created on every render
  const tabs = useMemo(
    () => [
      { name: "Profile", component: Profile },
      { name: "Interests", component: Interests },
      { name: "Settings", component: Settings },
    ],
    []
  );

  const ActiveComponent = tabs[activeTab].component;

  return (
    <div>
      {/* ---- TABS HEADER ---- */}
      <div style={{ display: "flex" }}>
        {tabs.map(({ name }, idx) => (
          <div
            key={name}
            style={idx === activeTab ? ACTIVE_TAB_STYLES : TAB_STYLES}
            onClick={() => setActiveTab(idx)}
          >
            {name}
          </div>
        ))}
      </div>

      {/* ---- TAB CONTENT ---- */}
      <div
        style={{
          padding: "10px",
          border: "1px solid #000",
          height: "400px",
        }}
      >
        <ActiveComponent />
      </div>
    </div>
  );
};

export default memo(TabForm);
