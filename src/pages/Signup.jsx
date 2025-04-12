import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!username || !email || !password) {
      alert("Veuillez remplir tous les champs !");
    } else {
      alert(`Nom d'utilisateur : ${username}\nEmail : ${email}`);
      // Tu pourras plus tard connecter ça à l'API backend pour créer un utilisateur
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
      <h2>Inscription</h2>

      <div style={{ marginBottom: "1rem" }}>
        <label>Nom d'utilisateur</label>
        <InputText
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Entrer votre nom"
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Email </label>
        <InputText
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Entrer votre email"
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

      <Button
        label="S'inscrire"
        icon="pi pi-user-plus"
        className="p-button-success"
        onClick={handleSignup}
      />
    </div>
  );
}

export default Signup;
