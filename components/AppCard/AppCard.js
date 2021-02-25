import React from 'react';
import Head from 'next/head'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import { Card, Button, CardActionArea, CardActions, CardContent, CardMedia, Chip, Typography } from '@material-ui/core';
import { useRouter } from 'next/router'
import theme from "../Theme";

const useStyles = makeStyles(({
  root: {
    maxWidth: 345,
    margin: '15px',
    boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 29%), 0px 4px 5px 0px rgb(0 0 0 / 35%), 0px 1px 10px 0px rgb(0 0 0 / 28%)"
  },
  cardActions: {
    display: 'initial'
  },
  buttonAdopt: {
    width: '100%'
  },
  chipTemperament: {
    marginBottom: '2%'
  },
  title: {
    color: theme.palette.titlePrimary.main
  }
}));

export default function AppCard({ full, breed, onSubmitAdopt }) {
  const classes = useStyles();
  const router = useRouter();

  const onSubmitAdoptBreed = () => {
    onSubmitAdopt(breed);
  }

  const onCardAction = () => {
    if (!full) {
      router.push({
        pathname: '/[pid]',
        query: { pid: breed.id }
      })
    }
  }

  return (
    <>
      {full && (
        <Head>
          <title>{breed.name} | DogHub - Find your dog!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      )}
      <Card className={classes.root}>
        <CardActionArea data-testid="app-card-action" onClick={onCardAction}>
          <CardMedia
            component="img"
            alt={breed.name}
            height="200"
            image={`/images/${breed.id}.jpg`}
            title={breed.name}
          />
          <CardContent>
            <Typography className={classes.title} data-testid="app-card-title" gutterBottom variant="h5" component="h5">
              <strong>{breed.name}</strong>
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            {breed.temperament.split(", ").map((el, key) =>
              <Chip data-testid="app-card-chips" className={classes.chipTemperament} label={el} key={key} variant="outlined" />
            )}
          </CardActions>
        </CardActionArea>
        {full && (
          <>
            <CardContent data-testid="app-card-details">
              <p>Life span: {breed.life_span}</p>
              <p>Bred for: {breed.bred_for}</p>
              <p>Breed group: {breed.breed_group}</p>
              <p>Weight:</p>
              <ul>
                <li><p>Imperial: {breed.weight.imperial}</p></li>
                <li><p>Metric: {breed.weight.metric}</p></li>
              </ul>
              <p>Height:</p>
              <ul>
                <li><p>Imperial: {breed.height.imperial}</p></li>
                <li><p>Metric: {breed.height.metric}</p></li>
              </ul>
            </CardContent>
            <CardActions>
              <Button onClick={onSubmitAdoptBreed} data-testid="app-card-adopt-button" variant="contained" color="primary" className={classes.buttonAdopt} size="large">
                <strong>ADOPT</strong>
              </Button>
            </CardActions>
          </>
        )}
      </Card>
    </>
  );
}

AppCard.propTypes = {
  full: PropTypes.bool,
  breed: PropTypes.shape({
    id: PropTypes.integer,
    name: PropTypes.string,
    temperament: PropTypes.string,
    life_span: PropTypes.string,
    bred_for: PropTypes.string,
    breed_group: PropTypes.string,
    weight: PropTypes.shape({
      imperial: PropTypes.string,
      metric: PropTypes.string,
    }),
    height: PropTypes.shape({
      imperial: PropTypes.string,
      metric: PropTypes.string,
    })
  }),
  onSubmitAdopt: PropTypes.func
}

AppCard.defaultProps = {
  full: false,
  breed: {
    name: null,
    temperament: null,
    life_span: null,
    bred_for: null,
    breed_group: null,
    weight: {
      imperial: null,
      metric: null,
    },
    height: {
      imperial: null,
      metric: null,
    },
  },
  onSubmitAdopt: () => { }
}