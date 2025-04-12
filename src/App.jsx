/*

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages
import Home from './pages/Home';
import Courses from './pages/Courses';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddContent from './components/AddContent'; // Importation du composant AddContent

function App() {
  return (
    <Router>
      <div>
       
        <nav style={{ padding: "1rem" }}>
          <Link to="/" style={{ margin: "0 1rem" }}>Accueil</Link>
          <Link to="/cours" style={{ margin: "0 1rem" }}>Cours</Link>
          <Link to="/connexion" style={{ margin: "0 1rem" }}>Connexion</Link>
          <Link to="/inscription" style={{ margin: "0 1rem" }}>Inscription</Link>
          <Link to="/ajouter-contenu" style={{ margin: "0 1rem" }}>Ajouter du contenu</Link> 
        </nav>

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cours" element={<Courses />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/inscription" element={<Signup />} />
          <Route path="/ajouter-contenu" element={<AddContent />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;*/
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Signup from "./pages/Signup"; // si tu l’as déjà
import Login from "./pages/login";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;



