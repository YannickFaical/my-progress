import { useState,useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';

import Home from './pages/Home';
import Menu from './components/Menu';
import Technoadd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';
import './css/app.css';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [technos,setTechnos]= useState([]);
  const STORAGE_KEY ='technos';
  const [storedTechnos, setStoredTechnos] =useLocalStorage(STORAGE_KEY, []);
  useEffect(()=>{
    console.log('useEffect  with []');
    //recupert ce qui se trouve dans localStrorage
    setTechnos(storedTechnos);
  },[]);

// pour que useEffect soit appele a chaque fois que technos va changer
  useEffect ( ()=>{
    console.log('useEffect with [technos]');
    setStoredTechnos(technos);
  } , [technos]);

  // 
//fonction pour recuperer les objets passe de l'utilisateur
  function handleAddTechno(techno){
    console.log('handleAddTechno', techno);
    
    //pour cloner technos et recuper l'objet techno
    setTechnos([...technos, {...techno,technoid:uuidv4()}]);
  }

  // 
  function handleDeleteTechno(id){
    //pour chaque techno , on veut garder la techno que si cette techno a un technoid different de id qui aura ete recu par cette fonction
    //un nouveau tableau qui comportera tte les techno sauf celle qui a un technoid == id qui aura ete passer par le petit enfant

    setTechnos(technos.filter((tech)=> tech.technoid!== id));

  }
  return (
    <>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/add" element={<Technoadd handleAddTechno={handleAddTechno}/>} />  
      <Route path="/list" element={<TechnoList technos={technos} handleDeleteTechno={handleDeleteTechno}/>} />  
    </Routes>
    

    </>
  );
}

export default App;
