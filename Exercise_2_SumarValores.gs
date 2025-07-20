/**
 *  Enunciado resumido:
✅ Crea una función sumarValores que:

Lea valores de la columna A (A1:A última fila con datos) de la hoja “Exercise_2”.

Calcule la suma de todos los valores numéricos.

Escriba el resultado en la celda B1.
 */

function sumarValores(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Exercise_2');
  var lastRow = sheet.getLastRow();
  var numbers2 = sheet.getRange(2,1,lastRow,1).getValues();
  var sum = 0;
  for (var i = 0; i < numbers2.length; i++) {
    var num = parseFloat(numbers2[i][0]);
    if (!isNaN(num)) {
      sum += num;
    }
  }
  sheet.getRange('B2').setValue(sum);
}