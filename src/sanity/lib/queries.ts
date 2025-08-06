import { defineQuery } from 'next-sanity';

export const DESTINATIONS_QUERY = defineQuery(`
    *[_type == 'destination'
    && defined(slug.current)]
    | order(name asc){
        name,
        slug,
        desc,
        distance,
        time,
        mainImage{
        alt,
        asset->{url}
        }
  }`);

export const CREWS_QUERY = defineQuery(`
    *[_type == 'crew'
    && defined(slug.current)]
    | order(name asc){
        name,
        slug,
        rank,
        desc,
        mainImage{
        alt,
        asset->{url}
        }
  }`);

export const TECHNOLOGIES_QUERY = defineQuery(`
    *[_type == 'technology'
    && defined(slug.current)]
    |order(name asc){
        name,
        desc,
        slug,
        mainImage{
        alt,
        asset->{url}
        }
    }
    `);
