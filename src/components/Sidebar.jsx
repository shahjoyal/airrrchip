import React, { useState } from "react";
import { FaHeadset, FaSignOutAlt, FaClipboardList, FaTachometerAlt } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        <IoChevronBack className={`toggle-icon ${isOpen ? "" : "rotate"}`} />
      </button>
      <h2 className="logo">{isOpen ? "Airrchip" : "A"}</h2>
      <ul className="menu">
        <li className="active">
          <FaClipboardList className="icon" /> {isOpen && "Claims"}
        </li>
        <li>
          <FaTachometerAlt className="icon" /> {isOpen && "Dashboard"}
        </li>
      </ul>
      <div className="bottom-menu">
        <ul>
          <li>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <FaHeadset className="icon" /> {isOpen && "Support"}
            </div>
            {isOpen && <IoChevronForward className="side-arrow" />}
          </li>
          <li>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <FaSignOutAlt className="icon" /> {isOpen && "Logout"}
            </div>
            {isOpen && <IoChevronForward className="side-arrow" />}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
