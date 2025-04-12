/*import React from "react";

function Home() {
  return (
    <div>
      <h2>Bienvenue sur la plateforme d'apprentissage</h2>
      <p>Voici un aperçu des cours disponibles.</p>
    </div>
  );
}

export default Home;*/
import React from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Barre de navigation */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        borderBottom: "1px solid #ccc",
      }}>
        <h2 style={{ margin: 0 }}>EduInfo</h2>
        <div>
          <Button label="Connexion" onClick={() => navigate("/connexion")} className="p-button-text" style={{ marginRight: "1rem" }} />
          <Button label="Inscription" onClick={() => navigate("/inscription")} className="p-button-outlined" />
        </div>
      </header>

      {/* Titre principal */}
      <main style={{ textAlign: "center", padding: "3rem 2rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Plateforme d'Apprentissage pour Étudiants en Informatique
        </h1>
        <p style={{ color: "#555", fontSize: "1.2rem", marginBottom: "3rem" }}>
          Accédez à tous vos cours, ressources et contenus pédagogiques en un seul endroit.
          De L1 à L3, nous vous accompagnons dans votre parcours.
        </p>

        {/* Niveaux */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap"
        }}>
          {["L1", "L2", "L3"].map((level) => (
            <div key={level} style={{
              border: "1px solid #ccc",
              borderRadius: "1rem",
              padding: "2rem",
              width: "250px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)"
            }}>
              <h3 style={{ marginBottom: "1rem" }}>Niveau {level}</h3>
              <ul style={{ textAlign: "left" }}>
                <li>Module 1</li>
                <li>Module 2</li>
                <li>Module 3</li>
              </ul>
              <Button label="Voir les cours" className="p-button-sm p-button-secondary" style={{ marginTop: "1rem" }} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;

