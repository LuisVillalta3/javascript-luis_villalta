// Namespace 'Calculadora'
var Calculadora = {}

// Definición de la librería 'Calculadora'
Calculadora = function() {
  var inScreen = 0
  var total = 0
  var val1 = 0
  var val2 = 0
  var opc = ''

  var agrandarBtn = function(id) {
    document.getElementById(id).style.transform = "scale(1.2)";
  }
  var encogerBtn = function() {
    var el = document.querySelectorAll('.tecla');
    for (i = 0; i < el.length; i++) {
      el[i].style.transform = "scale(1)";
    }
  }
  var cleanScreen = function() {
    inScreen = 0
    document.getElementById('display').innerHTML = 0
  }
  var cleanData = function() {
    inScreen = 0
    total = 0
    val2 = 0
    opc = ''
    document.getElementById('display').innerHTML = 0
  }
  var addPunto = function() {
    if (inScreen.indexOf('.') > -1) { return }
    if (inScreen.length > 7) { return }
    inScreen = inScreen + '.'
    document.getElementById('display').innerHTML = inScreen
  }
  var addNumber = function(number) {
    if (inScreen == 0 && number == 0) { return }
    if (inScreen == 0) { inScreen = number }
    else { 
      if (inScreen.length > 2) {
        if (inScreen.indexOf('+') > -1 || inScreen.indexOf('-') > -1) {
          if (inScreen.length > 8) { return }
        } else
          if (inScreen.length > 7) { return }
      } else
        inScreen.length > 7
      inScreen = inScreen + '' + number
    }
    document.getElementById('display').innerHTML = inScreen
  }
  var addSigno = function() {
    var subCadena = inScreen
    if (inScreen.indexOf('+') == -1) {
      if (inScreen.indexOf('+') > -1 || inScreen.indexOf('-') > -1)
        subCadena = inScreen.substring(1,inScreen.length)
      inScreen = '+' + subCadena
    } else if (inScreen.indexOf('-') == -1) {
      subCadena = inScreen.substring(1,inScreen.length)
      inScreen = '-' + subCadena
    }
    document.getElementById('display').innerHTML = inScreen
  }
  var setVal1 = function(opci) {
    console.log(opc);
    if (total == 0) {
      total = inScreen
      val1 = inScreen
    } else {
      if (inScreen == 0) {
        switch (opc) {
          case '+':
            total += parseFloat(val1)
            break;
          case '-':
            total -= parseFloat(val1)
            break;
          case '*':
            total *= parseFloat(val1)
            break;
          case '/':
            total /= parseFloat(val1)
            break;
        }
      } else {
        val1 = inScreen
        switch (opc) {
          case '+':
            total += parseFloat(inScreen)
            break;
          case '-':
            total -= parseFloat(inScreen)
            break;
          case '*':
            total *= parseFloat(inScreen)
            break;
          case '/':
            total /= parseFloat(inScreen)
            break;
        }
      }
    }
  }
  var calcTotal = function() {
    switch (opc) {
      case '+':
        total += parseFloat(inScreen)
        break;
      case '-':
        total -= parseFloat(inScreen)
        break;
      case '*':
        total *= parseFloat(inScreen)
        break;
      case '/':
        total /= parseFloat(inScreen)
        break;
    }
    document.getElementById('display').innerHTML = total
  }
  var setOpc = function(opci) { opc = opci }

  return {
    presionar: function(id) {
      agrandarBtn(id)
      setTimeout(encogerBtn, 200)
      addNumber(id)
    },
    limpiarScreen: function(id) {
      agrandarBtn(id)
      setTimeout(encogerBtn, 200)
      cleanData()
    },
    agregarPunto: function(id) {
      agrandarBtn(id)
      setTimeout(encogerBtn, 200)
      addPunto()
    },
    agregarSigno: function(id) {
      agrandarBtn(id)
      setTimeout(encogerBtn, 200)
      addSigno()
    },
    primerValor: function(id,opc) {
      setOpc(opc)
      agrandarBtn(id)
      setTimeout(encogerBtn, 200)
      setVal1(opc)
      cleanScreen()
    },
    mostrarTotal: function(id) {
      agrandarBtn(id)
      setTimeout(encogerBtn, 200)
      calcTotal()
    },
    nada: function(id) {
      agrandarBtn(id)
      setTimeout(encogerBtn, 200)
    }
  }
}()

// PRESIONAR BOTÓN
document.getElementById('9').onclick = function() { Calculadora.presionar(9) }
document.getElementById('8').onclick = function() { Calculadora.presionar(8) }
document.getElementById('7').onclick = function() { Calculadora.presionar(7) }
document.getElementById('6').onclick = function() { Calculadora.presionar(6) }
document.getElementById('5').onclick = function() { Calculadora.presionar(5) }
document.getElementById('4').onclick = function() { Calculadora.presionar(4) }
document.getElementById('3').onclick = function() { Calculadora.presionar(3) }
document.getElementById('2').onclick = function() { Calculadora.presionar(2) }
document.getElementById('1').onclick = function() { Calculadora.presionar(1) }
document.getElementById('0').onclick = function() { Calculadora.presionar(0) }
// PROCEDIMIENTO
document.getElementById('sign').onclick = function() { Calculadora.agregarSigno('sign') }
//
document.getElementById('por').onclick = function() { Calculadora.primerValor('por','*') }
document.getElementById('menos').onclick = function() { Calculadora.primerValor('menos','-') }
document.getElementById('dividido').onclick = function() { Calculadora.primerValor('dividido','/') }
document.getElementById('mas').onclick = function() { Calculadora.primerValor('mas','+') }
//
document.getElementById('igual').onclick = function() { Calculadora.mostrarTotal('igual') }
//
document.getElementById('raiz').onclick = function() { Calculadora.nada('raiz') }
// LIMPIAR PANTALLA
document.getElementById('on').onclick = function() { Calculadora.limpiarScreen('on') }
// AGREGAR PUNTO
document.getElementById('punto').onclick = function() { Calculadora.agregarPunto('punto') }