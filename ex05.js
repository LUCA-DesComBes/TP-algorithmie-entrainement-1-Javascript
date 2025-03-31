function comptage(num) {
    let count = 0;
    for(let i = 0; i < num; i++) {
        count++;
        console.log(i)
    } 
    return count
}

console.log(comptage(10));/* Affiche dans la console:
 0
 1
 2
 3
 4
 5
 6
 7
 8
 9
 10
*/
console.log(comptage(2)); /* Affiche dans la console:
 0
 1
 2 
 */