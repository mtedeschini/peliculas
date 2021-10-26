export default function Paginacion(props) {

    {props.pagina}
    {props.total}
    {props.onChange}

    return (
        <div className="topbar-filter">
            <div className="pagination2">
                <span>Página {props.pagina} de {props.total}</span>


                    <a className="active" href="#">1</a>
                
                <a href="#">2</a>
                <a href="#"><i className="ion-arrow-right-b"></i></a>
            </div>
        </div>
    );
}