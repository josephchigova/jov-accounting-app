import React from "react";
import { IonIcon } from "@ionic/react";
import "./styles/styles.css"; // Make sure the styles are either imported here or global

const Card = (props) => {
  return (
    <div className="card">
      <div className="iconBx">
        <IonIcon icon={props.iconName}></IonIcon>
      </div>
      <div>
        <div className="numbers">{props.number}</div>
        <div className="cardName">{props.title}</div>
      </div>
    </div>
  );
};

export default Card;