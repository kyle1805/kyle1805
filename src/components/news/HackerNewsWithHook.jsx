import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import lodash, { times } from "lodash";
import useHackerNewAPI from "../../hook/useHackerNews";

// https://hn.algolia.com/api/v1/search?query=react
const HackerNewsWithHook = () => {
  const [query, setQuery] = useState("");
  const { loading, errMessege, setUrl, data } = useHackerNewAPI(
    "https://hn.algolia.com/api/v1/search?query=''",
    { hits: [] }
  );

  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 p-5 block w-full rounded-md focus:border-blue-400 transition-all"
          placeholder="Typing your keyword..."
          defaultValue={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
          className="bg-blue-500 text-white font-semibold p-5 rounded-md"
        >
          Fetching
        </button>
      </div>
      {loading && (
        <div className="loading mx-auto my-10 w-8 h-8 rounded-full border-4 border-r-4 border-r-transparent border-blue-500 animate-spin"></div>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading && errMessege && (
          <p className="text-red-400 my-5">{errMessege}</p>
        )}
        {!loading &&
          data.hits.length > 0 &&
          data.hits.map((item) => {
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

export default HackerNewsWithHook;
