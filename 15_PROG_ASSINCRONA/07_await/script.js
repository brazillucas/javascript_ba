function somarComDelay(a, b) {
    return new Promise(resolve => {
        setTimeout(function(){
            resolve(a + b);
        }, 4000);
    })
}

async function resolverSoma(a, b, c, d) {
    let x = somarComDelay(a, b);
    let y = somarComDelay(c, d);

    return await x + await y;
}

resolverSoma(1, 2, 3, 4).then(value => console.log(value));