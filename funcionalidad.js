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

  if(primerNumero == "" || segundoNumero == "" || tercerNumero == "") {
    alert("Por favor, rellena los campos")
  }

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
    if ( sumaNumeros >= 6 && sumaNumeros <= 9 )
      countLimiteLineas++;
    else
      alert("Por favor inserte bien sus numeros, la suma debe ser mayor que 6 y menor que 9")
  }
}

$borrarLinea.addEventListener("click",() =>{
  borrarLinea(coordenadasLineas[countLimiteLineas-1],1);
});

$borrarHexagrama.addEventListener("click",() => {
  borrarHexagrama(1);
})

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
    console.log(Object.values(arreglo));
    arreglo.forEach((elemento) => agregarLinea(elemento, id));
  } else if (id === 3) {
    arreglo.forEach(function (elemento, indice, arreglo) {
      if (arreglo[indice] === 6) {
        arreglo[indice] = 7;
      } else if (arreglo[indice] === 9) {
        arreglo[indice] = 8;
      }
    });
    console.log(Object.values(arreglo));
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

  if (div.children[0]) {
    const id = Number(div.children[0].textContent.slice(0, 2));
    descripcion(id);
  }
});

$segundoHexagrama.addEventListener("mouseover", () => {
  const div = document.getElementById("th2");

  if (div.children[0]) {
    const id = Number(div.children[0].textContent.slice(0, 2));
    descripcion(id);
  }
});

$tercerHexagrama.addEventListener("mouseover", () => {
  const div = document.getElementById("th3");

  if (div.children[0]) {
    const id = Number(div.children[0].textContent.slice(0, 2));
    descripcion(id);
  }
});

