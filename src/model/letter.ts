import { User } from './user'

export type Letter = {
  to: User;
  title: string;
  name: string;
  contents: string;
  ip: string;
  isPublic: boolean;
  createdAt: string;
}