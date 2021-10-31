export default function Paginacion(props) {
    
    const getPaginas = () => {
        const resultado = [];
        for (let i = 0; i < props.total ; i++) {
            let pagina = i + 1;
            resultado.push(
                <a onClick={() => props.cambiarPagina(pagina)} 
                className={props.pagina === pagina  ? 'active' : ''} 
                >
                {pagina}
                </a>
            )}
        return resultado;
    }

    const getCantidadActual = () => {
        const cantidadPorPagina = [];
        for (let i = 0; i < 3 ; i++) {
            let cantidad = (i+1) * 3;
            cantidadPorPagina.push(
                <a onClick={() => props.cambiarCantidad(cantidad)} 
                className={props.cantidad === cantidad  ? 'active' : ''} 
                >
                {cantidad}
                </a>
            )}
        return cantidadPorPagina; 
    }
    
    return (
        
        <div className="topbar-filter">
            <div className="pagination2">
                <span>Página {props.pagina} de {props.total}</span>
                
                {getPaginas()}

                <a><i className="ion-arrow-right-b"></i></a>
  
            </div>
            <div className="pagination2">
                <span>Películas por página</span>       

                {getCantidadActual()}
  
            </div>
        </div>
    );
}