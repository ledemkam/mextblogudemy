//fetch data fron db.json

import { Post } from '@prisma/client';



export const getPostBySlug = async (slug: string): Promise<Post> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(`/api/posts/${slug}`);
  if (!res.ok) {
    throw new Error("could not fetch post");
  }
  return await res.json();
}

export const getAllPosts = async (): Promise<Post[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));  
  const res = await fetch("/api/posts");
  if (!res.ok) {
    throw new Error("could not fetch posts");
  }
  return await res.json();
}