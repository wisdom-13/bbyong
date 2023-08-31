export type User = {
  id: string;
  name: string;
  email: string;
  image?: string;
  address?: string;
  dudge: number;
  bio?: string;
}

export type UserDetail = User & {
  link: Link[];
}

export type Link = {
  title: string;
  url: string;
  click: number;
  isUse: boolean;
}