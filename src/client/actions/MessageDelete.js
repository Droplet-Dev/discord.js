'use strict';

const Action = require('./Action');
const { deletedMessages } = require('../../structures/Message');
const { Events } = require('../../util/Constants');

class MessageDeleteAction extends Action {
  handle(data) {
    /*
    const client = this.client;
    const channel = this.getChannel(data);
    let message;
    if (channel) {
      if (!channel.isText()) return {};

      message = this.getMessage(data, channel);
      if (message) {
        channel.messages.cache.delete(message.id);
        message.deleted = true;
        
        client.emit(Events.MESSAGE_DELETE, message);
      }
    }

    return { message };
    */
    return {};
  }
}

module.exports = MessageDeleteAction;
