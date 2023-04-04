import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../constants/query-key";
import { getUsersAPI } from "../services/jsonAPI";

const useGetUsers = () =>
  useQuery([QUERY_KEY.USERS], async () => {
    const { data } = await getUsersAPI();
    return data;
  });
