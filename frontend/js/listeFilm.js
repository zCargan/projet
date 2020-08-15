let chaineTxt = "";


function makeTr(array) {
    let chaineTxt = "";
    chaineTxt += "<tr>";
    for(let i = 0; i < array.length -1; i ++) {
        chaineTxt += "<td>";
        chaineTxt += array[i];
        chaineTxt += "</td>";
    }
    chaineTxt += "<td id=\"supprimer\">"
    chaineTxt += "<button onclick=\"supprimer(this)\">Supprimer</button>";
    chaineTxt += "</td>"
    chaineTxt += "</tr>";
    return chaineTxt;
}


function test() {
    //alert("pq");
    let arrayInfo = [];
    let nomFilm = document.getElementById("nomDuFilm").value;
    let plateform = document.getElementById("plateformDeVisionnage").value;
    let nombreEtoiles = document.getElementById("nbrEtoiles").value;
    let nombreEpisodes = document.getElementById("nbrEpisodes").value;
    let origine = document.getElementById("Origine").value;
    let comm = document.getElementById("commentaire").value;
    let fous = document.getElementById("fous").value;
    arrayInfo.push(nomFilm);
    arrayInfo.push(plateform);
    arrayInfo.push(nombreEtoiles);
    arrayInfo.push(nombreEpisodes);
    arrayInfo.push(origine);
    arrayInfo.push(comm);
    arrayInfo.push(fous);
    let info = makeTr(arrayInfo);
    if(fous == "serie") {
        document.getElementById("tableSerie").innerHTML += info;    
    } else {
        document.getElementById("tableFilm").innerHTML += info;

    }
}


function supprimer() {
    document.getElementById("supprimer").style.display ="none";
}


function supprimerCa() {
    
}