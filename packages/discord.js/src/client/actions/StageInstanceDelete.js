'use strict';

const Action = require('./Action');
const Events = require('../../util/Events');

class StageInstanceDeleteAction extends Action {
  handle(data) {
  /*  const client = this.client;
    const channel = this.getChannel(data);

    if (channel) {
      const stageInstance = channel.guild.stageInstances._add(data);
      if (stageInstance) {
        channel.guild.stageInstances.cache.delete(stageInstance.id);

<<<<<<< HEAD:src/client/actions/StageInstanceDelete.js
       
        client.emit(Events.STAGE_INSTANCE_DELETE, stageInstance);
=======
        /**
         * Emitted whenever a stage instance is deleted.
         * @event Client#stageInstanceDelete
         * @param {StageInstance} stageInstance The deleted stage instance
         */
        client.emit(Events.StageInstanceDelete, stageInstance);
>>>>>>> 9720e555340431c3b3ad7bd670ad0ac7eee8865f:packages/discord.js/src/client/actions/StageInstanceDelete.js

        return { stageInstance };
      }
    } */

    return {};
  }
}

module.exports = StageInstanceDeleteAction;
