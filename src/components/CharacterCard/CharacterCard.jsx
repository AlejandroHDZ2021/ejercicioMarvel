import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@mui/material';


const CharacterCard = ({ info }) => {
  const { favoriteMovies, updateFavoriteMovies } = useContext(
    FavoriteContext
  );

  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoriteMovies.includes(info.name) ? redHeart : blackHeart;

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoriteMovies(info.name);
  };



  return (

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={info.thumbnail.path + '.' + info.thumbnail.extension}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          <div><h6>List Events:</h6></div>

        </Typography>
        <Typography gutterBottom variant="h6" component="div">

          <div>
            {info.events.available >= 1 ? info.events.items[0].name : 'No tiene eventos'}
          </div>
          <div>
            {info.events.available >= 2 ? info.events.items[1].name : ''}
          </div>
          <div>
            {info.events.available >= 3 ? info.events.items[2].name : ''}
          </div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={clickHeart}>
          <div>{heart}</div>
        </Button>
      </CardActions>
    </Card>
  )
}

export default CharacterCard