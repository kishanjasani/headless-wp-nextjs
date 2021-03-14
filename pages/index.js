import Head from 'next/head';
import client from '../src/apollo/client';
import Layout from '../src/components/layout';
import { GET_MENUS } from '../src/queries/get-menus';

export default function Index({ data }) {
  return (
    <Layout data={ data }>
      Content
    </Layout>
  )
}

export async function getStaticProps( context ) {
  const { data, loading, networkStatus } = await client.query({
    query: GET_MENUS
  });

  return {
    props: {
      data: {
        menus: {
          headerMenus: data?.headerMenus?.edges ?? [],
        }
      }
    }, // Will be passed to the page component as props
    revalidate: 1
  }
}