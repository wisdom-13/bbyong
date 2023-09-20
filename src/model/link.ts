export type Link = {
  id: string;
  title: string;
  url: string;
  index: number;
  click: number;
  isUse: boolean;
}

export type SimpleLink = Pick<Link, 'id' | 'title' | 'url'>