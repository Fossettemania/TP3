const valeur_max = 50;
function tableau_en_table(array) {
    let str = "<table.id='t1'><tr>";
    
    for (let i=0; i < array.length; i++) {
        str += "<td>" + array[i] + "</td>"; 
    }
    str += "</tr></table>";
    document.getElementById("tab-div").innerHTML = str;
}
function init_tableau(taille_tableau) {
    let tableau = [];
    for (let i = 0; i < taille_tableau; i++) {
        let valeur_alea = Math.ceil(Math.random() * (valeur_max));
        tableau.push(valeur_alea);
    }
    return tableau;
}
function table_en_tableau() {
    //Récupérer la table
    let table = document.getElementByTagName("t1");
    // initialiser le tableau avec le résultat
    let resultat = [];
    // Récupérer les td de la table
    let liste_td = document.getElementsByTagName("td");
    for (let i= 0; i < liste_td.length; i++) {
    //Je récupère le contenu de td
    let contenu = parseInt(liste_td[i].innerHTML);
    // Je l'ajoute à mon tableay résultat
    resultat.push(contenu);
    }
    console.log(resultat);
    //Retourne le tabaleau
    return resultat;
}