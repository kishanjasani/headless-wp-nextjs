import { gql } from '@apollo/client';
import MenuFragment from './fragments/menus';

export const GET_MENUS = gql`
    headerMenus: menuItems(where: {location: PRIMARY, parentId: "0"}) {
      edges {
        node {
          ...MenuFragment
          childItems {
            edges {
              node {
                ...MenuFragment
              }
            }
          }
        }
      }
    }
    ${MenuFragment}
`;