export default {
  title: 'Letter',
  name: 'letter',
  type: 'document',
  fields: [
    {
      title: 'To',
      name: 'to',
      type: 'reference',
      to: [{ type: 'user' }],
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Context',
      name: 'context',
      type: 'text',
    },
    {
      title: 'Ip',
      name: 'ip',
      type: 'string',
    },
    {
      title: 'IsPublic',
      name: 'isPublic',
      type: 'boolean',
      initialValue: true,
    },

  ]
}