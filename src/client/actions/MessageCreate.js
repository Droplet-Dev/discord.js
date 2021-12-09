'use strict';

const Action = require('./Action');
const { Events } = require('../../util/Constants');

let deprecationEmitted = false;

class MessageCreateAction extends Action {
  handle(data) {
    /* const client = this.client;
    const channel = this.getChannel(data);
    if (channel) {
      if (!channel.isText()) return {};

      const existing = channel.messages.cache.get(data.id);
      if (existing) return { message: existing };
      const message = channel.messages._add(data);
      channel.lastMessageId = data.id;

      client.emit(Events.MESSAGE_CREATE, message);

     
      return { message };
    }*/
    return {};
  }
}

module.exports = MessageCreateAction;
