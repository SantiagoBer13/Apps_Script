**
 * 📌 Enunciado:
✅ Crea una función copiarDatos que:

Lea los valores de la hoja “Exercise_3_Origen” desde el rango A1:C (hasta última fila con datos).

Copie esos valores a la hoja “Exercise_3_Destino”, comenzando en la celda A1.

Elimine previamente cualquier dato existente en “Exercise_3_Destino” antes de pegar los nuevos valores.
 */

function copiarDatos() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Exercise_3_Origen');
  var lastRow = sheet.getLastRow();
  var data = sheet.getRange(1, 1, lastRow, 3).getValues();
  
  var newSheet = ss.getSheetByName('Exercise_3_Destino');
  
  if (!newSheet) {
    newSheet = ss.insertSheet();
    newSheet.setName('Exercise_3_Destino');
  } else {
    newSheet.clear(); 
  }
  
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].length; j++) {
      newSheet.getRange(i + 1, j + 1).setValue(data[i][j]);
    }
  }
}

function copiarDatos() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var origen = ss.getSheetByName('Exercise_3_Origen');
  var destino = ss.getSheetByName('Exercise_3_Destino');
  
  var lastRow = origen.getLastRow();
  var data = origen.getRange(1, 1, lastRow, 3).getValues();
  
  if (!destino) {
    destino = ss.insertSheet();
    destino.setName('Exercise_3_Destino');
  } else {
    // Limpiar datos previos
    destino.clear();
  }
  
  destino.getRange(1, 1, data.length, data[0].length).setValues(data);
}