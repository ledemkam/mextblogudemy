//fetch data fron db.json

import { Post } from "./types";



export const getAllPosts = async (): Promise<Post[]> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch("./db.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Post[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return [];
  }
};