import { useEffect, useState } from "react";

const useFetch = (options: {
  method: "POST" | "GET" | "PUT" | "DELETE";
  url: string;
  type: "normal" | "sanity";
}) => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    fetch(options.url, {
      method: options.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (options.type == "sanity") setData(responseData.result);
        else setData(responseData);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);
  return { data, isLoading, error };
};

export default useFetch;
