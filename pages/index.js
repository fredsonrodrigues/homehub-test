import React from 'react';
import Head from 'next/head'
import AppCard from '../components/AppCard'
import Container from '../components/Container'
import breeds from '../mocks/breeds.json';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>DogHub - Find your dog!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        breeds.map((e, key) => <AppCard key={key} breed={e}/>)
      }
    </Container>
  )
}
