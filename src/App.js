import "./App.css";
import Testimonio from "./componentes/Testimonio.jsx";
import TopText from "./componentes/top-text";
import topbg from "./imagenes/bg-pattern-top-desktop.svg";
import bottombg from "./imagenes/bg-pattern-bottom-desktop.svg";


export default function App() {
  return (
    <div className="App">
      <img src={topbg} />
      <TopText />
      <div className="testimonios">
          <Testimonio
            nombre="Colton Smith"
            estatus="Verified Buyer"
            imagen="colton"
            testimonio="We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"
          />
          <Testimonio
            nombre="Irene Roberts"
            estatus="Verified Buyer"
            imagen="irene"
            testimonio="Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."
          />
          <Testimonio
            nombre="Anne Wallace"
            estatus="Verified Buyer"
            imagen="anne"
            testimonio="Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"
          />
        </div>
      <img src={bottombg}/>
    </div>
  );
}