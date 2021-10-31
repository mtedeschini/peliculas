import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';
import peliculasJson from './peliculas.json';
import Paginacion from './Paginacion';
import { useState } from 'react';

function App() {

  const [paginaActual, setPaginaActual] = useState (1);
  const [cantidadActual, setCantidadActual] = useState (3);
  var totalPorPagina = cantidadActual;
  let peliculas = peliculasJson; //Importo json con info películas
  let peliculasPorPagina = [];

  const buscarPelicula = async () => {
    let url = "https://cors-anywhere.herokuapp.com/https://lucasmoy.dev/data/react/peliculas.json";

    let respuesta = await fetch(url, {
        "method" : "GET",
        "mode": "no-cors",
        "headers": {
          "Accept": 'application/json',
          "Content-Type" : 'application/json',
          "Origin": 'ttps://lucasmoy.dev'
        }
    });
    let json = await respuesta.json();
    alert(json);
  }

  buscarPelicula();

  const cargarPeliculas = () => {
    //Si estoy en pagina 1, primera pagina va a mostrar la pelicula 0 a 4.
    // peliculas.slice(0, 5);
    // peliculas.slice(5, 10);
    peliculasPorPagina = peliculas.slice((paginaActual - 1 ) * totalPorPagina, paginaActual * totalPorPagina )
    }
  
  const getTotalPaginas = () =>{
    let cantidadPeliculas = peliculas.length;
    return Math.ceil(cantidadPeliculas / totalPorPagina);
  }
  
  cargarPeliculas();

  
  return (
    <PageWrapper 
    cantidadPeliculas = {peliculas.length}>
      
      {peliculasPorPagina.map(pelicula => {
        return(
          <Pelicula 
            titulo={pelicula.titulo} 
            anio= {pelicula.anio} 
            img={pelicula.img} 
            calificacion={pelicula.calificacion}  
            descripcion={pelicula.descripcion} 
            runtime= {pelicula.runtime} 
            mmpa= {pelicula.mmpa} 
            release= {pelicula.release} 
            director= {pelicula.director} 
            actores= {pelicula.actores} 
          />
          )})}

      <Paginacion 
      pagina={paginaActual} 
      total={getTotalPaginas()} 
      cambiarPagina={(pagina) => {
         setPaginaActual(pagina);
      }}
      cantidad={cantidadActual}
      cambiarCantidad={(cantidad) => {
        setCantidadActual(cantidad);
      }}
      />

    </PageWrapper>
  );
}

export default App;