function descripcion(id) {
  if (id === 1) {
    $tituloDescripcion.innerHTML = "Cielo";
    $descripcion.innerHTML = "Lo creativo. El principio generador";
  } else if (id === 2) {
    $tituloDescripcion.innerHTML = "Tierra";
    $descripcion.innerHTML = "Lo receptivo. El principio pasivo";
  } else if (id === 3) {
    $tituloDescripcion.innerHTML = "Acumular";
    $descripcion.innerHTML = "El obstáculo inicial. La dificultad del comienzo";
  } else if (id === 4) {
    $tituloDescripcion.innerHTML = "Juventud";
    $descripcion.innerHTML = "El joven necio. La inmadurez";
  } else if (id === 5) {
    $tituloDescripcion.innerHTML = "Esperar";
    $descripcion.innerHTML = "La espera. La maduración";
  } else if (id === 6) {
    $tituloDescripcion.innerHTML = "Disputar";
    $descripcion.innerHTML = "El conflicto. El pleito";
  } else if (id === 7) {
    $tituloDescripcion.innerHTML = "Ejército";
    $descripcion.innerHTML = "La legión";
  } else if (id === 8) {
    $tituloDescripcion.innerHTML = "Solidaridad";
    $descripcion.innerHTML = "La unión";
  } else if (id === 9) {
    $tituloDescripcion.innerHTML = "Animalito doméstico";
    $descripcion.innerHTML = "La pequeña fuerza";
  } else if (id === 10) {
    $tituloDescripcion.innerHTML = "Caminar";
    $descripcion.innerHTML = "El porte. El paso cauteloso";
  } else if (id === 11) {
    $tituloDescripcion.innerHTML = "Prosperidad";
    $descripcion.innerHTML = "La paz. La armonía";
  } else if (id === 12) {
    $tituloDescripcion.innerHTML = "Cierre";
    $descripcion.innerHTML = "El estancamiento. Lo inerte";
  } else if (id === 13) {
    $tituloDescripcion.innerHTML = "Hombres Reunidos";
    $descripcion.innerHTML = " La unión comunitaria";
  } else if (id === 14) {
    $tituloDescripcion.innerHTML = "Gran dominio";
    $descripcion.innerHTML = "La gran posesión. Lo que se tiene de más";
  } else if (id === 15) {
    $tituloDescripcion.innerHTML = "Condescendencia";
    $descripcion.innerHTML = "La modestia. La humildad";
  } else if (id === 16) {
    $tituloDescripcion.innerHTML = "Ocuparse";
    $descripcion.innerHTML = "El entusiasmo. La algarabía";
  } else if (id === 17) {
    $tituloDescripcion.innerHTML = "Conformarse";
    $descripcion.innerHTML = "La continuidad. El seguimiento";
  } else if (id === 18) {
    $tituloDescripcion.innerHTML = "Destrucción";
    $descripcion.innerHTML = "La reconstrucción. La labor en lo corrompido";
  } else if (id === 19) {
    $tituloDescripcion.innerHTML = "Acercarse";
    $descripcion.innerHTML = "Lo que va llegando";
  } else if (id === 20) {
    $tituloDescripcion.innerHTML = "Observar";
    $descripcion.innerHTML = "La contemplación";
  } else if (id === 21) {
    $tituloDescripcion.innerHTML = "Quebrar mordiendo";
    $descripcion.innerHTML = "La dentellada. La filosa mordedura";
  } else if (id === 22) {
    $tituloDescripcion.innerHTML = "Adornar";
    $descripcion.innerHTML = "La elegancia. La gracia";
  } else if (id === 23) {
    $tituloDescripcion.innerHTML = "Resquebrajar";
    $descripcion.innerHTML = "La desintegración. El derrumbe";
  } else if (id === 24) {
    $tituloDescripcion.innerHTML = "Regresar";
    $descripcion.innerHTML = "El retorno. Lo que vuelve";
  } else if (id === 25) {
    $tituloDescripcion.innerHTML = "Sinceridad";
    $descripcion.innerHTML = "La inocencia. La naturalidad";
  } else if (id === 26) {
    $tituloDescripcion.innerHTML = "Fuerza educadora";
    $descripcion.innerHTML = "El poder de lo fuerte. La gran acumulación";
  } else if (id === 27) {
    $tituloDescripcion.innerHTML = "Nutrirse";
    $descripcion.innerHTML = "La alimentación. Las fauces";
  } else if (id === 28) {
    $tituloDescripcion.innerHTML = "Excesos";
    $descripcion.innerHTML = "La preponderancia de lo grande";
  } else if (id === 29) {
    $tituloDescripcion.innerHTML = "Peligro";
    $descripcion.innerHTML = "Lo abismal. La caida";
  } else if (id === 30) {
    $tituloDescripcion.innerHTML = "Distinguir";
    $descripcion.innerHTML = "El resplandor. Lo adherente";
  } else if (id === 31) {
    $tituloDescripcion.innerHTML = "Unir";
    $descripcion.innerHTML = "La influencia.La atracción";
  } else if (id === 32) {
    $tituloDescripcion.innerHTML = "Luna Creciente";
    $descripcion.innerHTML = "La duración. La permanencia";
  } else if (id === 33) {
    $tituloDescripcion.innerHTML = "Retirarse";
    $descripcion.innerHTML = "El repliegue";
  } else if (id === 34) {
    $tituloDescripcion.innerHTML = "Gran fuerza";
    $descripcion.innerHTML = "El gran vigor";
  } else if (id === 35) {
    $tituloDescripcion.innerHTML = "Progresar";
    $descripcion.innerHTML = "El avance";
  } else if (id === 36) {
    $tituloDescripcion.innerHTML = "Luz que se apaga";
    $descripcion.innerHTML = "El oscurecimiento";
  } else if (id === 37) {
    $tituloDescripcion.innerHTML = "Gente de familia";
    $descripcion.innerHTML = "El clan";
  } else if (id === 38) {
    $tituloDescripcion.innerHTML = "Contraste";
    $descripcion.innerHTML = "La oposición. El antagonismo";
  } else if (id === 39) {
    $tituloDescripcion.innerHTML = "Dificultad";
    $descripcion.innerHTML = "El obstáculo. El impedimento";
  } else if (id === 40) {
    $tituloDescripcion.innerHTML = "Explicar";
    $descripcion.innerHTML = "La liberación. El alivio";
  } else if (id === 41) {
    $tituloDescripcion.innerHTML = "Perder";
    $descripcion.innerHTML = "La disminución";
  } else if (id === 42) {
    $tituloDescripcion.innerHTML = "Evolución";
    $descripcion.innerHTML = "El aumento. La ganancia";
  } else if (id === 43) {
    $tituloDescripcion.innerHTML = "Decidir";
    $descripcion.innerHTML = "El desbordamiento. La resolución";
  } else if (id === 44) {
    $tituloDescripcion.innerHTML = "Encontrarse";
    $descripcion.innerHTML = "El acoplamiento";
  } else if (id === 45) {
    $tituloDescripcion.innerHTML = "Cosechar";
    $descripcion.innerHTML = "La reunión. La convergencia";
  } else if (id === 46) {
    $tituloDescripcion.innerHTML = "Subir";
    $descripcion.innerHTML = "El ascenso. La escalada";
  } else if (id === 47) {
    $tituloDescripcion.innerHTML = "Angustia";
    $descripcion.innerHTML = "La pesadumbre. El agotamiento";
  } else if (id === 48) {
    $tituloDescripcion.innerHTML = "El pozo de agua";
    $descripcion.innerHTML = "La fuente";
  } else if (id === 49) {
    $tituloDescripcion.innerHTML = "Renovar";
    $descripcion.innerHTML = "La revolución. El cambio";
  } else if (id === 50) {
    $tituloDescripcion.innerHTML = "La caldera";
    $descripcion.innerHTML = "Lo alquímico";
  } else if (id === 51) {
    $tituloDescripcion.innerHTML = "Trueno";
    $descripcion.innerHTML = "La conmoción. Lo suscitativo";
  } else if (id === 52) {
    $tituloDescripcion.innerHTML = "Cimientos";
    $descripcion.innerHTML = "La quietud. La detención";
  } else if (id === 53) {
    $tituloDescripcion.innerHTML = "Evolución";
    $descripcion.innerHTML = "El progreso gradual";
  } else if (id === 54) {
    $tituloDescripcion.innerHTML = "Desposar a la hija menor";
    $descripcion.innerHTML = "La doncella";
  } else if (id === 55) {
    $tituloDescripcion.innerHTML = "Abundancia";
    $descripcion.innerHTML = "La plenitud";
  } else if (id === 56) {
    $tituloDescripcion.innerHTML = "Viajero";
    $descripcion.innerHTML = "El andariego";
  } else if (id === 57) {
    $tituloDescripcion.innerHTML = "Viento";
    $descripcion.innerHTML = "Lo penetrante. Lo suave";
  } else if (id === 58) {
    $tituloDescripcion.innerHTML = "Recogerse";
    $descripcion.innerHTML = "La serenidad. La satisfacción";
  } else if (id === 59) {
    $tituloDescripcion.innerHTML = "Confusión";
    $descripcion.innerHTML = "La dispersión. La disolución";
  } else if (id === 60) {
    $tituloDescripcion.innerHTML = "Moderación";
    $descripcion.innerHTML = "La restricción. La limitación";
  } else if (id === 61) {
    $tituloDescripcion.innerHTML = "Fe Interior";
    $descripcion.innerHTML = "La verdad interior. La sinceridad interna";
  } else if (id === 62) {
    $tituloDescripcion.innerHTML = "Pequeñas cosas importantes";
    $descripcion.innerHTML = "La pequeña preponderancia";
  } else if (id === 63) {
    $tituloDescripcion.innerHTML = "Conclusiones";
    $descripcion.innerHTML = "Después de la realización";
  } else if (id === 64) {
    $tituloDescripcion.innerHTML = "Inconcluso";
    $descripcion.innerHTML = "Antes de la realización";
  }
}

