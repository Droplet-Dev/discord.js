'use strict';

const Action = require('./Action');
const Events = require('../../util/Events');

class MessageDeleteAction extends Action {
  handle(data) {
    /*
    const client = this.client;
    const channel = this.getChannel(data);
    let message;
    if (channel) {
      if (!channel.isTextBased()) return {};

      message = this.getMessage(data, channel);
      if (message) {
        channel.messages.cache.delete(message.id);
<<<<<<< HEAD:src/client/actions/MessageDelete.js
        message.deleted = true;
        
        client.emit(Events.MESSAGE_DELETE, message);
=======
        /**
         * Emitted whenever a message is deleted.
         * @event Client#messageDelete
         * @param {Message} message The deleted message
         */
        client.emit(Events.MessageDelete, message);
>>>>>>> 9720e555340431c3b3ad7bd670ad0ac7eee8865f:packages/discord.js/src/client/actions/MessageDelete.js
      }
    }

    return { message };
    */
    return {};
  }
}

module.exports = MessageDeleteAction;
