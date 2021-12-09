'use strict';

const Action = require('./Action');
const { deletedChannels } = require('../../structures/Channel');
const { deletedMessages } = require('../../structures/Message');
const { Events } = require('../../util/Constants');

class ThreadDeleteAction extends Action {
  handle(data) {
   /*  const client = this.client;
    const thread = client.channels.cache.get(data.id);

    if (thread) {
      client.channels._remove(thread.id);
      deletedChannels.add(thread);
      for (const message of thread.messages.cache.values()) {
        deletedMessages.add(message);
      }

   
      client.emit(Events.THREAD_DELETE, thread);
    }

    return { thread }; */
    return {};
  }
}

module.exports = ThreadDeleteAction;
