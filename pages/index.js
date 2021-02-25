import React from 'react';
import useSWR from 'swr'
import Head from 'next/head'
import AppCard from '../components/AppCard'
import Container from '../components/Container'
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { fetcher } from '../services';
import { Typography } from '@material-ui/core';

const BreedList = () => {
  const { data, error } = useSWR('/api/breeds/', fetcher);

  if (error) 
    return <div>Failed to load</div>
  if (!data) 
    return <CircularProgress />
    
  return data.map((e, key) => <AppCard key={key} breed={e} />);
}

const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.titlePrimary.main,
    marginBottom: "5px"
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Container>
      <Head>
        <title>DogHub - Find your dog!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography className={classes.title} variant="h5" component="h2">
        <strong>Up for adoption</strong>
      </Typography>
      <BreedList />
    </Container>
  )
}
