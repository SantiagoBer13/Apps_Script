/**
 * 📌 Enunciado:
✅ Crea una función enviarCorreos que:

Lea un rango de datos en “Exercise_4” que contenga dos columnas:

Columna A: nombres de personas

Columna B: sus correos electrónicos

Envíe un correo electrónico a cada dirección con el asunto: “Práctica Apps Script” y el cuerpo:
Hola [Nombre], este es un correo de práctica de Apps Script.
 */

function enviarCorreos(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Exercise_4')
  var lastRow = sheet.getLastRow() - 1
  var data = sheet.getRange(2,1,lastRow,2).getValues()
  for(var i = 0; i < data.length; i++){
    var nombre = data[i][0];
      var destinatario = data[i][1];
      var asunto = 'Práctica Apps Script';
      var body = 'Hola ' + nombre + ', este es un correo de práctica de Apps Script.';
      Logger.log(destinatario)
      MailApp.sendEmail(destinatario, asunto, body);
  }
}