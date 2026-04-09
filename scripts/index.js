// SNACK 1
const arrayBici = [];
const bycName = document.querySelector('.nome-bici');
const bycWeight = document.querySelector('.peso-bici')

function getWeight() { //funzione che genera un peso random (min 7, max 15)
    const maxKg = 15;
    const minKg = 7;
    return (Math.random() * (maxKg - minKg + 1) + minKg).toFixed(1);
}

function creaObjects(quantity) {
    const brands = ["Specialized", "Cervélo", "Pinarello", "Colnago", "BMC", //brand delle bici
        "Factor", "Cannondale", "Trek", "Scott", "Wilier Triestina"];


    for (let i = 0; i < quantity; i++) {

        let brandIndex = Math.floor(Math.random() * brands.length); //scelta casuale dell'indice dei brand
        const weight = getWeight();

        const bici = {
            nome: brands[brandIndex],
            peso: weight
        }

        arrayBici.push(bici);
    }

    console.log(arrayBici);

}

function getLighter() { //per trovare il minor peso
    let lighterWeight = Number(arrayBici[0].peso);
    let lighterBycicle = arrayBici[0].nome;
    const lighter = [];

    for (let i = 0; i < arrayBici.length; i++) {
        
        const currentWeight = Number(arrayBici[i].peso);
        const currentBycicle = arrayBici[i].nome;

        if (lighterWeight > currentWeight){
            lighterWeight = currentWeight;
            lighterBycicle = currentBycicle;
        }
        
    }

    lighter.push(lighterBycicle, (lighterWeight).toString())

    return lighter;
}

creaObjects(20); //chiamo la funzione per creare gli oggetti

const lighter = getLighter(); //trovo il minor peso

bycName.innerHTML = `Nome: ${lighter[0]}`
bycWeight.innerHTML = `Peso: ${lighter[1]} kg`

console.log(lighter);




