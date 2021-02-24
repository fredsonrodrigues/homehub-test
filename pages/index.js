import React from 'react';
import useSWR from 'swr'
import Head from 'next/head'
import AppCard from '../components/AppCard'
import Container from '../components/Container'
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetcher } from '../services';

const BreedList = () => {
  const { data, error } = useSWR('/api/breeds/', fetcher);

  if (error) 
    return <div>Failed to load</div>
  if (!data) 
    return <CircularProgress />
    
  return data.map((e, key) => <AppCard key={key} breed={e} />);
}

export default function Home() {
  return (
    <Container>
      <Head>
        <title>DogHub - Find your dog!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BreedList />
    </Container>
  )
}
