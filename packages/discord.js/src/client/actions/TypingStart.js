'use strict';

const Action = require('./Action');
const Typing = require('../../structures/Typing');
const Events = require('../../util/Events');

class TypingStart extends Action {
  handle(data) {
<<<<<<< HEAD:src/client/actions/TypingStart.js
    /*   const channel = this.getChannel(data);
    if (!channel) {
      return;
    }
    if (!TextBasedChannelTypes.includes(channel.type)) {
      this.client.emit(Events.WARN, `Discord sent a typing packet to a ${channel.type} channel ${channel.id}`);
=======
    const channel = this.getChannel(data);
    if (!channel) return;

    if (!channel.isTextBased()) {
      this.client.emit(Events.Warn, `Discord sent a typing packet to a ${channel.type} channel ${channel.id}`);
>>>>>>> 9720e555340431c3b3ad7bd670ad0ac7eee8865f:packages/discord.js/src/client/actions/TypingStart.js
      return;
    }

    const user = this.getUserFromMember(data);
<<<<<<< HEAD:src/client/actions/TypingStart.js
    if (channel && user) {
     
      this.client.emit(Events.TYPING_START, new Typing(channel, user, data));
    } */
    return {};
=======
    if (user) {
      /**
       * Emitted whenever a user starts typing in a channel.
       * @event Client#typingStart
       * @param {Typing} typing The typing state
       */
      this.client.emit(Events.TypingStart, new Typing(channel, user, data));
    }
>>>>>>> 9720e555340431c3b3ad7bd670ad0ac7eee8865f:packages/discord.js/src/client/actions/TypingStart.js
  }
}

module.exports = TypingStart;
