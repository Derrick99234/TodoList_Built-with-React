import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  }, [url]);

  return [data];
};

// async function useUrl(url) {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const res = await fetch(url);
//     const d = await res.json();
//      setData(d);
//   }, [url]);

//   return [data];
// }

export default useFetch;
// export default useUrl;
