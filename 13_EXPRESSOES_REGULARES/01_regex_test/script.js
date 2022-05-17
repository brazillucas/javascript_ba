const reg1 = new RegExp('bola');

console.log(reg1.test('tem bola aqui?'));
console.log(reg1.test('Não tem!'));

const reg2 = /bola/;

let texto = "Você viu a bola que estávamos brincando?";

console.log(reg2.test('Tem bola aqui?'));
console.log(reg2.test('Não tem!'));
console.log(reg2.test(texto));

console.log(/carteira/.test('Não trouxe a minha carteira'));
console.log(/carteira/.test('akdjakscarteira53242'));

