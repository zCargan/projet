"use strict";

let chaineTxt = "";
let tableauContenu = [];
let tableau_full_contenu = [];
let arrayDureeFous = []
let dureeTot = []
let ensembleDesDurees = []

//************************************************************************************//
function makeTr(array) {

    /**
     * créer dynamiquement un tableau HTML en JS afin de pouvoir l'intégrer à la table 
     * @param {array} tableau contenant l'ensemble des données sur le contenu à regarder
     * @return {string} la structure du tableau HTML créer depuis le tableau contenant l'ensembles des infos sur le contenu à regarder
     */

    let chaineTxt = "";
    for(let i = 0; i < array.length -1; i ++) {
        let fous = document.getElementById("fous").value;
        if(fous =="Série") {
            chaineTxt += "<td class=\"Série\" name=\"" + array[0] + "\" id=\"" + array[0] + "\">";
        } else {
            chaineTxt += "<td class=\"Film\" name=\"" + array[0] + "\">";
        }
        chaineTxt += array[i];
        chaineTxt += "</td>";
    }
    chaineTxt += "</tr>";
    return chaineTxt;
}





//************************************************************************************// 
function test() {
    //création du tableau contenant toute les infos sur le contenu à regarder*

    let arrayArray = new Object();
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
    arrayArray["Nom"] = nomContenu;
    arrayArray["FilmOuSérie"] = fous;
    arrayArray["Plateforme"] = plateform;
    arrayArray["NbrEpisode"] = nombreEpisodes;
    arrayArray["Durée"] = duree;
    arrayArray["Origine"] = origine;
    arrayArray["Commentaire"] = comm;
    tableau_full_contenu.push(arrayArray);
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





//************************************************************************************//
function filtre() {
    //filtre les séries et les films afin de n'afficher que le type de contenu voulu
    let tousSerie = document.getElementsByClassName("Série");
    let tousFilm = document.getElementsByClassName("Film");
    let filtre = document.getElementById("filtre").value;
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



//************************************************************************************//
function tousAfficher() {
    //Affiche tout les types de contenus dans le tableau HTML
    let tousSerie = document.getElementsByClassName("Série");
    let tousFilm = document.getElementsByClassName("Film");
    for( let serie of tousSerie) {
        serie.style.display = "";
    }
    for(let film of tousFilm) {
        film.style.display = "";
    }
}





//************************************************************************************//
function total(a, b){
    //Fonction qui effectue la somme de deux nombres.
    return a + b;
    
}





//************************************************************************************//
function duree(){

    /**
     * fonction qui calcule la somme total des contenus à visionner.
     * @param {string} nécessite le type de contenu, à savoir "Film" ou "Série"
     * @alert {string} créee un alert indiquant la durée total de contenu à regarder en minutes, ainsi que la durée totale de contenu de Film à regarder en minutes ainsi que la durée totale à regarde en minutes de Séries.
     */


    let dureeSerie = 0
    let dureeFilm = 0
    for( let i in arrayDureeFous ) {
        if(arrayDureeFous[i][1] == "Série") {
            let dureeDunEpisode = Number(arrayDureeFous[i][0]);
            let dureeDeLaSerie = dureeDunEpisode * Number(arrayDureeFous[i][2]);
            dureeSerie += dureeDeLaSerie
        }
        if(arrayDureeFous[i][1] == "Film") {
            let dureeDunFilm= Number(arrayDureeFous[i][0]);
            let dureeDesFilms = dureeDunFilm * Number(arrayDureeFous[i][2]);
            dureeFilm += dureeDesFilms
        }
    }
    alert("Durée total de visionnage : " + total(dureeFilm, dureeSerie) + " minutes, durée total de visionnages séries : " + dureeSerie + " minutes, durée total de visionnage film : " + dureeFilm + " minutes.");
}   





//************************************************************************************//
function houloulou() {
    //Fonction qui trouve le contenu le plus long à regarder et l'affiche via une alert
    let max = -Infinity;
    let index_supp = "";
    for(let i = 0; i < dureeTot.length; i++) {
        if(dureeTot[i][0] > max){
            index_supp = i;
            max = dureeTot[i][0];
        }
    }
    alert("Le contenu le plus long a regarder est \"" + dureeTot[index_supp][1] + "\" avec une durée totale de " + dureeTot[index_supp][0] + " minutes!");
}




//************************************************************************************//
function epPlusLong() {
    //fonction qui affiche la durée de l'épisode le plus long de la liste de visionnage
    let ensembleTriée = ensembleDesDurees.sort(function(a, b) {return a - b;});
    alert("L'épisode de plus long de la séléction dure : " + ensembleTriée[ensembleTriée.length-1] + " minutes.");
}




//************************************************************************************//
function bienvenue() {
    // Affiche un peu de doc sur la page HTML à son ouverture
    alert("Bienvenue dans ma witchlist de films et de série! Enjoy!");
}
