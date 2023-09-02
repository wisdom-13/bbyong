import { SimpleLink } from './link';

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
  links: SimpleLink[];
}
