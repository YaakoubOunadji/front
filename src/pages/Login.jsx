import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

const submit = () =>{
  
}
   const handleLogin = () => {
    if (!username || !password) {
      alert("Veuillez remplir tous les champs !");
    } else {
      alert(`Nom d'utilisateur : ${username}\nMot de passe : ${password}`);
      // Tu pourras plus tard connecter ça à l'API backend
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
      <h2>Connexion</h2>

      <div style={{ marginBottom: "1rem" }}>
        <label>Nom d'utilisateur</label>
        <InputText
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Entrer votre nom"
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Mot de passe</label>
        <Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          feedback={false}
          toggleMask
          placeholder="Entrer votre mot de passe"
        />
      </div>
      <button>
        Login
      </button>
    </div>
  );
}

export default Login;
