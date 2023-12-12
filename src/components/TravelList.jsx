import travelPlansData from "../assets/travel-plans.json";
import "../App.css";

function TravelList() {
  return (
    <div className="listCtn">
      {travelPlansData.map((plan) => (
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
            <button>delete</button>
            
          </div>
        </div>
      ))}
    </div>
  );
}

export default TravelList;
