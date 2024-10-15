"use client"
//usegetPosts
import { useQuery } from '@tanstack/react-query';
import { getAllPosts, getPostBySlug } from './api';
import { getAllCategories, getCategoryBySlug } from './api';

export const useGetOnePost = (slug:string) => {
  return useQuery({
    queryKey: ['posts',slug],
    queryFn: async () => await getPostBySlug(slug),
    enabled: !!slug
  })
}

export const useGetAllPosts = (slug:string | null = null) => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => await getAllPosts(slug || ""),
  })
}

//usegetCategories

export const useGetOneCategory = (slug:string) => {
  return useQuery({
    queryKey: ['categories',slug],
    queryFn: async () => await getCategoryBySlug(slug),
    enabled: !!slug
  })
}

export const useGetAllCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => await getAllCategories(),
  })
}