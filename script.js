function calcularTroco() {
var valorCompra = parseFloat(document.getElementById("valor-compra").value);
var valorPago = parseFloat(document.getElementById("valor-pago").value);
var troco = valorPago - valorCompra;
var notas = [50, 20, 10, 5, 2, 1];
var resultado = "";
	
if (troco < 0) {
	resultado = "Valor pago é insuficiente para realizar a compra.";
} else if (troco == 0) {
	resultado = "Não há troco a ser dado.";
} else {
	for (var i = 0; i < notas.length; i++) {
	var quantidadeNotas = Math.floor(troco / notas[i]);
	if (quantidadeNotas > 0) {
				resultado += quantidadeNotas + " nota(s) de R$ " + notas[i] + ",00<br>";
	troco -= quantidadeNotas * notas[i];
		}
	}
}
	
document.getElementById("resultado").innerHTML = resultado;
}
