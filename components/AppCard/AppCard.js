import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,Button} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '5%'
  },
  cardActions: {
      display: 'initial'
  },
  buttonAdopt: {
      width: '100%',
      background: '#8e9496',
      color: '#fff'
  },
  chipTemperament: {
      marginBottom: '2%'
  }
});

export default function AppCard({full, breed}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
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
                    <Button variant="contained" className={classes.buttonAdopt} size="large">
                        <strong>ADOPT</strong>
                    </Button>
                </CardActions>
            </>
        )}
      </CardActionArea>
    </Card>
  );
}