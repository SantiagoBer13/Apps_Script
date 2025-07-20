/**
 * 📌 Enunciado:
✅ Crea una función crearTriggerDiario que:

Cree un trigger diario que ejecute una función llamada ejecutarReporte cada día a las 7:00 am.
 */

function ejecutarReporte() {
  Logger.log("Este es el reporte ejecutado automáticamente.");
}

function crearTriggerDiario() {
  ScriptApp.newTrigger('ejecutarReporte') // Indica la función que se ejecutará
    .timeBased() // Define que será un trigger de tiempo (no por evento de Sheets, Forms, etc.)
    .atHour(7) // Hora en formato 24h (7 am)
    .everyMinutes(1) // Cada cuántos días ejecutarlo (1 = todos los días)
    .create(); // Crea el trigger
}

function eliminarTriggers() {
  var allTriggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < allTriggers.length; i++) {
    ScriptApp.deleteTrigger(allTriggers[i]);
  }
  Logger.log(allTriggers)
}
