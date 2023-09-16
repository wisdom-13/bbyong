import { client } from "./sanity";

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