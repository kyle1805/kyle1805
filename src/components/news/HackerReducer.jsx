import axios from "axios";
import React, { useState } from "react";
import { useRef } from "react";
import lodash, { times } from "lodash";
import { useReducer } from "react";

// https://hn.algolia.com/api/v1/search?query=react

const initialState = {
  hits: [],
  query: "",
  loading: true,
  errMessege: "",
  url: "https://hn.algolia.com/api/v1/search?query=''",
};

const reducer = (state, action) => {
  switch (action.TYPE) {
    case "SET_DATA": {
      // const newState = JSON.parse(JSON.stringify(state))
      return { ...state, hits: action.payload };
    }

    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }

    case "SET_ERR": {
      return { ...state, errMessege: action.payload };
    }
    case "SET_QUERY": {
      return { ...state, query: action.payload };
    }
    case "SET_URL": {
      return { ...state, url: action.payload };
    }
    default:
      break;
  }
};

const HackerReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleFetchData = useRef({});

  handleFetchData.current = async () => {
    dispatch({
      TYPE: "SET_LOADING",
      payload: true,
    });
    try {
      const response = await axios.get(state.url);
      dispatch({
        TYPE: "SET_DATA",
        payload: response.data?.hits || [],
      });
      dispatch({
        TYPE: "SET_LOADING",
        payload: false,
      });
    } catch (err) {
      dispatch({
        TYPE: "SET_LOADING",
        payload: false,
      });
      dispatch({
        TYPE: "SET_ERR",
        payload: `The error happened: ${err}`,
      });
    }
  };

  React.useEffect(() => {
    handleFetchData.current();
  }, [state.url]);
  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 p-5 block w-full rounded-md focus:border-blue-400 transition-all"
          placeholder="Typing your keyword..."
          defaultValue={state.query}
          onChange={(e) =>
            dispatch({
              TYPE: "SET_QUERY",
              payload: e.target.value,
            })
          }
        />
        <button
          onClick={() =>
            dispatch({
              TYPE: "SET_URL",
              payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
            })
          }
          disabled={state.loading}
          className="bg-blue-500 text-white font-semibold p-5 rounded-md flex-shrink-0"
          style={{ opacity: state.loading ? "0.25" : "1" }}
        >
          Fetching
        </button>
      </div>
      {state.loading && (
        <div className="loading mx-auto my-10 w-8 h-8 rounded-full border-4 border-r-4 border-r-transparent border-blue-500 animate-spin"></div>
      )}
      <div className="flex flex-wrap gap-5">
        {!state.loading && state.errMessege && (
          <p className="text-red-400 my-5">{state.errMessege}</p>
        )}
        {!state.loading &&
          state.hits.length > 0 &&
          state.hits.map((item) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 key={item.title} className="p-3 bg-gray-200 rounded-md">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerReducer;
