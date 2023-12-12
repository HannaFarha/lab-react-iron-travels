import travelPlansData from "../assets/travel-plans.json";
import React, { useState } from "react";
import "../App.css";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const handleDelete = (currentId) => {
    setTravelPlans(travelPlans.filter((plan) => plan.id !== currentId));
  };

  return (
    <div className="listCtn">
      {travelPlans.map((plan) => (
        <div key={plan.id} className="container">
          <div className="imageCtn">
            <img src={plan.image} alt="image" />
          </div>
          <div className="textCtn">
            <h3>
              {plan.destination} ({plan.days} Days)
            </h3>
            <p>{plan.description}</p>
            <p>
              <strong>Price:</strong> {plan.totalCost}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TravelList;
