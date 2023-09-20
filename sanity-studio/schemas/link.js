export default {
  title: 'Link',
  name: 'link',
  type: 'document',
  fields: [
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{ type: 'user' }],
    },
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
      title: 'Index',
      name: 'index',
      type: 'number',
      initialValue: 0,
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
      initialValue: true,
    }
  ]
}