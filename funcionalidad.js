const $primerNumero = document.getElementById("iptPrimerNumero");
const $segundoNumero = document.getElementById("iptSegundoNumero");
const $tercerNumero = document.getElementById("iptTercerNumero");
const $agregarLinea = document.getElementById("btnAgregarLinea");
const $borrarLinea = document.getElementById("btnBorrarLinea");
const $borrarHexagrama = document.getElementById("btnBorrarHexagrama");
const $agregarLineaAleatoria = document.getElementById("btnNumerosAleatorios");
const $resultDiag1 = document.getElementById("resultDiag1");

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
      alert("Has alcanzado el límite de 6 líneas dentro del hexagrama");
      nombrarHexagrama(arregloSumaNumeros, 1);
    }
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

function nombrarHexagrama(arregloSumas, id) {
  const tablaHexagramas = [
    { nombre: "Ch'ien", hexagrama: [7, 7, 7, 7, 7, 7] },
    { nombre: "K'un", hexagrama: [8, 8, 8, 8, 8, 8] },
    { nombre: "Chun", hexagrama: [8, 7, 8, 8, 8, 7] },
    { nombre: "Meng", hexagrama: [7, 8, 8, 8, 7, 8] },
    { nombre: "Hsü", hexagrama: [8, 7, 8, 7, 7, 7] },
    { nombre: "Sung", hexagrama: [7, 7, 7, 8, 7, 8] },
    { nombre: "Shih", hexagrama: [8, 8, 8, 8, 7, 8] },
    { nombre: "Pi", hexagrama: [8, 7, 8, 8, 8, 8] },
    { nombre: "Hsiao Ch'u", hexagrama: [7, 7, 8, 7, 7, 7] },
    { nombre: "Lü", hexagrama: [7, 7, 7, 8, 7, 7] },
    { nombre: "T'ai", hexagrama: [8, 8, 8, 7, 7, 7] },
    { nombre: "P'i", hexagrama: [7, 7, 7, 8, 8, 8] },
    { nombre: "T'sung Jen", hexagrama: [7, 7, 7, 7, 8, 7] },
    { nombre: "Ta Yu", hexagrama: [7, 8, 7, 7, 7, 7] },
    { nombre: "Chien", hexagrama: [8, 8, 8, 7, 8, 8] },
    { nombre: "Yü", hexagrama: [8, 8, 7, 8, 8, 8] },
    { nombre: "Sui", hexagrama: [8, 7, 7, 8, 8, 7] },
    { nombre: "Ku", hexagrama: [7, 8, 8, 7, 7, 8] },
    { nombre: "Lin", hexagrama: [8, 8, 8, 8, 7, 7] },
    { nombre: "Kuan", hexagrama: [7, 7, 8, 8, 8, 8] },
    // {nombre: , hexagrama: []},
    // {nombre: , hexagrama: []},
    // {nombre: , hexagrama: []},
    // {nombre: , hexagrama: []},
    // {nombre: , hexagrama: []},
    // {nombre: , hexagrama: []},
    // {nombre: , hexagrama: []},
    // {nombre: , hexagrama: []},
    // {nombre: , hexagrama: []},
    // {nombre: , hexagrama: []},
    // {nombre: , hexagrama: []},
    // {nombre: , hexagrama: []},
    // {nombre: , hexagrama: []},
    // {nombre: , hexagrama: []},
  ];

  tablaHexagramas.forEach((elemento) => {
    if (JSON.stringify(elemento.hexagrama) === JSON.stringify(arregloSumas)) {
      const tituloHexagrama = document.getElementById("th" + String(id));

      tituloHexagrama.innerHTML = `<p>${elemento.nombre}</p>`;
    }
  });
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
