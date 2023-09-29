import { User } from './user'

export type Letter = {
  to: User;
  title: string;
  name: string;
  context: string;
  ip: string;
  isPublic: boolean;
  createdAt: string;
}