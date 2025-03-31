function motDePasseValide(mdp) {
    if (mdp.length >= 5) {
        return true 
    } else {
        return false
    }
}

console.log(motDePasseValide('12345678')); // Affiche : true
console.log(motDePasseValide('abcd')); // Affiche : false
console.log(motDePasseValide('MotDePasseLong')); // Affiche : true