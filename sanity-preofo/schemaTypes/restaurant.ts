import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant Name',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description of Restaurant',
      type: 'text',
    }),
    defineField({
      name: 'address',
      title: `Restaurant's Address`,
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'latitude',
      title: `Restaurant's Latitude`,
      type: 'number',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'longitude',
      title: `Restaurant's Longitude`,
      type: 'number',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'minPrepTime',
      title: `Minimum PrepTime in minutes`,
      type: 'number',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'maxPrepTime',
      title: `Maximum PrepTime in minutes`,
      type: 'number',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'open',
      title: `Is Restaurant Open now`,
      type: 'boolean',
      hidden: true,
    }),
    defineField({
      name: 'rating',
      title: `Restaurant's Rating`,
      type: 'number',
      validation: (rule) => rule.required().min(0).max(5).error("Enter a value between 1 and 5")
    }),
    defineField({
      name: 'reviews',
      title: `Restaurant's Reviews`,
      type: 'string',
    }),
    {
      name: 'images',
      title: `Restaurant's Images`,
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'tags',
      title: `Restaurant Tags`,
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'dishes',
      title: `Dishes`,
      type: 'reference',
      to:[{type:'dish'}]
    },
  ],
})
