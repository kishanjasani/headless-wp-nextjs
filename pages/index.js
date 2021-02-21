import Head from 'next/head';
import client from '../src/apollo/client';
import { GET_MENUS } from '../src/queries/get-menus';

export default function Index({ menus }) {
  return (
    <div>
     Hello World
    </div>
  )
}

export async function getStaticProps( context ) {
  const { data, loading, networkStatus } = await client.query({
    query: GET_MENUS
  });

  return {
    props: {
      menus: {
        headerMenus: data?.headerMenus?.edges ?? [],
      }
    }, // Will be passed to the page component as props
    revalidate: 1
  }
}