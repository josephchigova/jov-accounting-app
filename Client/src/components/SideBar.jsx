import React from "react";
import { IonIcon } from "@ionic/react";
import { homeOutline, cartOutline, chatbubbleOutline, 
  helpOutline, settingsOutline, lockClosedOutline, logOutOutline, 
  cashOutline} from 'ionicons/icons'; // Import all necessary icons
import "./styles/styles.css"; 

const Sidebar = ({ setActiveSection, sidebarActive }) => {
  //sidebar items as an array of objects
  const sidebarItems = [
    { icon: homeOutline, title: "Dashboard", section: "dashboard" },
    { icon: cashOutline, title: "Cash Transactions", section: "transactions" },
    { icon: cartOutline, title: "Orders", section: "orders" },
    { icon: chatbubbleOutline, title: "Messages", section: "messages" },
    { icon: helpOutline, title: "Help", section: "help" },
    { icon: settingsOutline, title: "Settings", section: "settings" },
    { icon: lockClosedOutline, title: "Password", section: "password" },
    { icon: logOutOutline, title: "Sign Out", section: "signOut" },
  ];

  return (
    <div className={`navigation ${sidebarActive ? "active" : ""}`}>
      <ul>
        <li>
          <span className="title">JOVINES ELECTRONICS</span>
        </li>
        {/* Dynamically render sidebar items */}
        {sidebarItems.map((item, index) => (
          <li key={index}>
            <a href="#" onClick={() => setActiveSection(item.section)}>
              <span className="icon">
                <IonIcon icon={item.icon} />
              </span>
              <span className="title">{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
