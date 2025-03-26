import React, { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <input type="text" placeholder="Search name & ID" className="search-bar" />
      <div className="profile-section">
        <span className="notification-icon">🔔</span>

        {/* Profile Picture with Clickable Dropdown */}
        <div className="profile-container" onClick={() => setShowMenu(!showMenu)}>
          <img
            src="https://api.dicebear.com/7.x/adventurer/svg?seed=random" 
            alt="User" 
            className="profile-pic"
          />
          
          {/* Logout Dropdown */}
          {showMenu && (
            <div className="dropdown-menu">
              <button onClick={() => alert("Logging out...")}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

