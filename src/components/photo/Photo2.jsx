import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRef } from "react";

const getRandomPhotos = async (page) => {
  const response = await axios.get(
    `https://picsum.photos/v2/list?page=${page}&limit=8`
  );

  return response.data;
};

const Photo2 = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(1);

  const handleNewPhotos = useRef({});
  handleNewPhotos.current = async () => {
    const Images = await getRandomPhotos(nextPage);
    const newImages = [...randomPhotos, ...Images];
    setNextPage((nextPage) => nextPage + 1);
    setRandomPhotos(newImages);
  };
  useEffect(() => {
    handleNewPhotos.current();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 p-5">
        {randomPhotos.map((items) => (
          <div key={items.id} className="p-3 h-[200px] bg-white shadow-md">
            <img
              src={items.download_url}
              alt=""
              className="w-full h-full rounded-lg"
            />
          </div>
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleNewPhotos.current}
          className="inline-block px-5 py-4 bg-orange-400 border cursor-pointer"
        >
          Load more ...
        </button>
      </div>
    </div>
  );
};

export default Photo2;
