import React from "react";
import { eyeOutline, cartOutline, chatbubblesOutline, cashOutline } from "ionicons/icons";
import Card from "./Card";



function Dashboard() {
    const cardDetails =[
        {number:"1,504", title:"Daily Views", iconName:{eyeOutline}},
                {number:"80", title:"Sales", iconName:{cartOutline}},
               { number:"284", title:"Comments", iconName:{chatbubblesOutline} },
                { number:"$7,842", title:"Earnings", iconName:{cashOutline} }
    ]
    return <>
        <div className="dashboardContainer">
            <div className="cardBox">
            {cardDetails.map((card, index) => (
          <Card 
            key={index}
            number={card.number} 
            title={card.title} 
            iconName={card.iconName} 
          />
        ))}
            </div>
        </div>
    </>
}

export default Dashboard;