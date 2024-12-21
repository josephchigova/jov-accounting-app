import React from "react";
import { eyeOutline, cartOutline, chatbubblesOutline, cashOutline } from "ionicons/icons";
import Card from "./Card";



function Dashboard() {
    return <>
        <div className="dashboardContainer">
            <div className="cardBox">
                <Card number="1,504" title="Daily Views" iconName={eyeOutline} />
                <Card number="80" title="Sales" iconName={cartOutline} />
                <Card number="284" title="Comments" iconName={chatbubblesOutline} />
                <Card number="$7,842" title="Earnings" iconName={cashOutline} />
            </div>
        </div>
    </>
}

export default Dashboard;