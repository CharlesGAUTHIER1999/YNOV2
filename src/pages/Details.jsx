import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../component/navbar'; // Correction : composant NavBar avec majuscule
import Footer from '../component/footer/Footer';
import MapComponent from '../component/map/MapComponent';
import './Details.css'; // Assurez-vous que ce fichier CSS existe et contient les styles appropriés

const Details = () => {
  const location = useLocation();
  const { installation } = location.state || {};

  // Générer une URL de recherche Google pour l'installation
  const googleSearchUrl = `https://www.google.com/search?q=${installation?.inst_nom} ${installation?.inst_com_nom}`;

  return (
    <div>
      {/* Affichage de la NavBar en haut de la page */}
      <NavBar />

      {/* Contenu principal de la page */}
      <div className="details-container">
        <h1>Détails de l'installation</h1>

        {installation ? (
          <div>
            <p><strong>Nom:</strong> {installation.inst_nom}</p>
            <p><strong>Adresse:</strong> {installation.inst_adresse}</p>
            <p><strong>Code postal:</strong> {installation.inst_cp}</p>
            <p><strong>Ville:</strong> {installation.inst_com_nom}</p>
            <p><strong>Numéro:</strong> {installation.inst_numero}</p>

            {/* Lien de redirection vers la recherche Google de l'installation */}
            <a 
              href={googleSearchUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="search-link" // class pour le style du lien
            >
              Rechercher sur Google
            </a>
          </div>
        ) : (
          <p>Aucun détail trouvé pour cette installation.</p>
        )}
      </div>
      <MapComponent />
      <Footer />
    </div>
  );
};

export default Details;
