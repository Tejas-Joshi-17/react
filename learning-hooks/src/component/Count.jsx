import { useState } from "react";

const initialCounValue = 0;

function Count() {
  const [count, setCount] = useState(initialCounValue);

  const incrementCounter = () => {
    setCount(prev => prev + 1);
  };

  const decrementCounter = () => {
    if (count === 0) {
      alert("Count can't be negative")
      return;
    }
    setCount(prev => prev - 1);
  };

  return (
    <div className="container text-center mt-5">
      <h2>Code With Chai</h2>
      <h3>Counter : {count}</h3>

      <div className="d-grid gap-2 d-md-block">
        <button className="btn btn-primary m-3" onClick={incrementCounter}>
          Add Value
        </button>
        <button className="btn btn-primary m-3" onClick={decrementCounter}>
          Remove Value
        </button>
      </div>
    </div>
  );
}

export default Count;
