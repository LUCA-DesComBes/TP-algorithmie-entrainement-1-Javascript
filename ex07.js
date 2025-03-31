function filtrerValeursFalsy(tab) {
    return tab.filter(Boolean)
}

console.log(filtrerValeursFalsy([0, "hello", "", null, undefined, 42, NaN])); // Résultat attendu : ["hello", 42]