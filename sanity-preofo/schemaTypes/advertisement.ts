import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'advertisement',
  title: 'Advertisement',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Advertisment Title ',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Advertisement Image (h = 550px , w = 200px)',
      type: 'image',
    }),
  ],
})
