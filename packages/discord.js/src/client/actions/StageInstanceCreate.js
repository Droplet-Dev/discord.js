'use strict';

const Action = require('./Action');
const Events = require('../../util/Events');

class StageInstanceCreateAction extends Action {
  handle(data) {
   /* const client = this.client;
    const channel = this.getChannel(data);

    if (channel) {
      const stageInstance = channel.guild.stageInstances._add(data);

<<<<<<< HEAD:src/client/actions/StageInstanceCreate.js
     
      client.emit(Events.STAGE_INSTANCE_CREATE, stageInstance);
=======
      /**
       * Emitted whenever a stage instance is created.
       * @event Client#stageInstanceCreate
       * @param {StageInstance} stageInstance The created stage instance
       */
      client.emit(Events.StageInstanceCreate, stageInstance);
>>>>>>> 9720e555340431c3b3ad7bd670ad0ac7eee8865f:packages/discord.js/src/client/actions/StageInstanceCreate.js

      return { stageInstance };
    } */

    return {};
  }
}

module.exports = StageInstanceCreateAction;
