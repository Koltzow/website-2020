import S from '@sanity/desk-tool/structure-builder'
import {MdHome, MdPerson, MdFolder, MdImage, MdDescription, MdImportContacts} from 'react-icons/md'

const hiddenDocTypes = listItem =>
  !['category', 'about', 'illustrations', 'illustration', 'project', 'projects', 'frontpage'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Frontpage')
        .child(
          S.editor()
            .id('frontpage')
            .schemaType('frontpage')
            .documentId('frontpage')
        )
        .icon(MdHome),
      S.listItem()
        .title('About')
        .child(
          S.editor()
            .id('about')
            .schemaType('about')
            .documentId('about')
        )
        .icon(MdPerson),
      S.listItem()
        .title('Projects')
        .child(
          S.editor()
            .id('projects')
            .schemaType('projects')
            .documentId('projects')
        )
        .icon(MdImportContacts),
      S.listItem()
        .title('Project')
        .schemaType('project')
        .child(S.documentTypeList('project').title('Project')).icon(MdDescription),
      S.listItem()
        .title('Illustrations')
        .child(
          S.editor()
            .id('illustrations')
            .schemaType('illustrations')
            .documentId('illustrations')
        )
        .icon(MdImportContacts),
      S.listItem()
        .title('Illustration')
        .schemaType('illustration')
        .child(S.documentTypeList('illustration').title('Illustration')).icon(MdImage),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')).icon(MdFolder),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
