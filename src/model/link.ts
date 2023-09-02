export type Link = {
  title: string;
  url: string;
  click: number;
  isUse: boolean;
}

export type SimpleLink = Pick<Link, 'title' | 'url'>