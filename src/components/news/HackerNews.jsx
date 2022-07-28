import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import lodash, { times } from "lodash";

// https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errMessege, setErrMessege] = useState("");
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );

  const isMounted = useRef(true);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        // `https://hn.algolia.com/api/v1/search?query=${query}`
        url
      );
      setTimeout(() => {
        setHits(response.data?.hits || []);
        setLoading(false);
      }, 3000);
    } catch (err) {
      setLoading(false);
      setErrMessege(`The error happend ${err}`);
    }
  };

  //   const handleUpdateQuery = lodash.debounce((e) => {
  //     setQuery(e.target.value);
  //   }, 500);

  React.useEffect(() => {
    handleFetchData.current();
  }, [url]);
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
          hits.length > 0 &&
          hits.map((item) => {
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

export default HackerNews;
