import React, { useState, useReducer } from "react";

const Todo = () => {
  const initialState = [];
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADDED":
        if (!action.payload.trim()) {
          return state;
        } else {
          return [
            ...state,
            {
              id: Math.random().toString(36).substring(2, 8),
              todo: action.payload,
              status: false,
            },
          ];
        }

      case "COMPLETED":
        if (action.payload) {
          return state.map((item) =>
            item.id === action.payload
              ? { ...item, status: !item.status }
              : item
          );
        }

      case "DELETED":
        if (action.payload) {
          return state.filter((item) => item.id !== action.payload);
        }

      default:
        return state;
    }
  };
  const [todo, setTodo] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <>
      <div>
        <input
          type="text"
          autoComplete="off"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch({ type: "ADDED", payload: todo });
            setTodo("");
          }}
        >
          Add Todo
        </button>
      </div>
      <div>
        <ul>
          {state.map((list) => (
            <li key={list.id}>
              <span
                style={{
                  textDecoration: list.status ? "line-through" : "none",
                }}
              >
                {list.todo}
              </span>
              <button
                onClick={() => {
                  dispatch({ type: "COMPLETED", payload: list.id });
                }}
              >
                ✔
              </button>
              <button
                onClick={() => {
                  dispatch({ type: "DELETED", payload: list.id });
                }}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;