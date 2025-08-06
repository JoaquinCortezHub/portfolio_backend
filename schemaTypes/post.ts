import {defineField, defineType} from 'sanity';
import { DocumentsIcon } from '@sanity/icons';

export default defineType({
  name: 'post',
  title: 'Posts',
  type: 'document',
  icon: DocumentsIcon,
  groups: [
    {name: 'details', title: 'Details'},
    {name: 'content', title: 'Content'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'details',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      group: 'details',
      type: 'slug',
      validation: (rule) => rule
                .required()
                .error('Requiered to generate a page on the website'),
            hidden: ({document}) => !document?.title,
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      group: 'details',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'cover',
      description: 'Image used in the post card and on the post header.',
      title: 'Cover Image',
      group: 'content',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'Type',
      description: 'Type of post.',
      type: 'string',
      group: 'details',
      options: {
          list: ['personal learning', 'project update'],
          layout: 'radio'
      }
  }),
    defineField({
      name: 'categories',
      description: 'Group of tags related to the post.',
      group: 'details',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      group: 'details',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image'
        },
        {
          type: 'code',
          options: {
            withFIleName: true
          }
        }
      ]
  }),
    defineField({
      name: 'sources',
      group: 'details',
      description: 'Sources of the resources used in this post.',
      title: 'Sources',
      type: 'array',
      of: [{type: 'reference', to: {type: 'sources'}}],
    })
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'cover',
    },
    prepare(selection) {
      const {author, media} = selection
      return {...selection, media, subtitle: author && `by ${author}`}
    },
  },
})