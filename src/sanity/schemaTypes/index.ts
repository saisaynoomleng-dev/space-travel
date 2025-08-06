import { type SchemaTypeDefinition } from 'sanity';
import { destinationType } from './destinationType';
import { crewType } from './crewType';
import { technologyType } from './technologyType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [destinationType, crewType, technologyType],
};
