let promiseErro = Promise.resolve(new Error('É, carinha, tem algo errado :('));

console.log('Alguma coisa aqui no meio');

promiseErro.then((value) => {console.log(value)})
.catch(reason => {console.log(reason)});