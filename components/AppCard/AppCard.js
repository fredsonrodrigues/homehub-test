import React from 'react';
import Head from 'next/head'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import { Card, Button } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '15px'
  },
  cardActions: {
    display: 'initial'
  },
  buttonAdopt: {
    width: '100%'
  },
  chipTemperament: {
    marginBottom: '2%'
  }
});

export default function AppCard({ full, breed }) {
  const classes = useStyles();
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{breed.name} | DogHub - Find your dog!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card className={classes.root}>
        <CardActionArea onClick={() => router.push({
          pathname: '/[pid]',
          query: { pid: breed.id }
        })}>
          <CardMedia
            component="img"
            alt={breed.name}
            height="200"
            image={`/images/${breed.id}.jpg`}
            title={breed.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h5">
              <strong>{breed.name}</strong>
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            {breed.temperament.split(", ").map((el, key) =>
              <Chip className={classes.chipTemperament} label={el} key={key} variant="outlined" />
            )}
          </CardActions>
        </CardActionArea>
        {full && (
          <>
            <CardContent>
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
              <Button variant="contained" color="primary" className={classes.buttonAdopt} size="large">
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
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]).isRequired,
  full: PropTypes.boolean,
  breed: PropTypes.shape({
    id: PropTypes.integer,
    name: PropTypes.string,
    temperament: PropTypes.array,
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
  })
}