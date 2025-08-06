import { FaSpaceShuttle, FaUserAstronaut } from 'react-icons/fa';
import { GrLocationPin } from 'react-icons/gr';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Space Travels')
    .items([
      S.documentTypeListItem('destination')
        .title('Destinations')
        .icon(GrLocationPin),
      S.documentTypeListItem('crew').title('Crews').icon(FaUserAstronaut),
      S.documentTypeListItem('technology')
        .title('Technologies')
        .icon(FaSpaceShuttle),
    ]);
