import { client } from './sanity';

export async function getLetterList(address: string) {
  return client.fetch(
    `*[_type == "letter" && to->address == "${address}"]{
      ...,
      "id":_id,
    }`
  );
}