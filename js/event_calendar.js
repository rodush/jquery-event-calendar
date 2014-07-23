// TODO: Implement custom calendar based on jQuery.datepicker plugin using the code below.

// Example of how to add styles see here - http://designmodo.com/calendar-jquery-css3/

var events = [
  { Title: "Tomorrow Is OKay!", Date: new Date("07/23/2014") },
  { Title: "Some past Event...", Date: new Date("07/17/2014") },
  { Title: "Roman Dushko's BirthDay!!!", Date: new Date("08/05/2014") }
];

$("#events_calendar").datepicker({
  showOtherMonths: true,
  beforeShowDay: function(date) {
    var result = [true, '', null];
    var matching = $.grep(events, function(event) {
      return event.Date.valueOf() === date.valueOf();
    });

    if (matching.length) {
      result = [true, 'has-event', null];
    }
    return result;
  },
  onSelect: function(dateText) {
    var date,
        selectedDate = new Date(dateText),
        i = 0,
        event = null;

    while (i < events.length && !event) {
      date = events[i].Date;

      if (selectedDate.valueOf() === date.valueOf()) {
        event = events[i];
      }
      i++;
    }
    if (event) {
      alert(event.Title);
    }
  }
});
