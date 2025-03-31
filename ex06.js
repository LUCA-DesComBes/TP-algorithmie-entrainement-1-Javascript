function compterConsones(text) {
    let count = 0;
    let voyelles = ["a", "e", "i", "o", "u", "y", " "];
    for (let i = 0; i < text.length; i++) {
       if(voyelles.indexOf(text[i]) === -1) {
        count++;
       }
    }
    return count
}

console.log(compterConsones('Bonjour')); // Affiche : 4
console.log(compterConsones('JavaScript')); // Affiche : 7
console.log(compterConsones('Hello World')); // Affiche : 7