/**
 * 📌 Enunciado:
✅ Crea una función borrarEventosPasados que:

Obtenga todos los eventos del calendario en los últimos 30 días.

Elimine aquellos eventos que hayan terminado antes de la fecha actual.
 */

function borrarEventosPasados() {
  var today = new Date();
  var pastThirtyDays = new Date(today.getTime() - (30 * 24 * 60 * 60 * 1000));

  var calendar = CalendarApp.getDefaultCalendar();
  var events = calendar.getEvents(pastThirtyDays, today);
  
  for (var i = 0; i < events.length; i++) {
    var event = events[i];
    var endTime = event.getEndTime();
    
    if (endTime < today) {
      event.deleteEvent();
      Logger.log('Evento eliminado: ' + event.getTitle());
    }
  }
}