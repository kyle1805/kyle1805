import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import MovieItem from "./MovieItem";
import useDebounce from "../../hook/useDebounce";

//apikey https://api.themoviedb.org/3/movie/550?api_key=56ff9e1ad7330e213aa21e2ebb6bcbe2
// https://api.themoviedb.org/3/search/movie?api_key=56ff9e1ad7330e213aa21e2ebb6bcbe2&query=""
// https://image.tmdb.org/t/p/original
const MovieSearchApp = () => {
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState("");
  const { debounceValue } = useDebounce(query, 1000);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=56ff9e1ad7330e213aa21e2ebb6bcbe2&query='${debounceValue}'`
      );
      console.log(response.data.results);
      if (response.data.results) {
        setMovie(response.data.results);
      }
    }
    fetchData();
  }, [debounceValue]);
  const handle = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto mb-5">
        <input
          type="text"
          className="w-full p-5 rounded-lg border border-purple-500 shadow-[0px_0px_0px_3px_rgba(125,_106,_255,_0.2)]"
          placeholder="Search movie ...."
          onChange={handle}
          defaultValue={query}
        />
      </div>

      <div className="grid grid-cols-3 gap-10">
        {movie.length > 0 &&
          movie.map((items) => <MovieItem key={items.id} data={items} />)}
      </div>
    </div>
  );
};

export default MovieSearchApp;
