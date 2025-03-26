import React, { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState("Assigned");

  return (
    <div className="tabs">
      {["Assigned", "Unassigned", "Drafts"].map((tab) => (
        <button
          key={tab}
          className={activeTab === tab ? "active" : ""}
          onClick={() => setActiveTab(tab)}
        >
          {tab} <span className="count">{tab === "Drafts" ? 3 : 18}</span>
        </button>
      ))}
    </div>
  );
}

export default Tabs;
