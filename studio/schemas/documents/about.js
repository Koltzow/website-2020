export default {
  name: 'about',
  type: 'document',
  title: 'About',
  __experimental_actions: [
    'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ]
    }
  ]
}
