//usegetPosts

import { getAllPosts } from "./api";
import { useQuery } from '@tanstack/react-query';

export const useGetPosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => await getAllPosts()
  })
}