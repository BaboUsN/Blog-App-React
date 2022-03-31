import { useEffect, useState } from "react";
const useFetch = (url, fetchType, fetchData) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  let postPar;
  if (fetchType.toLowerCase())
    switch (fetchType.toLowerCase()) {
      case "get":
        postPar = null;
        break;
      case "post":
        postPar = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(fetchData),
        };
        break;
      case "put":
        postPar = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(fetchData),
        };
        break;
      case "delete":
        postPar = { method: "DELETE" };
        break;
      default:
        console.err(new Error("dsada"));
    }

  useEffect(() => {
    const abortCont = new AbortController();
    fetch("http://localhost:3000" + url, { signal: abortCont.signal }, postPar)
      .then((res) => {
        if (!res.ok) {
          throw new Error("There is an Error");
        }
        return res.json();
      })
      .then((jdata) => {
        setData(jdata);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Abort Error");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
