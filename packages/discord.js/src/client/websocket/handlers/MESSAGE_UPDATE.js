'use strict';

const Events = require('../../../util/Events');

module.exports = (client, packet) => {
<<<<<<< HEAD:src/client/websocket/handlers/MESSAGE_UPDATE.js
  // const { old, updated } = client.actions.MessageUpdate.handle(packet.d);
  // if (old && updated) {
  /**
   * Emitted whenever a message is updated - e.g. embed or content change.
   * @event Client#messageUpdate
   * @param {Message} oldMessage The message before the update
   * @param {Message} newMessage The message after the update
   */
  //  client.emit(Events.MESSAGE_UPDATE, old, updated);
  // }
=======
  const { old, updated } = client.actions.MessageUpdate.handle(packet.d);
  if (old && updated) {
    /**
     * Emitted whenever a message is updated - e.g. embed or content change.
     * @event Client#messageUpdate
     * @param {Message} oldMessage The message before the update
     * @param {Message} newMessage The message after the update
     */
    client.emit(Events.MessageUpdate, old, updated);
  }
>>>>>>> 9720e555340431c3b3ad7bd670ad0ac7eee8865f:packages/discord.js/src/client/websocket/handlers/MESSAGE_UPDATE.js
};
