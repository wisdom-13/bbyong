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
    address: '',
    dudge: 0
  })
}

export async function getUserByUserEmail(email: string) {
  return client.fetch(
    `*[_type == "user" && email == "${email}"][0]{
      ...,
      "id":_id,
    }`
  );
}

export async function getUserByUserAddress(address: string) {
  return client.fetch(
    `*[_type == "user" && address == "${address}"][0]{
      ...,
      "links": *[_type == "link" && references(^._id) && isUse == true]{
        "id": _id,
        title, 
        url,
      }
    }`
  );
}

export async function getAddress(address?: string) {
  const query = address
    ? `&& (address == "${address}")`
    : '';
  return client
    .fetch(
      `*[_type =="user" ${query}][0]{
      address,
    }
    `
    )
}

export async function settingAddress(userId: string, address: string) {
  return client
    .patch(userId)
    .set({ address })
    .commit({ autoGenerateArrayKeys: true });
}

export async function addDudge(userId: string) {
  return client
    .patch(userId)
    .inc({ dudge: 1 })
    .commit({ autoGenerateArrayKeys: true });
}