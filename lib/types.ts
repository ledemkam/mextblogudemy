export type ICategories = {
  id: number;
  title: string;
  slug: string;
};

export type Post = {
  id: number;
  category: string;
  title: string;
  image: string;
  caption: string;
  date: string | Date;
  minutesToRead: number;
  author: string;
  nbViews: number;
  nbComments: number;
  slug: string;
  content?: string;
};
