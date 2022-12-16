
let nombreUsuario = prompt("Ingresa tu nombre");
alert('Bienvenido/a, ' + nombreUsuario);

let teGustaViajar = prompt('¿Te Gusta Viajar?');
let option1 = prompt('Elegí una opción: \n1- Si. \n2 - No.');

while (option1 != 'No' || option1 != 'no') {
    break;
};

let option2 = prompt('¿Que experiencias te gustan? \n1- Cultural. \n2 - Social. \n3 - Aventura. \n4 - Ecologica');
switch (option2) {
    case '1':
        alert('La experiencia para ti es El Bus de las Flores').
            break;
    case '2':
        alert('La experiencia para ti es Rutas de Siembra');
        break;

    case '3':
        alert('La experiencia para ti es Ruta G Santa Elena');
        break;

    case '4':
        alert('La experiencia para ti es Rutas de Siembra');
        break;
}