/**
 * 📌 Enunciado preliminar:
✅ Crea una función que consuma la API pública de JSONPlaceholder para traer una lista de usuarios y escribir sus nombres y correos en una hoja llamada “Exercise_9”.
 */


function traerUsuarios() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Exercise_9');

  // Si la hoja no existe, créala.
  if (!sheet) {
    sheet = ss.insertSheet();
    sheet.setName('Exercise_9');
  } else {
    sheet.clear(); // Limpia datos previos
  }

  // URL de la API
  var url = 'https://jsonplaceholder.typicode.com/users';

  // Llamada HTTP GET
  var response = UrlFetchApp.fetch(url);

  // Parsear la respuesta JSON
  var usuarios = JSON.parse(response.getContentText());

  // Preparar datos para escribir (arrays de arrays)
  var datos = [];
  datos.push(['Nombre', 'Correo']); // Encabezados

  usuarios.forEach(function(usuario) {
    datos.push([usuario.name, usuario.email]);
  });

  // Escribir datos desde A1
  sheet.getRange(1, 1, datos.length, 2).setValues(datos);

  Logger.log('Usuarios cargados correctamente.');
}