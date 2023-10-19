import { useState } from "react";
import StateA from "../States/StateA";
import StateB from "../States/StateB";
import StateC from "../States/StateC";

const WrapperComponent = () => {
  const [currentState, setCurrentState] = useState(new StateA());

  return (
    <div>
      <div className="component">{currentState.renderComponent()}</div>
      <button onClick={() => setCurrentState(new StateA())}>Show A</button>
      <button onClick={() => setCurrentState(new StateB())}>Show B</button>
      <button onClick={() => setCurrentState(new StateC())}>Show C</button>
    </div>
  );
};

export default WrapperComponent;
