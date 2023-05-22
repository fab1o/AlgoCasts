// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  events = [];

  // Register an event handler
  on(eventName, callback) {
    this.events.push({
      eventName,
      callback
    });
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    this.events
      .filter((e) => e.eventName === eventName)
      .forEach((e) => e.callback());
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    this.events = this.events.filter((e) => e.eventName !== eventName);
  }
}

module.exports = Events;
