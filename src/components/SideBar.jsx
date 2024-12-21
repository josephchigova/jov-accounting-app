import React from "react";
import { IonIcon } from "@ionic/react";
import { homeOutline, peopleOutline, cartOutline } from 'ionicons/icons'; // Import the icons
import "./styles/styles.css"; 

const Sidebar = ({ setActiveSection, sidebarActive, setSidebarActive }) => {
  return (
    <div className={`navigation ${sidebarActive ? "active" : ""}`}>
      <ul>
        <li>
          <span className="title">JOVINES ELECTRONICS</span>
        </li>
        <li>
          <a href="#" onClick={() => setActiveSection("dashboard")}>
            <span className="icon">
              <IonIcon icon={homeOutline} />
            </span>
            <span className="title">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setActiveSection("customers")}>
            <span className="icon">
              <IonIcon icon={peopleOutline} />
            </span>
            <span className="title">Customers</span>
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setActiveSection("orders")}>
            <span className="icon">
              <IonIcon icon={cartOutline} />
            </span>
            <span className="title">Orders</span>
          </a>
        </li>
        {/* Add other sidebar links as necessary */}
      </ul>
    </div>
  );
};

export default Sidebar;
