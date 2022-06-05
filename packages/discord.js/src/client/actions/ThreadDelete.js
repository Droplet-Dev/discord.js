'use strict';

const Action = require('./Action');
const Events = require('../../util/Events');

class ThreadDeleteAction extends Action {
  handle(data) {
   /*  const client = this.client;
    const thread = client.channels.cache.get(data.id);

    if (thread) {
      client.channels._remove(thread.id);

<<<<<<< HEAD:src/client/actions/ThreadDelete.js
   
      client.emit(Events.THREAD_DELETE, thread);
=======
      /**
       * Emitted whenever a thread is deleted.
       * @event Client#threadDelete
       * @param {ThreadChannel} thread The thread that was deleted
       */
      client.emit(Events.ThreadDelete, thread);
>>>>>>> 9720e555340431c3b3ad7bd670ad0ac7eee8865f:packages/discord.js/src/client/actions/ThreadDelete.js
    }

    return { thread }; */
    return {};
  }
}

module.exports = ThreadDeleteAction;
