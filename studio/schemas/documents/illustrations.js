export default {
  name: 'illustrations',
  type: 'document',
  title: 'Illustrations',
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
