// Snack 2

const nomiSquadre = ["Milan", "Inter", "Juventus", "Como", "Napoli", //nomi di squadre
        "Roma", "Atalanta", "Bologna", "Lazio", "Sassuolo"];

const teams = [];
const arrayNomiEFalli = [];

function creaObjects(squadre) { //funzione che prende l'array dei nomi delle squadre


    for (let i = 0; i < squadre.length; i++) {

        const puntiFatti = Math.ceil(Math.random() * 30); //scelta casuale dei punti
        const falliSubiti = Math.ceil(Math.random() * 20); //scelta casuale falli 

        const team = {
            nome: nomiSquadre[i],
            punti: puntiFatti,
            falli: falliSubiti
        }

        teams.push(team);
    }

    console.log(teams);

}

creaObjects(nomiSquadre);


for (let i = 0; i < teams.length; i++) {
    arrayNomiEFalli.push(`Il team ${teams[i].nome} ha subito ${teams[i].falli} falli fino ad ora`);
    console.log(arrayNomiEFalli[i]);
    
}



