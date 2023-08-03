export default {
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string'
    },
    {
      title: 'Image', // 두더지 이미지
      name: 'image',
      type: 'string'
    },
    {
      title: 'Dudge', // 클릭 횟수
      name: 'dudge',
      type: 'number'
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'username',
      media: 'image'
    }
  }
}