import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Dish Name',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description of Dish',
      type: 'string',
    }),
    defineField({
      name: 'prepTime',
      title: `Prepation Time in minutes`,
      type: 'number',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'price',
      title: `Price of Dish`,
      type: 'number',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'nonVeg',
      title: `Is this dish NonVeg`,
      type: 'boolean',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'rating',
      title: `Dish Rating`,
      type: 'number',
      validation: (rule) => rule.required().min(0).max(5).error("Enter a value between 1 and 5")
    }),
    {
      name: 'image',
      title: `Dish Image`,
      type: 'image',
    },
    {
      name: 'available',
      title: `Is the Dish Available`,
      type: 'boolean',
    },
  ],
})
