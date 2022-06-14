import { Routes, Route } from "react-router-dom";
import CharactersList from './components/CharactersList/CharactersList';
import Favorite from './components/Favorit/Favorite';
import './App.css';


const App = ({ defaultValue = [] }) => {

  return (

    <div className="App">
      <header className="App-header">
          <Routes>
            <Route path="/" element={<CharactersList />} />
            <Route path="alive" element={<Favorite />} />
          </Routes>
          </header>
    </div>
    
  )
}

export default App
