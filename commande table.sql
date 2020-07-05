create table DJ (
    idArtiste integer default autoincrement,
    idMusique integer default autoincrement,
    idTitre integer default autoincrement, 
    idAnnee integer default autoincrement,
    idLabel integer default autoincrement,
    constraint pk__DJ primary key(idArtiste, idMusique, idTitre, idAnnee, idLabel),
    constraint fk__DJ__artiste foreign key (idArtiste) reference artiste(idArtiste),
    constraint fk__DJ__musique foreign key (idMusique) reference musique(idMusique),
    constraint fk__DJ__titre foreign key (idTitre) reference titre(idTitre),
    constraint fk__DJ__annee foreign key (idAnnee) reference annee(idAnnee),
    constraint fk__DJ__label foreign key (idLabel) reference label(idLabel)
)

drop table artiste

create table artiste (
    idArtiste integer default autoincrement,
    nomDeScène char(55),
    nomArtiste char(55),
    prenomArtiste char(55),
    constraint pk__artiste primary key(idArtiste)
)

create table musique (
    idMusique integer default autoincrement,
    styleMusique char(55),
    constraint pk__musique primary key(idMusique)
)

drop table titre

create table titre (
    idTitre integer default autoincrement,
    collab char(55),    
    titreMusique char(55),
    constraint pk__musique primary key(idTitre)
)

create table annee (
    idAnnee integer default autoincrement,
    anneeProd char(55),
    constraint pk__annee primary key(idAnnee)
)

create table label (
    idLabel integer default autoincrement,
    label char(55),
    constraint pk__label primary key(idLabel)
)