function resaltarCuadro(idCuadroTabla) {
  const td = document.getElementById(idCuadroTabla);
  td.classList.add("cuadro-resultado");
}

function dibujarYinMutante(coordenadasLineas, id) {
  let x = coordenadasLineas.x;
  let y = coordenadasLineas.y;
  let xa = 0,nx = 10,xb=-7,xb2=-7;

  var canvas = document.getElementById("resultDiag" + String(id));
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");


    var intervalo = setInterval( () => {
      ctx.beginPath();
      
      if(xa<=100){
        ctx.moveTo(x, y);
        ctx.lineTo(x + xa, y);
        ctx.stroke();
      }
      
      if(xa>=110 && xb<=7 && xb2 >=-7){
        xb+=3.5;
        xb2+=3.5;
      }
      if(xa>=110 && xa <=140){
        ctx.clearRect(110,y-7,50,14);
        ctx.moveTo(x + 110, y - 7);
        ctx.lineTo(x + xa, y + xb);
        ctx.stroke();
        
        ctx.clearRect(110,y-7,50,14);
        ctx.moveTo(x + 110, y + 7);
        ctx.lineTo(x + xa, y - xb2);
        ctx.stroke();
      }

      if(xa>=150){
        ctx.moveTo(x + 150, y);
        ctx.lineTo(x + xa, y);
        ctx.stroke();
      }
      
      xa+=nx;

      ctx.closePath();

      if(xa>250){
        clearInterval(intervalo);
      }
    }, 15)
    
  }
}

