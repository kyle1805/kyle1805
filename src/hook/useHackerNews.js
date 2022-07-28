import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHackerNewAPI(initialUrl, initialData) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [errMessege, setErrMessege] = useState("");
  const [url, setUrl] = useState(initialUrl);

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

      setData(response.data || []);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setErrMessege(`The error happend ${err}`);
    }
  };

  //   const handleUpdateQuery = lodash.debounce((e) => {
  //     setQuery(e.target.value);
  //   }, 500);

  useEffect(() => {
    handleFetchData.current();
  }, [url]);

  return {
    loading,
    setUrl,
    errMessege,
    data,
  };
}
