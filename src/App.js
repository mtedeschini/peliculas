import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';
import peliculasJson from './peliculas.json';
import Paginacion from './Paginacion';

function App() {

  let peliculas = peliculasJson; //Importo json con info películas

  return (
    <PageWrapper>
      
      {peliculas.map(pelicula => {
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
            actor= {pelicula.actores} 
          />
          )})}

      <Paginacion pagina={2} total={4} onChange={(pagina) => {
        alert(pagina)
      }}/>

    </PageWrapper>
  );
}

export default App;
