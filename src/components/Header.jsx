import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/courses">Cours</Link></li>
          <li><Link to="/login">Connexion</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header