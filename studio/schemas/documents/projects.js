export default {
  name: 'projects',
  type: 'document',
  title: 'Projects',
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
