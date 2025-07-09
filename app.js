function afficherMessage(texte, succes = true) {
      const messageDiv = document.getElementById('message');
      messageDiv.textContent = texte;
      messageDiv.style.color = succes ? '#27ae60' : '#e74c3c';
    }
    function genererMotDePasse() {
      const lettresMinuscules = 'abcdefghijklmnopqrstuvwxyz';
      const lettresMajuscules = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const chiffres = '0123456789';
      const speciaux = '!@#$%^&*()-_=+[]{};:,.<>?/|';
      const nbCaracteres = 12; // taille par défaut
      const caracteres = lettresMinuscules + lettresMajuscules + chiffres + speciaux;

      let motDePasse = '';
      for (let i = 0; i < nbCaracteres; i++) {
        const index = Math.floor(Math.random() * caracteres.length);
        motDePasse += caracteres.charAt(index);
      }

      document.getElementById('motDePasse').value = motDePasse;
      localStorage.setItem('dernierMotDePasse', motDePasse);
      afficherMessage('Mot de passe généré avec succès !', true);
    }
    window.onload = function() {
  const dernier = localStorage.getItem("dernierMotDePasse");
  if (dernier) {
    document.getElementById("motDePasse").value = dernier;
  }
};

// Fonction pour copier le mot de passe dans le presse-papiers
function copierMotDePasse() {
  const motDePasse = document.getElementById("motDePasse").value;
  if (!motDePasse) {
    afficherMessage("Aucun mot de passe à copier.", false);
    return;
  }
  navigator.clipboard.writeText(motDePasse)
    .then(() => {
      afficherMessage("Mot de passe copié dans le presse-papiers !", true);
    })
    .catch(err => {
      console.error("Erreur lors de la copie :", err);
      afficherMessage("Impossible de copier le mot de passe.", false);
    });
}

// Fonction pour rafraîchir la page
function rafraichirPage() {
  // Réinitialise le champ mot de passe
  document.getElementById('motDePasse').value = '';
  // Réinitialise les options
  document.getElementById('nbCaracteres').value = 8;
  document.getElementById('useMinuscules').checked = true;
  document.getElementById('useMajuscules').checked = true;
  document.getElementById('useNombres').checked = true;
  document.getElementById('useSpeciaux').checked = false;
  // Supprime le dernier mot de passe du localStorage
  localStorage.removeItem('dernierMotDePasse');
  afficherMessage('Champs réinitialisés.', true);
}




