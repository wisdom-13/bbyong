import { client } from './sanity';

export async function getLetterList(address: string) {
  return client.fetch(
    `*[_type == "letter" && to->address == "${address}"]
      | order(_createdAt desc){
      ...,
      "id":_id,
      "createdAt":_createdAt
    }`
  );
}

export async function sendLetter(userId: string, name: string, title: string, contents: string, isPublic: boolean) {
  return client.create(
    {
      _type: 'letter',
      to: { _ref: userId },
      name,
      title,
      contents,
      isPublic
    },
    { autoGenerateArrayKeys: true }
  );
}