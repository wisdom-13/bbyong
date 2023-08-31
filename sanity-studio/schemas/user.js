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
      title: 'Address',
      name: 'address',
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
    {
      title: 'Bio',
      name: 'bio',
      type: 'string',
    },
    {
      title: 'Links',
      name: 'link',
      type: 'array',
      of: [
        {
          title: 'Link',
          name: 'link',
          type: 'document',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string',
            },
            {
              title: 'Url',
              name: 'url',
              type: 'string',
            },
            {
              title: 'Click',
              name: 'click',
              type: 'number',
              initialValue: 0,
            },
            {
              title: 'IsUse',
              name: 'isUse',
              type: 'boolean',
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      // media: 'image'
    }
  }
}