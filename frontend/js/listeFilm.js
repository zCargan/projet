"use strict";

let chaineTxt = "";
let tableauContenu = [];
let arrayArray = [];

function makeTr(array) {
    let chaineTxt = "";
    for(let i = 0; i < array.length -1; i ++) {
        let fous = document.getElementById("fous").value;
        if(fous =="Série") {
            chaineTxt += "<td class=\"Série\" name=\"" + array[0] + "\" id=\"" + array[0] + "\">";
//"<td class=\"serie\"\"" + array[0] + "\">";
        } else {
            chaineTxt += "<td class=\"Film\" name=\"" + array[0] + "\">";
        }
        chaineTxt += array[i];
        chaineTxt += "</td>";
    }
//    chaineTxt += "<td id=\"supprimer\">"
//    chaineTxt += "<button onclick=\"supprimer(" +  array[0] + ")>Supprimer</button>";
//    chaineTxt += "</td>"
    chaineTxt += "</tr>";
//    let tableau = enteteTableau + chaineTxt;
//    console.log(tableau);
//    return tableau;
    return chaineTxt;
}



let arrayDureeFous = []
let dureeTot = []
let ensembleDesDurees = []



function test() {


//************************************************************************************// 
    //création du tableau contenant toute les infos sur le contenu à regarder
    let arrayInfo = [];
    let nomContenu = document.getElementById("nomDuFilm").value;
    let plateform = document.getElementById("plateformDeVisionnage").value;
    let nombreEpisodes = document.getElementById("nbrEpisodes").value;
    let dureebrut = Number(document.getElementById("duree").value);
    let duree = dureebrut.toFixed(2);
    let origine = document.getElementById("Origine").value;
    let comm = document.getElementById("commentaire").value;
    let fous = document.getElementById("fous").value;
    arrayInfo.push(nomContenu);
    arrayInfo.push(fous);
    arrayInfo.push(plateform);
    arrayInfo.push(nombreEpisodes);
    arrayInfo.push(duree)
    arrayInfo.push(origine);
    arrayInfo.push(comm);
    arrayInfo.push(fous);
    arrayArray.push(arrayInfo);
    ensembleDesDurees.push(duree);



//************************************************************************************//
    // utile pour calculer la durée de visionnage nécessaire restant. Infos utilisés dans la fonction duree().
    let dureeEtFous = [] 
    dureeEtFous.push(duree);
    dureeEtFous.push(fous);
    dureeEtFous.push(nombreEpisodes);
    arrayDureeFous.push(dureeEtFous);



//************************************************************************************//
    // nécessaire pour déterminer quel contenu demande le plus de temps pour avoir tout visualiser.
    let dureeEtNom = []
    dureeEtNom.push(Number(nombreEpisodes) * Number(duree));
    dureeEtNom.push(nomContenu);
    dureeTot.push(dureeEtNom);



//************************************************************************************//
    //crée la construction dynamique du tableau contenant les infos sur les contenus.
    let info = makeTr(arrayInfo);
    let enteteTableau = "<tr><th><u>Nom du contenu  </u></th>   <th><u>Film ou série </u></th><th><u>Plateforme de visionnage  </u></th> <th><u>Nombre de films  </u></th> <th><u>Durée de l'épisode</th> <th><u>Origine de la production  </u></th><th><u>Commentaires</th></tr>"
    enteteTableau += "</table></fieldset>";
    tableauContenu.push(info);
    let total = enteteTableau + tableauContenu;
    document.getElementById("tableContenu").innerHTML = total;
}





function filtre() {
    let tousSerie = document.getElementsByClassName("Série");
    let tousFilm = document.getElementsByClassName("Film");
    let filtre = document.getElementById("filtre").value;
    //alert(filtre);
    if( filtre =="série") {
        for(let film of tousFilm) {
            film.style.display = "none";
        }
        for(let serie of tousSerie) {
            serie.style.display = "";
        }
    }
    else if ( filtre == "film") {
        for( let serie of tousSerie) {
            serie.style.display = "none";
        }
        for(let film of tousFilm) {
            film.style.display = "";
        }
    }
}


