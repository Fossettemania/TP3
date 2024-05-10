function compter_mots() {
//Récupérérer le texte
let texte = document.getElementById("text").value;
//déclaration du compteur de mot
let cnt = 1;
// BouCLER sur le etxte pour compter les mots
for (let i=0; i < texte.length; i++) {
    if (texte[i] == " "){
        cnt++;
    }
}
// Afficher le résultat dans la div d'id "res"
document.getElementById("res").innerHTML = "Il y a " + cnt + "mots.";
}