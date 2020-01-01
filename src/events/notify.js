import EventEmitter from 'events';

class Notify {
  constructor(eventEmitter) {
    this.eventEmitter = eventEmitter;
  }

  register(eventName, handler) {
    this.eventEmitter.on(eventName, handler);
  }

  emit(eventName, args) {
    this.eventEmitter.emit(eventName, ...args);
  }
}

const notify = new Notify(new EventEmitter());

export default notify;
