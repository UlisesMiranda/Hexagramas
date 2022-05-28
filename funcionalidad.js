const $primerNumero = document.getElementById("iptPrimerNumero");
const $segundoNumero = document.getElementById("iptSegundoNumero");
const $tercerNumero = document.getElementById("iptTercerNumero");

const $agregarLinea = document.getElementById("btnAgregarLinea");
const $borrarLinea = document.getElementById("btnBorrarLinea");
const $borrarHexagrama = document.getElementById("btnBorrarHexagrama");
const $agregarLineaAleatoria = document.getElementById("btnNumerosAleatorios");

const $resultDiag1 = document.getElementById("resultDiag1");

const $primerHexagrama = document.getElementById("divDiagrama1");
const $segundoHexagrama = document.getElementById("divDiagrama2");
const $tercerHexagrama = document.getElementById("divDiagrama3");

const $tituloDescripcion = document.getElementById("tituloDescripcion");
const $descripcion = document.getElementById("descripcion");

let countLimiteLineas = 0;
let arregloSumaNumeros = [];

let coordenadasLineas = [
  {
    x: 25,
    y: 130,
  },
  {
    x: 25,
    y: 110,
  },
  {
    x: 25,
    y: 90,
  },
  {
    x: 25,
    y: 70,
  },
  {
    x: 25,
    y: 50,
  },
  {
    x: 25,
    y: 30,
  },
];

function agregarLinea(numeroExterno, id) {
  const primerNumero = $primerNumero.value;
  const segundoNumero = $segundoNumero.value;
  const tercerNumero = $tercerNumero.value;

  let configuracionLineas = [6];
  let sumaNumeros = 0;
  let mutante = false;

  if (countLimiteLineas === 6) {
    arregloSumaNumeros.forEach((elemento) => {
      if (elemento === 6 || elemento === 9) {
        mutante = true;
      }
    });

    if (mutante === true) {
      arregloSumaNumerosAux = Object.values(arregloSumaNumeros);

      generarNuevoHexagrama(arregloSumaNumeros, 2);
      nombrarHexagrama(arregloSumaNumeros, 2);

      generarNuevoHexagrama(arregloSumaNumerosAux, 3);
      nombrarHexagrama(arregloSumaNumerosAux, 3);
    } else {
      nombrarHexagrama(arregloSumaNumeros, 1);
    }

    alert("Has alcanzado el límite de 6 líneas dentro del hexagrama");
  } else {
    if (numeroExterno) {
      sumaNumeros = numeroExterno;
    } else {
      sumaNumeros =
        parseInt(primerNumero) +
        parseInt(segundoNumero) +
        parseInt(tercerNumero);
    }

    arregloSumaNumeros[countLimiteLineas] = sumaNumeros;

    if (sumaNumeros === 6) {
      configuracionLineas[countLimiteLineas] = dibujarYinMutante(
        coordenadasLineas[countLimiteLineas],
        id
      );
    }
    if (sumaNumeros === 7) {
      configuracionLineas[countLimiteLineas] = dibujarYang(
        coordenadasLineas[countLimiteLineas],
        id
      );
    }
    if (sumaNumeros === 8) {
      configuracionLineas[countLimiteLineas] = dibujarYin(
        coordenadasLineas[countLimiteLineas],
        id
      );
    }
    if (sumaNumeros === 9) {
      configuracionLineas[countLimiteLineas] = dibujarYangMutante(
        coordenadasLineas[countLimiteLineas],
        id
      );
    }

    countLimiteLineas++;
  }
}

$agregarLineaAleatoria.addEventListener("click", () => {
  const inferior = 6;
  const superior = 9;

  let numPosibilidades = superior - inferior;
  let aleatorio = Math.random() * (numPosibilidades + 1);
  aleatorio = Math.floor(aleatorio);

  agregarLinea(inferior + aleatorio, 1);
});

function generarNuevoHexagrama(arreglo, id) {
  countLimiteLineas = 0;

  if (id === 2) {
    arreglo.forEach(function (elemento, indice, arreglo) {
      if (arreglo[indice] === 6) {
        arreglo[indice] = 8;
      } else if (arreglo[indice] === 9) {
        arreglo[indice] = 7;
      }
    });
    arreglo.forEach((elemento) => agregarLinea(elemento, id));
  } else if (id === 3) {
    arreglo.forEach(function (elemento, indice, arreglo) {
      if (arreglo[indice] === 6) {
        arreglo[indice] = 7;
      } else if (arreglo[indice] === 9) {
        arreglo[indice] = 8;
      }
    });
    arreglo.forEach((elemento) => agregarLinea(elemento, id));
  }
}

