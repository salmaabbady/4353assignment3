const events = [];

const eventService = {
  getEvents() {
    return events;
  },

  addEvent(event) {
    event.id = events.length + 1;
    events.push(event);
    return event;
  },
};

export default eventService;
