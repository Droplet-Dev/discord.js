'use strict';

const Action = require('./Action');
const Events = require('../../util/Events');

class StageInstanceUpdateAction extends Action {
  handle(data) {
   /* const client = this.client;
    const channel = this.getChannel(data);

    if (channel) {
      const oldStageInstance = channel.guild.stageInstances.cache.get(data.id)?._clone() ?? null;
      const newStageInstance = channel.guild.stageInstances._add(data);

<<<<<<< HEAD:src/client/actions/StageInstanceUpdate.js
      client.emit(Events.STAGE_INSTANCE_UPDATE, oldStageInstance, newStageInstance);
=======
      /**
       * Emitted whenever a stage instance gets updated - e.g. change in topic or privacy level
       * @event Client#stageInstanceUpdate
       * @param {?StageInstance} oldStageInstance The stage instance before the update
       * @param {StageInstance} newStageInstance The stage instance after the update
       */
      client.emit(Events.StageInstanceUpdate, oldStageInstance, newStageInstance);
>>>>>>> 9720e555340431c3b3ad7bd670ad0ac7eee8865f:packages/discord.js/src/client/actions/StageInstanceUpdate.js

      return { oldStageInstance, newStageInstance };
    } */

    return {};
  }
}

module.exports = StageInstanceUpdateAction;
