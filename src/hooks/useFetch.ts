import { useEffect, useState } from "react";

const useFetch = (
  method: "POST" | "GET" | "PUT" | "DELETE",
  url: string,
  body = {}
) => {
  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);
  return { data, isLoading, error };
};

export default useFetch;
