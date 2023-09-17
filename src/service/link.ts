import { client } from "./sanity";

export async function addLink(userId: string, title: string, url: string) {
  return client.create(
    {
      _type: 'link',
      author: { _ref: userId },
      title,
      url,
      click: 0,
      isUse: true
    },
    { autoGenerateArrayKeys: true }
  );
}

export async function clickLink(linkId: string) {
  return client
    .patch(linkId)
    .inc({ click: 1 })
    .commit({ autoGenerateArrayKeys: true });
}

export async function updateLink(linkId: string, type: string, value: string) {
  return client
    .patch(linkId)
    .set({ [type]: value })
    .commit({ autoGenerateArrayKeys: true });
}