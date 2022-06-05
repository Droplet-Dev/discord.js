'use strict';

const Action = require('./Action');
const Events = require('../../util/Events');

class MessageCreateAction extends Action {
  handle(data) {
    /* const client = this.client;
    const channel = this.getChannel(data);
    if (channel) {
      if (!channel.isTextBased()) return {};

      const existing = channel.messages.cache.get(data.id);
      if (existing) return { message: existing };
      const message = channel.messages._add(data);
      channel.lastMessageId = data.id;

<<<<<<< HEAD:src/client/actions/MessageCreate.js
      client.emit(Events.MESSAGE_CREATE, message);

     
=======
      /**
       * Emitted whenever a message is created.
       * @event Client#messageCreate
       * @param {Message} message The created message
       */
      client.emit(Events.MessageCreate, message);

>>>>>>> 9720e555340431c3b3ad7bd670ad0ac7eee8865f:packages/discord.js/src/client/actions/MessageCreate.js
      return { message };
    }*/
    return {};
  }
}

module.exports = MessageCreateAction;
