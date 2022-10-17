let a = document.querySelector('footer a');

console.log(a.getAttribute('href'));

let link = 'https://github.com/brazillucas';

a.setAttribute('href', link);

a.setAttribute('target', '_blank');

console.log(a.getAttribute('href'));