function tousAfficher() {
    let tousSerie = document.getElementsByClassName("Série");
    let tousFilm = document.getElementsByClassName("Film");
    for( let serie of tousSerie) {
        serie.style.display = "";
    }
    for(let film of tousFilm) {
        film.style.display = "";
    }
}

/*function tousAfficher() {
    let contenuASupprimer = prompt("Introduisez le nom du contenu que vous souhaitez supprimer");
    for(let i = 0; i < arrayArray; i ++) {
        for(let j = 0; j < arrayArray[i].length; j ++) {
            if(arrayArray[i][0] = contenuASupprimer) {
                arrayArray = [];
            }
        }
    }
    console.log(arrayArray);
}
*/
/*function supprimer(name) {
//    let ligneASupprimer = document.getElementsByName(name);
    let contenuASupprimer = prompt("Introduisez le nom du contenu que vous souhaitez supprimer");
    let ligneASupprimer = document.getElementsByName(contenuASupprimer);
    console.log(ligneASupprimer);
    for(let i of ligneASupprimer) {
        i.style.display ="none";
    }
    //console.log(arrayArray);
    let contenuASupprimer = prompt("Introduisez le nom du contenu que vous souhaitez supprimer");
    for(let i = 0; i < arrayArray.length; i++) {
        if(arrayArray[i][0] == contenuASupprimer) {
            array[i].style.display = "none";
        }
    }
}
*/


/*function makeTr(array) {
    let chaineTxt = "";
    for(let i = 0; i < array.length; i ++) { // parcours l'essemble des arrays de contenu
        for(let j = 0; i < array[i].length; j++) { // parcours les éléments de chaque contenu
            let fous = document.getElementById("fous").value; // détermmine si il sagit d'un contenu film ou série
            if(fous =="serie") {
                chaineTxt += "<td class=\"serie\" name=\"" + array[0] + "\" id=\"" + array[0] + "\">";
//"<td class=\"serie\"\"" + array[0] + "\">";
            } else {
                chaineTxt += "<td class=\"film\" name=\"" + array[0] + "\">";
            }
            chaineTxt += array[i][j]; // ajoute à chaineTxt chaque élément de chaque contenu à la chaine de caractère.
            chaineTxt += "</td>";
        }
    }
}
*/

function bienvenue(){
    alert("Bienvenue sur ma watchlist de film et de série! Enjoy!")
}


function total(a, b){
    return a + b;
    
}



function duree(){
    let dureeSerie = 0
    let dureeFilm = 0
    for( let i in arrayDureeFous ) {
        if(arrayDureeFous[i][1] == "Série") {
            let dureeDunEpisode = Number(arrayDureeFous[i][0]);
            let dureeDeLaSerie = dureeDunEpisode * Number(arrayDureeFous[i][2]);
            //dureeTot.push(dureeDeLaSerie);
            dureeSerie += dureeDeLaSerie
        }
        if(arrayDureeFous[i][1] == "Film") {
            let dureeDunFilm= Number(arrayDureeFous[i][0]);
            let dureeDesFilms = dureeDunFilm * Number(arrayDureeFous[i][2]);
            //dureeTot.push(dureeDesFilms);
            dureeFilm += dureeDesFilms

        }
    }
    alert("Durée total de visionnage : " + total(dureeFilm, dureeSerie) + " minutes, durée total de visionnages séries : " + dureeSerie + " minutes, durée total de visionnage film : " + dureeFilm + " minutes.");
}   



function houloulou() {
    let max = -Infinity;
    let index_supp = "";
    for(let i = 0; i < dureeTot.length; i++) {
        if(dureeTot[i][0] > max){
            index_supp = i;
        }
    }
    alert("Le contenu le plus long a regarder est \"" + dureeTot[index_supp][1] + "\" avec une durée totale de " + dureeTot[index_supp][0] + " minutes!");
}


function epPlusLong() {
    let ensembleDesDureesTriees = "" ;
    ensembleDesDureesTriees = ensembleDesDurees.sort();
    //alert("L'épisode dont la durée est la plus longue est de " + ensembleDesDureesTriees[ensembleDesDureesTriees.length-1] + " minutes!");
    alert(ensembleDesDureesTriees);
}
