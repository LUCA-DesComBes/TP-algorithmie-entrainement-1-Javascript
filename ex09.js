function afficherInfosPersonne(obj) {
    return `${obj.nom} a ${obj.age} et habite à ${obj.ville}.`
}

console.log(afficherInfosPersonne({ nom: "Alice", age: 30, ville: "Paris" })); // 'Alice a 30 ans et habite à Paris.'