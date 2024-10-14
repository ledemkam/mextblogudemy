//usegetPosts
import { useQuery } from '@tanstack/react-query';
import { getAllPosts, getPostBySlug } from './api';

export const useGetOnePost = (slug:string) => {
  return useQuery({
    queryKey: ['posts',slug],
    queryFn: async () => await getPostBySlug(slug),
    enabled: !!slug
  })
}

export const useGetAllPosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => await getAllPosts(),
  })
}