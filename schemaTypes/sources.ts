import {defineField, defineType} from 'sanity';
import {LinkIcon} from '@sanity/icons';

export default defineType({
    name: 'sources',
    title: 'Sources',
    icon: LinkIcon,
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            description: 'Where this resource is used in the post.',
            title: 'Resource Name',
            type: 'string',
        }),
        defineField({
            name: 'url',
            title: 'Url',
            type: 'url',
        }),
        defineField({
            name: 'usage',
            description: 'Where this resource is used in the post.',
            title: 'Used in',
            type: 'string',
        }),
    ],
});
