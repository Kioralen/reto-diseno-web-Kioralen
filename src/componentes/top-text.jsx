import "../stylesheets/top-text.css";
import star from "../imagenes/icon-star.svg";

export default function Text() {
  return (
    <div className="contenedor">
        <div className="top-text">
          <div className="main-text">
            <h1>10,000+ of our users love our products.</h1>
          We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.
          </div>
      </div>
      <div/ >
        <div className="rated">
          <p className="reviews">
            <img src={star} />
            {" "}
            <img src={star} />
            {" "}
            <img src={star} />
            {" "}
            <img src={star} />
            {" "}
            <img src={star} />
            {" "}
            Rated 5 Stars in Reviews
          </p>
          <p className="reviews">
            <img src={star} />
            {" "}
            <img src={star} />
            {" "}
            <img src={star} />
            {" "}
            <img src={star} />
            {" "}
            <img src={star} />
            {" "}
            Rated 5 Stars in Report Guru
          </p>
          <p className="reviews">
            <img src={star} />
            {" "}
            <img src={star} />
            {" "}
            <img src={star} />
            {" "}
            <img src={star} />
            {" "}
            <img src={star} />
            {" "}
            Rated 5 Stars in BestTech
          </p>
        </div>
    </div>
  );
}