// src/components/AddContent.jsx
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";

function AddContent() {
  const [module, setModule] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    setFile(e.files[0]);
  };

  const handleSubmit = () => {
    if (!module || !title || !file) {
      alert("Veuillez remplir tous les champs et ajouter un fichier !");
    } else {
      // Envoyer les données au backend pour enregistrement
      alert("Contenu ajouté avec succès !");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h2>Ajouter un contenu</h2>

      <div style={{ marginBottom: "1rem" }}>
        <label>Module</label>
        <InputText
          value={module}
          onChange={(e) => setModule(e.target.value)}
          placeholder="Nom du module"
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Titre du contenu</label>
        <InputText
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre du contenu"
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Description</label>
        <InputText
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description du contenu"
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Ajouter un fichier</label>
        <FileUpload
          name="file"
          accept="application/pdf,video/*"
          customUpload
          uploadHandler={handleFileUpload}
          mode="basic"
        />
      </div>

      <Button label="Ajouter le contenu" onClick={handleSubmit} />
    </div>
  );
}

export default AddContent;
