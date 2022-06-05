'use strict';

const Action = require('./Action');
const Events = require('../../util/Events');

class ThreadCreateAction extends Action {
  handle(data) {
 /*   const client = this.client;
    const existing = client.channels.cache.has(data.id);
    const thread = client.channels._add(data);
    if (!existing && thread) {
<<<<<<< HEAD:src/client/actions/ThreadCreate.js
   
      client.emit(Events.THREAD_CREATE, thread);
=======
      /**
       * Emitted whenever a thread is created or when the client user is added to a thread.
       * @event Client#threadCreate
       * @param {ThreadChannel} thread The thread that was created
       * @param {boolean} newlyCreated Whether the thread was newly created
       */
      client.emit(Events.ThreadCreate, thread, data.newly_created ?? false);
>>>>>>> 9720e555340431c3b3ad7bd670ad0ac7eee8865f:packages/discord.js/src/client/actions/ThreadCreate.js
    }
    return { thread }; */
    return {};
  }
}

module.exports = ThreadCreateAction;
