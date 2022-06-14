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
  const { favoritePokemons, updateFavoritePokemons } = useContext(
    FavoriteContext
  );

  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(info.name) ? redHeart : blackHeart;

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(info.name);
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
        <Typography gutterBottom variant="h4" component="div">
          {info.events.items.name}
        </Typography>
      </CardContent>
      <CardActions>
      <Button onClick={clickHeart} className="pokemon-heart-btn">
          <div className="pokemon-favorite">{heart}</div>
        </Button>
      </CardActions>
    </Card>
  )
}

export default CharacterCard