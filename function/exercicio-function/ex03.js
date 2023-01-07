function potencia(base, expoente) {
    let result = base;
    for (let cont = 0; cont < expoente; cont++) {
        result = base*  base;
    }
    return result
}

console.log(potencia(2, 3))

