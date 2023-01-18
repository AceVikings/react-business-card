import React from "react";

const Card = (props) => {
  return (
    <div>
      <span className="card--card">
        <h3>{props.header}</h3>
        <p>{props.content}</p>
      </span>
    </div>
  );
};

export default Card;
