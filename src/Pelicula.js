export default function Pelicula(props) {
    return (
        <div className="movie-item-style-2">
            <img src={"images/uploads/" + props.img} alt="" />
            <div className="mv-item-infor">
                <h6>
                    <a href="moviesingle.html"> 
                        {props.titulo}
                        <span> ({props.anio})</span>
                    </a>
                </h6>
                <p className="rate"><i className="ion-android-star"></i><span>{props.calificacion}</span> /10</p>
                <p className="describe">{props.descripcion}</p>
                <p className="run-time"> Duración: {props.runtime}    .     <span>MMPA: {props.mmpa} </span>    .     <span>Lanzamiento: {props.release}</span></p>
                <p>Director: 
                    <a href="#"> {props.director}</a>
                </p>
                <p>Actores: {props.actores}</p>
            </div>
        </div>
    )
}


{/*

                <div className="movie-item-style-2">
                  <img src="images/uploads/mv3.jpg" alt="" />
                  <div className="mv-item-infor">
                    <h6><a href="moviesingle.html">blade runner  <span>(2015)</span></a></h6>
                    <p className="rate"><i className="ion-android-star"></i><span>7.3</span> /10</p>
                    <p className="describe">Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help...</p>
                    <p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
                    <p>Director: <a href="#">Peyton Reed</a></p>
                    <p>Stars: <a href="#">Paul Rudd,</a> <a href="#"> Michael Douglas</a></p>
                  </div>
                </div>
                <div className="movie-item-style-2">
                  <img src="images/uploads/mv4.jpg" alt="" />
                  <div className="mv-item-infor">
                    <h6><a href="moviesingle.html">Mulholland pride<span> (2013)  </span></a></h6>
                    <p className="rate"><i className="ion-android-star"></i><span>7.2</span> /10</p>
                    <p className="describe">When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.</p>
                    <p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
                    <p>Director: <a href="#">Shane Black</a></p>
                    <p>Stars: <a href="#">Robert Downey Jr., </a> <a href="#">  Guy Pearce,</a><a href="#">Don Cheadle</a></p>
                  </div>
                </div>
                <div className="movie-item-style-2">
                  <img src="images/uploads/mv5.jpg" alt="" />
                  <div className="mv-item-infor">
                    <h6><a href="moviesingle.html">skyfall: evil of boss<span> (2013)  </span></a></h6>
                    <p className="rate"><i className="ion-android-star"></i><span>7.0</span> /10</p>
                    <p className="describe">When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.</p>
                    <p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
                    <p>Director: <a href="#">Alan Taylor</a></p>
                    <p>Stars: <a href="#">Chris Hemsworth,  </a> <a href="#">  Natalie Portman,</a><a href="#">Tom Hiddleston</a></p>
                  </div>
                </div>
        

*/}