import React, { useState } from "react";
import Sidebar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import Orders from "./components/Orders";
import "./components/styles/styles.css"; // Global styles

function App() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [activeSideBar, setSidebarActive] = useState(false); // State to toggle sidebar

  function renderSection() {
    switch (activeSection) {
      case "dashboard":
        return (
            <Dashboard />
        );
      case "transactions":
        return (
          <Transactions />
        );
      case "orders":
        return (
          <Orders />
        );
    }
  };

  return (
    <div className="container">
      {/* Sidebar Navigation */}
      <Sidebar
        setActiveSection={setActiveSection}
        sidebarActive={activeSideBar}
        setSidebarActive={setSidebarActive} // Pass state management to Sidebar
      />

      {/* Main Content */}
      <div className={`main ${activeSideBar ? "active" : ""}`}>
        <div className="topbar">
          {/* Toggle button for sidebar */}
          <div className="toggle" onClick={() => setSidebarActive(!activeSideBar)}>
            <ion-icon name="menu-outline"></ion-icon>
          </div>
          {/* Optionally, you can add search and user profile elements here */}
        </div>

        {/* Render the selected section dynamically */}
        {renderSection()}
      </div>
    </div>
  );
};

export default App;
