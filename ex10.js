function listerPersonnes(tab) {
    let res = ""
    for (let i = 0; i < tab.length; i++) {
        res += `${tab[i].name} : ${tab[i].age} ans`
        if (i < tab.length - 1) {
            res += ", "
        } else {
            res += "."
        }
    }
    return res
}

const personnes = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
  ];
  
  console.log(listerPersonnes(personnes)); // 'Alice : 30 ans, Bob : 25 ans, Charlie : 35 ans.'