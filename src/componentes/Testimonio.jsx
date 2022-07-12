import "../stylesheets/testimonio.css";

export default function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <div className="contenedor-texto-testimonio">
        <div className="texto-e-imagen">
          <div>
            <img
              className="imagen-testimonio"
              alt="Imagen-Comprador"
              src={require(`../imagenes/image-${props.imagen}.jpg`)}
            />
          </div>
          <div className="nombre-testimonio">
            {props.nombre}
            <p className="estatus-testimonio">
              {props.estatus}
            </p>
          </div>
        </div>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}