function dibujarYang(coordenadasLineas, id) {
  let x = coordenadasLineas.x;
  let y = coordenadasLineas.y;
  let xa = 0,nx = 10;

  var canvas = document.getElementById("resultDiag" + String(id));
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    var intervalo = setInterval( () => {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + xa, y);
      ctx.stroke();

      xa+=nx;

      ctx.closePath();
      if(xa> 250){
        clearInterval(intervalo);
      }
    }, 15)
    
  }
}

function dibujarYin(coordenadasLineas, id) {
  let x = coordenadasLineas.x;
  let y = coordenadasLineas.y;
  let xa = 0,nx = 10;

  var canvas = document.getElementById("resultDiag" + String(id));

  if (canvas.getContext) {
      var ctx = canvas.getContext("2d");

      var intervalo = setInterval( () => {
        ctx.beginPath();
        if(xa<=100){
          ctx.moveTo(x, y);
          ctx.lineTo(x + xa, y);
          ctx.stroke();
        } else if(xa<=250){
          ctx.moveTo(x + 150, y);
          ctx.lineTo(x + xa, y);
          ctx.stroke();
        } else if(xa>= 250){
          clearInterval(intervalo);
        }
        if(xa == 100){
          xa +=40;
        }
        xa+=nx;
        ctx.closePath();

      }, 15)  
  }
}

function dibujarYangMutante(coordenadasLineas, id) {
  let x = coordenadasLineas.x;
  let y = coordenadasLineas.y;
  let xa = 0,nx = 10, xb = 0,nxb = 0.2;

  var canvas = document.getElementById("resultDiag" + String(id));
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    var intervalo = setInterval( () => {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + xa, y);
      ctx.stroke();
      ctx.closePath();

      if(xa >= 125){
        if(xb<2){
          xb+=nxb;
        }
        ctx.beginPath();
        ctx.arc(x + 125, y - 7, 3, 0, xb * Math.PI);
        ctx.stroke();
      }
      

      xa+=nx;
      if(xa>250){
        clearInterval(intervalo);
      }
     
    }, 15)
    
  }
}

function borrarLinea(coordenadasLineas,id){
  let x = coordenadasLineas.x;
  let y = coordenadasLineas.y;
  var canvas = document.getElementById("resultDiag" + String(id));
  var canvas2 = document.getElementById("resultDiag2");
  var canvas3 = document.getElementById("resultDiag3");

  if(canvas.getContext){
    var ctx = canvas.getContext("2d");
    ctx.clearRect(x-5,y-10,280,20);
    countLimiteLineas--;
  }
  if(canvas2.getContext){
    var ctx2 = canvas2.getContext("2d");
    ctx2.clearRect(x-5,y-10,280,20);
  }
  if(canvas3.getContext){
    var ctx3 = canvas3.getContext("2d");
    ctx3.clearRect(x-5,y-10,280,20);
  }
}

function borrarHexagrama(id){
  var canvas = document.getElementById("resultDiag" + String(id));
  var canvas2 = document.getElementById("resultDiag2");
  var canvas3 = document.getElementById("resultDiag3");

  if(canvas.getContext){
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,280,150);
    countLimiteLineas=0;
  }
  if(canvas2.getContext){
    var ctx2 = canvas2.getContext("2d");
    ctx2.clearRect(0,0,280,150);
  }
  if(canvas3.getContext){
    var ctx3 = canvas3.getContext("2d");
    ctx3.clearRect(0,0,280,150);
  }
  
}
