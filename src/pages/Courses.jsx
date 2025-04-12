import React from "react";

const courses = [
  { id: 1, title: "Cours 1 : Introduction à la programmation" },
  { id: 2, title: "Cours 2 : Développement Web avec React" },
  { id: 3, title: "Cours 3 : Bases de données et Django" },
  { id: 4, title: "Cours 4 : Création d'une plateforme d'e-learning" },
];

function Courses() {
  return (
    <div>
      <h2>Liste des Cours</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;

