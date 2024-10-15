//fetch data fron db.json

import { Category, Post } from '@prisma/client';

// ######posts######

export const getPostBySlug = async (slug: string): Promise<Post> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(`/api/posts/${slug}`);
  if (!res.ok) {
    throw new Error("could not fetch post");
  }
  return await res.json();
}

export const getAllPosts = async (slug:string): Promise<Post[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));  
  const res = await fetch(`/api/posts?cat=${slug}`);
  if (!res.ok) {
    throw new Error("could not fetch posts");
  }
  return await res.json();
}

// ######categories######
export const getAllCategories = async (): Promise<Category[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch("/api/categories");
  if (!res.ok) {
    throw new Error("could not fetch all categories");
  }
  return await res.json();
}

export const getCategoryBySlug = async (slug: string): Promise<Category> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(`/api/categories/${slug}`);
  if (!res.ok) {
    throw new Error("could not fetch one category");
  }
  return await res.json();
}