function nombrarHexagrama(arreglo, id) {
  const tituloHexagrama = document.getElementById("th" + String(id));
  let nombre = "";
  let idCuadroTabla = "";

  if (JSON.stringify(arreglo) === JSON.stringify([7, 7, 7, 7, 7, 7])) {
    nombre = "1 . Ch'en";
    idCuadroTabla = "id1";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 8, 8, 8, 8, 8])) {
    nombre = "2 . K'un";
    idCuadroTabla = "id2";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 7, 8, 8, 8, 7])) {
    nombre = "3 . Chun";
    idCuadroTabla = "id3";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 8, 8, 8, 7, 8])) {
    nombre = "4 . Meng";
    idCuadroTabla = "id4";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 7, 8, 7, 7, 7])) {
    nombre = "5 . Hsü";
    idCuadroTabla = "id5";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 7, 7, 8, 7, 8])) {
    nombre = "6 . Sung";
    idCuadroTabla = "id6";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 8, 8, 8, 7, 8])) {
    nombre = "7 . Shih";
    idCuadroTabla = "id7";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 7, 8, 8, 8, 8])) {
    nombre = "8 . Pi";
    idCuadroTabla = "id8";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 7, 8, 7, 7, 7])) {
    nombre = "9 . Hsiao Ch'u";
    idCuadroTabla = "id9";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 7, 7, 8, 7, 7])) {
    nombre = "10. Lü";
    idCuadroTabla = "id10";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 8, 8, 7, 7, 7])) {
    nombre = "11. T'ai";
    idCuadroTabla = "id11";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 7, 7, 8, 8, 8])) {
    nombre = "12. P'i";
    idCuadroTabla = "id12";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 7, 7, 7, 8, 7])) {
    nombre = "13. T'sung Jen";
    idCuadroTabla = "id13";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 8, 7, 7, 7, 7])) {
    nombre = "14. Ta Yu";
    idCuadroTabla = "id14";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 8, 8, 7, 8, 8])) {
    nombre = "15. Chien";
    idCuadroTabla = "id15";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 8, 7, 8, 8, 8])) {
    nombre = "16. Yü";
    idCuadroTabla = "id16";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 7, 7, 8, 8, 7])) {
    nombre = "17. Sui";
    idCuadroTabla = "id17";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 8, 8, 7, 7, 8])) {
    nombre = "18. Ku";
    idCuadroTabla = "id18";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 8, 8, 8, 7, 7])) {
    nombre = "19. Lin";
    idCuadroTabla = "id19";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 7, 8, 8, 8, 8])) {
    nombre = "20. Kuan";
    idCuadroTabla = "id20";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 8, 7, 8, 8, 7])) {
    nombre = "21. Shih Ho";
    idCuadroTabla = "id21";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 8, 8, 7, 8, 7])) {
    nombre = "22. Pi";
    idCuadroTabla = "id22";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 8, 8, 8, 8, 8])) {
    nombre = "23. Po";
    idCuadroTabla = "id23";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 8, 8, 8, 8, 7])) {
    nombre = "24. Fu";
    idCuadroTabla = "id24";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 7, 7, 8, 8, 7])) {
    nombre = "25. Wu Wang";
    idCuadroTabla = "id25";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 8, 8, 7, 7, 7])) {
    nombre = "26. Ta Ch'u";
    idCuadroTabla = "id26";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 8, 8, 8, 8, 7])) {
    nombre = "7. I";
    idCuadroTabla = "id27";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 7, 7, 7, 7, 8])) {
    nombre = "28. Ta Kuo";
    idCuadroTabla = "id28";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 7, 8, 8, 7, 8])) {
    nombre = "29. K'an";
    idCuadroTabla = "id29";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 8, 7, 7, 8, 7])) {
    nombre = "30. Li";
    idCuadroTabla = "id30";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 7, 7, 7, 8, 8])) {
    nombre = "31. Hsien";
    idCuadroTabla = "id31";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 8, 7, 7, 7, 8])) {
    nombre = "32.Heng";
    idCuadroTabla = "id32";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 7, 7, 7, 8, 8])) {
    nombre = "33. Tun";
    idCuadroTabla = "id33";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 8, 7, 7, 7, 7])) {
    nombre = "34. Ta Chuang";
    idCuadroTabla = "id34";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 8, 7, 8, 8, 8])) {
    nombre = "35. Chin";
    idCuadroTabla = "id35";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 8, 8, 7, 8, 7])) {
    nombre = "36. Ming I";
    idCuadroTabla = "id36";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 7, 8, 7, 8, 7])) {
    nombre = "37. Chia Jen";
    idCuadroTabla = "id37";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 8, 7, 8, 7, 7])) {
    nombre = "38. K'uei";
    idCuadroTabla = "id38";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 7, 8, 7, 8, 8])) {
    nombre = "39. Chien";
    idCuadroTabla = "id39";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 8, 7, 8, 7, 8])) {
    nombre = "40. Hsieh";
    idCuadroTabla = "id40";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 8, 7, 8, 8, 7])) {
    nombre = "41. Sun";
    idCuadroTabla = "id41";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 7, 8, 8, 8, 7])) {
    nombre = "42. I";
    idCuadroTabla = "id42";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 7, 7, 7, 7, 7])) {
    nombre = "43. Kuai";
    idCuadroTabla = "id43";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 7, 7, 7, 7, 8])) {
    nombre = "44. Kou";
    idCuadroTabla = "id44";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 7, 7, 8, 8, 8])) {
    nombre = "45. Ts'ui";
    idCuadroTabla = "id45";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 8, 8, 7, 7, 8])) {
    nombre = "46. Sheng";
    idCuadroTabla = "id46";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 7, 7, 8, 7, 8])) {
    nombre = "47. K'un";
    idCuadroTabla = "id47";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 7, 8, 7, 7, 8])) {
    nombre = "48. Ching";
    idCuadroTabla = "id48";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 7, 7, 7, 8, 7])) {
    nombre = "49. Ko";
    idCuadroTabla = "id49";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 8, 7, 7, 7, 8])) {
    nombre = "50. Ting";
    idCuadroTabla = "id50";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 8, 7, 8, 8, 7])) {
    nombre = "51. Chen";
    idCuadroTabla = "id51";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 8, 8, 7, 8, 8])) {
    nombre = "52. Ken";
    idCuadroTabla = "id52";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 7, 8, 7, 8, 8])) {
    nombre = "53. Chien";
    idCuadroTabla = "id53";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 8, 7, 8, 7, 7])) {
    nombre = "54. Kuei Mei";
    idCuadroTabla = "id54";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 8, 7, 7, 8, 7])) {
    nombre = "55. Feng";
    idCuadroTabla = "id55";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 8, 7, 7, 8, 8])) {
    nombre = "56. Lü";
    idCuadroTabla = "id56";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 7, 8, 7, 7, 8])) {
    nombre = "57. Sun";
    idCuadroTabla = "id57";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 7, 7, 8, 7, 7])) {
    nombre = "58. Tui";
    idCuadroTabla = "id58";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 7, 8, 8, 7, 8])) {
    nombre = "59. Huan";
    idCuadroTabla = "id59";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 7, 8, 8, 7, 7])) {
    nombre = "60. Chieh";
    idCuadroTabla = "id60";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 7, 8, 8, 7, 7])) {
    nombre = "61. Chung Fu";
    idCuadroTabla = "id61";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 8, 7, 7, 8, 8])) {
    nombre = "62. Hsiao Kuo";
    idCuadroTabla = "id62";
  } else if (JSON.stringify(arreglo) === JSON.stringify([8, 7, 8, 7, 8, 7])) {
    nombre = "63. Chi Chi";
    idCuadroTabla = "id63";
  } else if (JSON.stringify(arreglo) === JSON.stringify([7, 8, 7, 8, 7, 8])) {
    nombre = "64. Wei Chi";
    idCuadroTabla = "id64";
  }
  tituloHexagrama.innerHTML = `<p>${nombre}</p>`;

  resaltarCuadro(idCuadroTabla);
}

