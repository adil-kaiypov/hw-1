import './App.css';
import {Routes, Route, NavLink, Link} from 'react-router-dom';
import  MainPage from './pages/MainPage/MainPage';
import  InfoPage from './pages/InfoPage/InfoPage';
import  PokemonsPage from './pages/PokemonsPage/PokemonsPage';
import SinglePokemonPage from './pages/SinglePokemonPage/SinglePokemonPage';
import AbilityPage from './pages/AbilityPage/AbilityPage';

const activeNav = ({isActive}) =>{
  return isActive ? 'activeNav' : '';
};

function App() {
  return (
    <>
      <nav>
        <NavLink to='/about' className={activeNav}>About</NavLink>  
        <NavLink to='/' className={activeNav}>Main</NavLink>        
        <NavLink to='/pokemons' className={activeNav}>Pokemons</NavLink>       
      </nav>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/about' element={<InfoPage />}/>
        <Route path='/pokemons' element={<PokemonsPage />}/>
        <Route path='/pokemon/:name' element={<SinglePokemonPage />}/>
        <Route path='/ability/:name/:from' element={<AbilityPage />}/>
      </Routes>
    </>
  )
}

export default App

