console.log("hola")

const $primerNumero = document.getElementById("iptPrimerNumero");
const $segundoNumero = document.getElementById("iptSegundoNumero");
const $tercerNumero = document.getElementById("iptTercerNumero");
const $agregarLinea = document.getElementById("btnAgregarLinea");
const $borrarLinea = document.getElementById("btnBorrarLinea");
const $borrarHexagrama = document.getElementById("btnBorrarHexagrama");
const $resultDiag1 = document.getElementById("resultDiag1");


let coordenadasLineas = [
    {
        x : 25, y: 150
    },
    {
        x : 25, y : 125
    }
];
let countLimiteLineas = 0;

$agregarLinea.addEventListener('click', function () {
    const primerNumero = $primerNumero.value;
    const segundoNumero = $segundoNumero.value;
    const tercerNumero = $tercerNumero.value;

    let sumaNumeros = primerNumero + segundoNumero + tercerNumero;


    while (countLimiteLineas < 6) {
        switch (countLimiteLineas) {
            case 0:
                if (sumaNumeros == 6)
                    console.log("entro")
                    dibujarYinMutante(coordenadasLineas[countLimiteLineas])
                
                break;
        
            default:
                break;
        }
    }

})


function dibujarYinMutante (coordenadasLineas) {
    let x = coordenadasLineas.x;
    let y = coordenadasLineas.y;

    var canvas = document.getElementById('resultDiag1');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 100, y);
        ctx.stroke();   

        ctx.beginPath();
        ctx.moveTo(x + 110, y);
        ctx.lineTo(x + 140, y);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x + 150, y);
        ctx.lineTo(x + 250, y);
        ctx.stroke();
        
        ctx.closePath();
    }
}