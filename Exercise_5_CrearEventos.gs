/**
 * 📌 Enunciado:
✅ Crea una función crearEventos que:

Lea un rango de datos en la hoja “Exercise_5” con tres columnas:

Columna A: título del evento

Columna B: fecha de inicio (en formato válido)

Columna C: fecha de fin

Cree un evento en tu calendario principal con esos datos.
 */

function crearEventos() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Exercise_5");
  var lastRow = sheet.getLastRow() - 1;
  
  if (lastRow <= 0) {
    Logger.log('No hay datos para procesar.');
    return;
  }
  
  var data = sheet.getRange(2, 1, lastRow, 3).getValues();
  var calendar = CalendarApp.getDefaultCalendar();
  
  for (var i = 0; i < data.length; i++) {
    var titulo = data[i][0];
    var inicio = new Date(data[i][1]);
    var fin = new Date(data[i][2]);
    
    if (titulo && inicio && fin) {
      try {
        calendar.createEvent(titulo, inicio, fin);
      } catch (e) {
        Logger.log('Error al crear evento para la fila ' + (i+2) + ': ' + e);
      }
    } else {
      Logger.log('Fila ' + (i+2) + ' tiene datos incompletos.');
    }
  }
}