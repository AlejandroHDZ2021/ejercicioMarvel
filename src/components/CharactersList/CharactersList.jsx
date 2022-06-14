import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CharacterCard from '../CharacterCard/CharacterCard';
import Menu from '../Menu'
import { Box } from '@mui/material'
import { FavoriteProvider } from "../contexts/favoritesContext";

const CharactersList = () => {

  const localStorageKey = "favorite_movie";

  const [favorites, setFavorites] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [valueInput, setValueInput] = useState('');

  const getCharacters = async () => {
    const url = 'https://gateway.marvel.com:443/v1/public/characters?ts=1651339658&apikey=35755cd339fd7c676339edf8d57fcc37&hash=324da40eb91c741cbd78f922f02b65f5&limit=50'
    const response = await axios.get(url)
    console.log(response)
    setCharacters(response.data.data.results)
  }
  const getCharacter = async (value) => {
    const url = `https://gateway.marvel.com:443/v1/public/characters?name=${value}&ts=1651339658&apikey=35755cd339fd7c676339edf8d57fcc37&hash=324da40eb91c741cbd78f922f02b65f5&limit=50`
    const response = await axios.get(url)
    console.log(response)
    setCharacters(response.data.data.results)
  }

  const loadFavoriteMovies = () => {
    const movies =
      JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
    setFavorites(movies);
  };

  useEffect(() => {
    loadFavoriteMovies();
  }, []);

  useEffect(() => {
    getCharacters()
  }, [])




  const updateFavoritePokemons = (name) => {
    const updated = [...favorites];
    const isFavorite = updated.indexOf(name);
    if (isFavorite >= 0) {
      updated.splice(isFavorite, 1);
    } else {
      updated.push(name);
    }
    setFavorites(updated);
    window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
  };

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons
      }}
    >
      <section>
        <Menu />
        <input type="text" onChange={e => setValueInput(e.target.value)} />
        <button onClick={() => getCharacter(valueInput)}> Buscar </button>
        <div>
        </div>
        <div>
          <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2}>
            {
              characters.map((character) => {
                return (
                  <CharacterCard key={character.id} info={character} />
                )
              })
            }
          </Box>
        </div>
      </section>
    </FavoriteProvider>
  )
}

export default CharactersList