function signeNombre(number) {
    if (number > 0) {
        return "Positif"
    } else if (number === 0) {
        return "Zéro"
    } else {
        return "Négatif"
    }
}


console.log(signeNombre(5)); // Positif
console.log(signeNombre(-3));// Négatif
console.log(signeNombre(0)); // Zéro