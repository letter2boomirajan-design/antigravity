import React, {
  useCallback,
  useMemo,
  useReducer,
  useRef,
  useState,
  Activity,
  Profiler,
} from "react";
import One from "./One";
import Two from "./Two";
import List from "./List";
import Timer from "./Timer";
import Todo from "./Todo";

const Render = () => {
  const inputRef = useRef();
  const [countOne, setCountOne] = useState(1);
  const [countTwo, setCountTwo] = useState(0);
  const [cart, setCart] = useState(0);
  const [product, setProduct] = useState(["Laptop", "Mobile"]);
  const [arr, setArr] = useState([1, 23, 4, 5, 6, 6, 88]);
  const maxArr = useMemo(() => {
    console.log("maxARR useMemo");
    return Math.max(...arr);
  }, [arr]);

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  const inputOnFocus = () => {
    inputRef.current.focus();
  };

  const onRender = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) => {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime);
  };

  const isShowingSidebar = false;

  const controlAudio = useRef();

  const audioPlay = () => {
    controlAudio.current.play();
  };

  const audioPause = () => {
    controlAudio.current.pause();
  };

  const intialize = {
    count: 0,
  };

  const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
      case "INC":
        return { count: state.count + 1 };
        break;
      case "DEC":
        return { count: state.count - 1 };
        break;
      default:
        return state;
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, intialize);

  //console.log('77777777777')
  return (
    <>
      <div>
        <p>{countOne}</p>
        <button onClick={() => setCountOne(countOne + 1)}>
          One {countOne}
        </button>
        <p>{countTwo}</p>
        <button onClick={() => setCountTwo(countTwo + 1)}>
          Two {countTwo}
        </button>
        <Activity mode={isShowingSidebar ? "visible" : "hidden"}>
          <One val={countOne} />
        </Activity>
        <Profiler id="Sidebar" onRender={onRender}>
          <Two val={countTwo} />
        </Profiler>

        <p>{maxArr}</p>
        <div>Apple : {JSON.stringify(arr)}</div>

        <button
          onClick={() =>
            setArr([...arr, Math.round(Math.random() * countOne * 78)])
          }
        >
          Add value in array
        </button>
        <p>{cart}</p>
        <List product={product} addToCart={addToCart} />
        <input type="text" ref={inputRef} />
        <button onClick={inputOnFocus}>Submit</button>
        <audio ref={controlAudio}>
          <source src="/sampleCode.mp3" type="audio/mpeg" />
        </audio>
        <button onClick={audioPlay}>Play</button>
        <button onClick={audioPause}>Pause</button>

        <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
        {state.count}
        <button onClick={() => dispatch({ type: "DEC" })}>Decrement</button>
        <Timer />
        <Todo />
      </div>
    </>
  );
};

export default Render;
