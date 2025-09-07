import { useEffect, useState } from "react";

function Plans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/plans")
      .then((res) => res.json())
      .then((data) => setPlans(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>My Plans</h1>
      <ul>
        {plans.map((plan) => (
          <li key={plan.id}>{plan.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Plans;