$primerHexagrama.addEventListener("mouseover", () => {
  const div = document.getElementById("th1");
  const id = Number(div.children[0].textContent.slice(0, 2));

  descripcion(id);
});

$segundoHexagrama.addEventListener("mouseover", () => {
  const div = document.getElementById("th2");
  const id = Number(div.children[0].textContent.slice(0, 2));

  descripcion(id);
});

$tercerHexagrama.addEventListener("mouseover", () => {
  const div = document.getElementById("th3");
  const id = Number(div.children[0].textContent.slice(0, 2));

  descripcion(id);
});

function descripcion(id) {
  if (id === 1) {
    $tituloDescripcion.innerHTML = "Cielo";
  } else if (id === 2) {
    $tituloDescripcion.innerHTML = "Tierra";
  }
}

function resaltarCuadro(idCuadroTabla) {
  const td = document.getElementById(idCuadroTabla);
  td.classList.add("cuadro-resultado");
}

function dibujarYinMutante(coordenadasLineas, id) {
  let x = coordenadasLineas.x;
  let y = coordenadasLineas.y;

  var canvas = document.getElementById("resultDiag" + String(id));
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 100, y);
    ctx.stroke();

    ctx.moveTo(x + 110, y - 7);
    ctx.lineTo(x + 140, y + 7);
    ctx.stroke();

    ctx.moveTo(x + 110, y + 7);
    ctx.lineTo(x + 140, y - 7);
    ctx.stroke();

    ctx.moveTo(x + 150, y);
    ctx.lineTo(x + 250, y);
    ctx.stroke();

    ctx.closePath();
  }
}

function dibujarYang(coordenadasLineas, id) {
  let x = coordenadasLineas.x;
  let y = coordenadasLineas.y;

  var canvas = document.getElementById("resultDiag" + String(id));
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 250, y);
    ctx.stroke();

    ctx.closePath();
  }
}

function dibujarYin(coordenadasLineas, id) {
  let x = coordenadasLineas.x;
  let y = coordenadasLineas.y;

  var canvas = document.getElementById("resultDiag" + String(id));

  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 100, y);
    ctx.stroke();

    ctx.moveTo(x + 150, y);
    ctx.lineTo(x + 250, y);
    ctx.stroke();

    ctx.closePath();
  }
}

function dibujarYangMutante(coordenadasLineas, id) {
  let x = coordenadasLineas.x;
  let y = coordenadasLineas.y;

  var canvas = document.getElementById("resultDiag" + String(id));
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 250, y);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x + 125, y - 7, 3, 0, 2 * Math.PI);
    ctx.stroke();
  }
}
