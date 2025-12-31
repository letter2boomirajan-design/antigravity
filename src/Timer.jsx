import { useEffect, useReducer } from "react";

export default function Timer() {

  const initialState = {
    count: 0,
    isRunning: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "START":
        return { ...state, isRunning: true };
      case "TICK":
        return { ...state, count: state.count + 1 };
      case "STOP":
        return { ...state, isRunning: false };
      case "RESET":
        return initialState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!state.isRunning) return;
    const interval = setInterval(() => {
      dispatch({ type: "TICK" })
    }, 1000);
    return () => clearInterval(interval);
  }, [state.isRunning]);

  const formatTimer = (count) => {
    const hrs = Math.floor(count / 3600)
      .toString()
      .padStart(2, "0");

    const mins = Math.floor((count % 3600) / 60)
      .toString()
      .padStart(2, "0");

    const secs = (count % 60).toString().padStart(2, "0");

    return `${hrs} : ${mins} : ${secs}`;
  }


  return (
    <div style={{ textAlign: "center" }}>
      <h2>{formatTimer(state.count)}</h2>
      <button onClick={() => dispatch({ type: "START" })}>Start</button>
      <button onClick={() => dispatch({ type: "STOP" })}>Stop</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}


// sql query 