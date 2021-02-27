import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount((c) => c + 1);
  };

  const onDecrement = () => {
    setCount((c) => c - 1);
  };
  return (
    <React.Fragment>
      <h4>My Counter</h4>
      <p value={count}>{count}</p>
      <button aria-label="increment" id="increment" onClick={onIncrement}>
        Increment
      </button>
      &nbsp;
      <button aria-label="decrement" id="decrement" onClick={onDecrement}>
        Decrement
      </button>
    </React.Fragment>
  );
}

export default App;
