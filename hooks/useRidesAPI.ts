import useSWR from "swr";
export const useRidesAPI = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data, error, isLoading } = useSWR("/api/rides", fetcher);

  return {
    data,
    error,
    isLoading,
  };
};
