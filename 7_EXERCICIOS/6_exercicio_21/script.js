function tipoVariavel(variavel) {
    if (variavel === null) {
        return "Null";
    } else if (variavel === undefined) {
        return "Undefined";
    } else if (variavel === true || variavel === false) {
        return "Boolean";
    } else if (typeof variavel === "number") {
        return "Number";
    } else if (typeof variavel === "string") {
        return "String";
    } else if (typeof variavel === "function") {
        return "Function";
    }
}

let lista = [1, null, "Texto", undefined, true, false, function() {}, NaN];

lista.forEach(elemento => {
    console.log(`${elemento} é do tipo ${tipoVariavel(elemento)}`);
});