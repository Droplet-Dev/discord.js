'use strict';

const Events = require('../../../util/Events');

module.exports = (client, packet) => {
<<<<<<< HEAD:src/client/websocket/handlers/THREAD_UPDATE.js
  // const { old, updated } = client.actions.ChannelUpdate.handle(packet.d);
  // if (old && updated) {
  /**
   * Emitted whenever a thread is updated - e.g. name change, archive state change, locked state change.
   * @event Client#threadUpdate
   * @param {ThreadChannel} oldThread The thread before the update
   * @param {ThreadChannel} newThread The thread after the update
   */
  // client.emit(Events.THREAD_UPDATE, old, updated);
  // }
=======
  const { old, updated } = client.actions.ChannelUpdate.handle(packet.d);
  if (old && updated) {
    /**
     * Emitted whenever a thread is updated - e.g. name change, archive state change, locked state change.
     * @event Client#threadUpdate
     * @param {ThreadChannel} oldThread The thread before the update
     * @param {ThreadChannel} newThread The thread after the update
     */
    client.emit(Events.ThreadUpdate, old, updated);
  }
>>>>>>> 9720e555340431c3b3ad7bd670ad0ac7eee8865f:packages/discord.js/src/client/websocket/handlers/THREAD_UPDATE.js
};
