function dessiner_etoiles(){
    let nb_lignes = parseInt(document.getElementById("in1").value);

    let str = "";
    let x = "*";

    for (let i=1; i <= nb_lignes; i++){
        str += x + '\n';
        x += "*";

    }
    document.getElementById("d1").innerHTML = str;
}
   