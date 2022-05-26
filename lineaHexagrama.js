class LineaHexagrama {
  constructor(nombre, sumaNumeros, $canvas) {
    this.nombre = nombre;
    this.sumaNumeros = sumaNumeros;
    this.idCanvas = $canvas;
  }

  get TipoLineaHexagrama() {
    if (this.sumaNumeros == 6) {
      this.nombre = "Linea yin mutante";
      let canvas = document.getElementById("idCanvas");

      // if(canvas.getContext)
    }
  }
}

function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    // Filled triangle
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();

    // Stroked triangle
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();
  }
}
