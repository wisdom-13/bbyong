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

export async function getUserByUseremail(email: string) {
  return client.fetch(
    `*[_type == "user" && email == "${email}"][0]{
      ...,
      "id":_id,
    }`
  );
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

export async function settingLink(userId: string, link: string) {
  return client
    .patch(userId)
    .set({ link })
    .commit({ autoGenerateArrayKeys: true });
}