import React from 'react'
import './indi_item.scss'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Indi_item({name,price,imageUrl}) {
  const classes = useStyles();

  return (
    <Card className="item-container">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="250"
          image={imageUrl}
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {name}
        </Button>
        <Button size="small" color="primary">
          {price}
        </Button>
      </CardActions>
    </Card>
  );
}
