import { FaUserAstronaut } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const crewType = defineType({
  name: 'crew',
  title: 'Crew',
  icon: FaUserAstronaut,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rank',
      title: 'Rank',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      name: 'name',
      image: 'mainImage',
      rank: 'rank',
    },
    prepare({ name, image, rank }) {
      const nameFormatted = name.toUpperCase();

      return {
        title: name ? nameFormatted : 'Unnamed Crew',
        subtitle: rank ? rank.toUpperCase() : 'Unknown Rank',
        media: image || FaUserAstronaut,
      };
    },
  },
});
