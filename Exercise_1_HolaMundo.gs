/**
 * Crea un script en Apps Script que escriba la palabra “Hola Mundo” en la celda A1 de una hoja de cálculo de Google Sheets.
 * La función se llama escribirHolaMundo.
 */

function escribirHolaMundo() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Exercise_1');
  
  if (sheet) {
    sheet.getRange('A1').setValue('Hola Mundo');
  } else {
    SpreadsheetApp.getUi().alert('La hoja Exercise_1 no existe.');
    var newSheet = ss.insertSheet(1)
    newSheet.setName('Exercise_1')
    newSheet.getRange('A1').setValue('HELLO WORLD')
  }
}