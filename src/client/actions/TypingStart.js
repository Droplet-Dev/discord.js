'use strict';

const Action = require('./Action');
const Typing = require('../../structures/Typing');
const { Events } = require('../../util/Constants');

class TypingStart extends Action {
  handle(data) {
    /*   const channel = this.getChannel(data);
    if (!channel) {
      return;
    }
    if (!TextBasedChannelTypes.includes(channel.type)) {
      this.client.emit(Events.WARN, `Discord sent a typing packet to a ${channel.type} channel ${channel.id}`);
      return;
    }

    const user = this.getUserFromMember(data);
    if (channel && user) {
     
      this.client.emit(Events.TYPING_START, new Typing(channel, user, data));
    } */
    return {};
  }
}

module.exports = TypingStart;
