import { client } from "./sanity";

export async function clickLink(linkId: string) {
  return client
    .patch(linkId)
    .inc({ click: 1 })
    .commit({ autoGenerateArrayKeys: true });
}