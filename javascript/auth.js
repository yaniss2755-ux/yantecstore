// auth.js - connexion et inscription

function connecter(email, motDePasse) {
    if (email == "admin@yantechstore.dz" && motDePasse == "Admin123!") {
        localStorage.setItem("userConnecte", "Admin");
        return true;
    }
    if (email == "karim@gmail.com" && motDePasse == "Karim456@") {
        localStorage.setItem("userConnecte", "Karim");
        return true;
    }
    return false;
}

function inscrire(prenom, email, motDePasse) {
    localStorage.setItem("userConnecte", prenom);
    return true;
}

function deconnecter() {
    localStorage.removeItem("userConnecte");
    window.location.href = "../index.html";
}

function majMenu() {
    var prenom = localStorage.getItem("userConnecte");
    var spanUser = document.getElementById("nomUser");
    var btnConnexion = document.getElementById("lienConnexion");
    var btnDeconnexion = document.getElementById("lienDeconnexion");
    if (prenom) {
        if (spanUser) spanUser.textContent = "Bonjour " + prenom;
        if (btnConnexion) btnConnexion.style.display = "none";
        if (btnDeconnexion) btnDeconnexion.style.display = "inline";
    } else {
        if (spanUser) spanUser.textContent = "";
        if (btnConnexion) btnConnexion.style.display = "inline";
        if (btnDeconnexion) btnDeconnexion.style.display = "none";
    }
}