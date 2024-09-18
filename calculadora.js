function suma() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);

    var resultado1 = numero1 + numero2;

    document.getElementById('resultado1').value = resultado1;
}

function resta() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);

    var resultado1 = numero1 - numero2;

    document.getElementById('resultado1').value = resultado1;
}

function multi() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);

    var resultado1 = numero1 * numero2;

    document.getElementById('resultado1').value = resultado1;
}

function division() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);

    var resultado1 = numero1 / numero2;

    document.getElementById('resultado1').value = resultado1;
}

function residuo() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);

    var resultado1 = numero1 % numero2;

    document.getElementById('resultado1').value = resultado1;
}