import { useEffect, useState } from "react";

import { UseFetchResponseType } from "./types";

const useFetch = <P>(
    url: string,
    method?: "get" | "post" | "put" | "delete",
    config?: RequestInit
): UseFetchResponseType<P> => {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<P | null>(null);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        // To cancel requests when component unmount or url data is outdated
        const abortController = new AbortController();

        const getData = async (): Promise<void> => {
            setLoading(true);

            try {
                const response = await fetch(url, {
                    method,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Headers": "Accept, Content-Type",
                        "x-api-key": import.meta.env.VITE_API_KEY,
                    },
                    mode: "cors",
                    signal: abortController.signal,
                    ...config,
                });

                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }

                const actualData = await response.json();

                setData(actualData as P);
                setError(null);
                setLoading(false);
            } catch (error) {
                if (abortController.signal.aborted) {
                    console.log("User aborted the request");
                } else {
                    console.error("error", error);
                    setError(error);
                    setData(null);
                    setLoading(false);
                }
            }
        };

        getData();

        return () => abortController.abort();
    }, [url]);

    return [loading, data, error];
};

export default useFetch;
