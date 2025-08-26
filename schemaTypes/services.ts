import { defineField, defineType } from "sanity";

export default defineType({
    name: 'services',
    title: 'Services',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Service Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Short Description',
            type: 'text',
            description: 'A brief description of the service',
            validation: (Rule) => Rule.required().max(300),
        }),
        defineField({
            name: 'keywords',
            title: 'Keywords',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Keywords associated with this service',
            options: {
                layout: 'tags',
            },
        }),
        defineField({
            name: 'body',
            title: 'Service Details',
            type: 'blockContent',
            description: 'Detailed description of the service (supports markdown)',
        }),
        defineField({
            name: 'relatedProjects',
            title: 'Related Projects URLs',
            type: 'array',
            of: [
                defineField({
                    name: 'projectLink',
                    title: 'Project Link',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Project Title',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'url',
                            title: 'Project URL',
                            type: 'url',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'description',
                            title: 'Project Description',
                            type: 'text',
                            description: 'Brief description of how this project relates to the service',
                        }),
                    ],
                }),
            ],
            description: 'URLs of existing projects related to this service',
        }),
        defineField({
            name: 'featured',
            title: 'Featured Service',
            type: 'boolean',
            description: 'Mark this service as featured',
            initialValue: false,
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'description',
        },
    },
})