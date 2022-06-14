import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@mui/material';
import Menu from '../Menu'


const Favorite = () => {

  const [characters, setFavorites] = useState([])

  const loadFavoriteMovies = () => {
    const movies =
      JSON.parse(window.localStorage.getItem("favorite_movie")) || [];
    setFavorites(movies);
  };

  useEffect(() => {
    loadFavoriteMovies()
  }, [])


  return (
    <div>
      <Menu />
      <div>
        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
          {
            characters.map((character, index) => {
              return (
                <Card key={index} sx={{ maxWidth: 345 }}>

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {character.name}
                    </Typography>

                  </CardContent>
                  <CardActions>
                    <Button className="pokemon-heart-btn">
                    </Button>
                  </CardActions>
                </Card>


              )
            })
          }
        </Box>
      </div>
    </div>
  )
}

export default Favorite