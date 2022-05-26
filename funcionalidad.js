const $primerNumero = document.getElementById("iptPrimerNumero");
const $segundoNumero = document.getElementById("iptSegundoNumero");
const $tercerNumero = document.getElementById("iptTercerNumero");
const $agregarLinea = document.getElementById("btnAgregarLinea");
const $borrarLinea = document.getElementById("btnBorrarLinea");
const $borrarHexagrama = document.getElementById("btnBorrarHexagrama");
const $resultDiag1 = document.getElementById("resultDiag1");

let countLimiteLineas = 0;

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

$agregarLinea.addEventListener("click", () => {
  const primerNumero = $primerNumero.value;
  const segundoNumero = $segundoNumero.value;
  const tercerNumero = $tercerNumero.value;

  var sumaNumeros =
    parseInt(primerNumero) + parseInt(segundoNumero) + parseInt(tercerNumero);

  if (sumaNumeros === 6 && countLimiteLineas < 6) {
    dibujarYinMutante(coordenadasLineas[countLimiteLineas]);
  }
  if (sumaNumeros === 7 && countLimiteLineas < 6) {
    dibujarYang(coordenadasLineas[countLimiteLineas]);
  }
  if (sumaNumeros === 8 && countLimiteLineas < 6) {
    dibujarYin(coordenadasLineas[countLimiteLineas]);
  }
  if (sumaNumeros === 9 && countLimiteLineas < 6) {
    dibujarYangMutante(coordenadasLineas[countLimiteLineas]);
  }

  countLimiteLineas++;
});

function dibujarYinMutante(coordenadasLineas) {
  let x = coordenadasLineas.x;
  let y = coordenadasLineas.y;

  var canvas = document.getElementById("resultDiag1");
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

function dibujarYang(coordenadasLineas) {
  let x = coordenadasLineas.x;
  let y = coordenadasLineas.y;

  var canvas = document.getElementById("resultDiag1");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 250, y);
    ctx.stroke();

    ctx.closePath();
  }
}

function dibujarYin(coordenadasLineas) {
  let x = coordenadasLineas.x;
  let y = coordenadasLineas.y;

  var canvas = document.getElementById("resultDiag1");

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

function dibujarYangMutante(coordenadasLineas) {
  let x = coordenadasLineas.x;
  let y = coordenadasLineas.y;

  var canvas = document.getElementById("resultDiag1");
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
