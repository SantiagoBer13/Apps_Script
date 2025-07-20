/**
 * 📌 Enunciado:
✅ Crea una función actualizarValores que:

Lea la hoja “Exercise_7” con dos columnas:

Columna A: identificadores únicos

Columna B: valores numéricos actuales

Aumente en un 10% cada valor numérico y escriba el resultado en la columna C.
 */

function actualizarValores(){
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var sheet = ss.getSheetByName('Exercise_7')
  var lastRow = sheet.getLastRow()-1
  var data = sheet.getRange(2,1,lastRow,2).getValues()
  for(var i = 0; i < data.length; i++){
    var plusTenPercentage = data[i][1]  + (data[i][1] * 0.10)
    sheet.getRange('C'+ (i+2)).setValue(plusTenPercentage) 
  }
}

function actualizarValores2() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Exercise_7');
  var lastRow = sheet.getLastRow() - 1;

  if (lastRow <= 0) {
    Logger.log('No hay datos para procesar.');
    return;
  }

  var data = sheet.getRange(2, 1, lastRow, 2).getValues();
  var results = [];

  for (var i = 0; i < data.length; i++) {
    var valor = parseFloat(data[i][1]);
    if (!isNaN(valor)) {
      var nuevoValor = valor + (valor * 0.10);
      results.push([nuevoValor]);
    } else {
      results.push([""]);
    }
  }

  sheet.getRange(2, 3, results.length, 1).setValues(results);
}