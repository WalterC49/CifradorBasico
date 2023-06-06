const form = document.forms[0]; //capturo la 1ra form del documento
const salida = document.getElementById("salida");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //Evita que el form envie la info a algún server

  console.log(form.frase.value); //este seria el valor de la frase que enviamos con la form
  salida.innerHTML = cifrador(form.frase.value); //guardo en SALIDA el retorno de la función cifrador
});

const cifrador = (frase) => {
  let palabras = frase.toLowerCase().split(" "); //cambio a minúscula la frase y la transformo en un array

  let nuevaFrase = palabras.map((p) => {
    //llamo a un map() para cada palabra
    let letras = p.split(""); //separo cada palabra en arrays de letras

    let nuevaPalabra = letras.map((l) => {
      //cambio el valor de la letra a una nueva
      switch (l) {
        case "a":
          l = "u";
          break;
        case "á":
          l = "ú";
          break;
        case "b":
          l = "z";
          break;
        case "c":
          l = "y";
          break;
        case "d":
          l = "x";
          break;
        case "e":
          l = "o";
          break;
        case "é":
          l = "ó";
          break;
        case "f":
          l = "w";
          break;
        case "g":
          l = "v";
          break;
        case "h":
          l = "t";
          break;
        case "i":
          l = "i";
          break;
        case "í":
          l = "í";
          break;
        case "j":
          l = "s";
          break;
        case "k":
          l = "r";
          break;
        case "l":
          l = "q";
          break;
        case "m":
          l = "p";
          break;
        case "n":
          l = "ñ";
          break;
        case "ñ":
          l = "n";
          break;
        case "o":
          l = "e";
          break;
        case "ó":
          l = "é";
          break;
        case "p":
          l = "m";
          break;
        case "q":
          l = "l";
          break;
        case "r":
          l = "k";
          break;
        case "s":
          l = "j";
          break;
        case "t":
          l = "h";
          break;
        case "u":
          l = "a";
          break;
        case "ú":
          l = "á";
          break;
        case "v":
          l = "g";
          break;
        case "w":
          l = "f";
          break;
        case "x":
          l = "d";
          break;
        case "y":
          l = "c";
          break;
        case "z":
          l = "b";
          break;
        default:
          break;
      }
      return l; //retorno el nuevo valor
    });
    return nuevaPalabra.join("").toUpperCase(); //retorno la nueva palabra formada en mayúsculas
  });

  console.log(nuevaFrase);
  return nuevaFrase.join(" "); //retorno la nueva frase formada
};
