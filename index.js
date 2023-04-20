// Calculteur de coteR collegial selon le dernier calcul en vigeur depuis 2017

function calculerCoteR(note, moyenneGroupe, ecartType) {
    coteZ = (note - moyenneGroupe) / ecartType
    coteR = (coteZ + 5) * 5 
    return coteR
}

console.log(calculerCoteR(85,75,17))


