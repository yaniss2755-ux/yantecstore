// panier.js - gestion du panier

function ajouterAuPanier(id) {
    var panier = localStorage.getItem("panier");
    if (panier) { panier = JSON.parse(panier); } else { panier = []; }

    var produit = null;
    for (var i = 0; i < listeProduits.length; i++) {
        if (listeProduits[i].id == id) { produit = listeProduits[i]; }
    }
    if (produit == null) return;

    var trouve = false;
    for (var j = 0; j < panier.length; j++) {
        if (panier[j].id == id) {
            panier[j].quantite = panier[j].quantite + 1;
            trouve = true;
        }
    }
    if (trouve == false) {
        panier.push({ id: produit.id, nom: produit.nom, prix: produit.prix, image: produit.image, quantite: 1 });
    }
    localStorage.setItem("panier", JSON.stringify(panier));
    alert("Produit ajouté au panier !");
    majCompteurPanier();
}

function supprimerDuPanier(id) {
    var panier = JSON.parse(localStorage.getItem("panier")) || [];
    var nouveau = [];
    for (var i = 0; i < panier.length; i++) {
        if (panier[i].id != id) { nouveau.push(panier[i]); }
    }
    localStorage.setItem("panier", JSON.stringify(nouveau));
    afficherPanier();
    majCompteurPanier();
}

function getTotal() {
    var panier = JSON.parse(localStorage.getItem("panier")) || [];
    var total = 0;
    for (var i = 0; i < panier.length; i++) {
        total = total + (panier[i].prix * panier[i].quantite);
    }
    return total;
}

function majCompteurPanier() {
    var panier = JSON.parse(localStorage.getItem("panier")) || [];
    var nb = panier.length;
    var compteur = document.getElementById("compteurPanier");
    if (compteur) {
        if (nb > 0) { compteur.textContent = nb; compteur.style.display = "inline-block"; }
        else { compteur.style.display = "none"; }
    }
}