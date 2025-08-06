import { GrLocationPin } from 'react-icons/gr';
import { defineField, defineType } from 'sanity';

export const destinationType = defineType({
  name: 'destination',
  title: 'Destinations',
  icon: GrLocationPin,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Destination Name',
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
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'distance',
      title: 'Average Distance',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Travel Time',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
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
      distance: 'distance',
      time: 'time',
      image: 'mainImage',
    },
    prepare({ name, distance, time, image }) {
      const nameFormatted = name
        ? `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`
        : 'Untitled Destination';

      return {
        title: nameFormatted,
        subtitle: distance && time ? `${distance} KM | ${time} Days` : '',
        media: image || GrLocationPin,
      };
    },
  },
});
