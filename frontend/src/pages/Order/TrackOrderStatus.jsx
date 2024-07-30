/**
 * Author: Keval Gandevia
 */

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useOrderTrackContext } from "../../context/OrderTrackContext/OrderTrackContext";

const TrackOrderStatus = () => {
  const { orderId } = useParams();
  const { orderStatus, getOrderStatus } = useOrderTrackContext();

  useEffect(() => {
    getOrderStatus(orderId);
  }, [orderId]);

  const steps = ["Placed", "Accepted", "In-Preparation", "Delivered"];
  const statusMap = {
    PLACED: 0,
    ACCEPTED: 1,
    IN_PREPARATION: 2,
    DELIVERED: 3,
  };
  const currentStatusIndex = statusMap[orderStatus];

  const stepClasses = steps.map((_, index) => 
    `step ${index <= currentStatusIndex ? "step-primary" : ""}`
  );

  return (
    <div className="container mx-auto px-6 py-6">
      <p className="mb-10 text-4xl font-bold">
          <span className="text-5xl text-primary">/</span>
          <span>Track Order Status</span>
        </p>
      <div className="mt-10 w-full flex justify-center">
        <ul className="steps steps-horizontal">
          {steps.map((step, index) => (
            <li key={index} className={stepClasses[index]}>
              {step}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 w-full flex justify-center">
        <button onClick={() => getOrderStatus(orderId)} className="btn btn-primary">
          Refresh
        </button>
      </div>
    </div>
  );
};

export default TrackOrderStatus;
