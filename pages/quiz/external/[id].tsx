import React from 'react';
import { useRouter } from 'next/router';
import Quiz from '../../../src/screens/Quiz';

import { ExternalDB } from '../../../src/interfaces/db';
import { NextPageContext } from 'next';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

export default function GuysQuiz({ externalDB }: { externalDB: ExternalDB }) {
  return (
    <ThemeProvider theme={externalDB.theme}>
      <Head>
        <meta property="og:image" content={externalDB?.bg} key="ogimage" />
        <meta
          property="og:description"
          content={externalDB?.description}
          key="ogdescription"
        />

        <title>{externalDB?.title}</title>
      </Head>
      <Quiz quiz={externalDB} />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  try {
    const [repoName, name] = ((context.query.id as unknown) as string).split(
      '___'
    );
    console.log(repoName, name);
    const externalDB = await fetch(
      `https://${repoName}.${name}.vercel.app/api/db`
    )
      .then((res) => (res.ok ? res.json() : null))
      .then((res) => res);
      
    return {
      props: {
        externalDB,
      },
    };
  } catch (err) {
    useRouter().push('/');
  }
}