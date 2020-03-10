import React from "react";
import "./App.css";
import "./img.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Mesonero from "./components/Mesonero.jsx";
import Cocina from "./components/Cocina.jsx";

function App() {
  return (
    <Router>
      <button>
        <Link to="/home">Home</Link>
      </button>
      <button>
        <Link to="/mesonero">Mesonero</Link>
      </button>
      <button>
        <Link to="/cocina">Cocina</Link>
      </button>
      <Route exact path="/app" component={App} />
      <Route path="/cocina" component={Cocina} />
      <Route path="/mesonero" component={Mesonero} />
    </Router>
  );
}
export default App;
