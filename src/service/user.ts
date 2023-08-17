import { client } from "./sanity";

type OAuthUser = {
  id: string;
  email: string;
  name: string;
  image?: string | null;
}

export async function addUser({ id, email, name, image }: OAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: 'user',
    email,
    name,
    image,
    link: '',
    dudge: 0
  })
}

export async function getLink(link?: string) {
  const query = link
    ? `&& (link == "${link}")`
    : '';
  return client
    .fetch(
      `*[_type =="user" ${query}][0]{
      link,
    }
    `
    )
}