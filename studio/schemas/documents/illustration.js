
import {MdPerson} from 'react-icons/md'

export default {
  name: 'illustration',
  type: 'document',
  title: 'Illustration',
  icon: MdPerson,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'link',
      title: 'Shop link',
      type: 'url'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
}
