'use strict';

const Action = require('./Action');
const Events = require('../../util/Events');

class WebhooksUpdate extends Action {
  handle(data) {
  /*  const client = this.client;
    const channel = client.channels.cache.get(data.channel_id);
  
     * Emitted whenever a channel has its webhooks changed.
     * @event Client#webhookUpdate
<<<<<<< HEAD:src/client/actions/WebhooksUpdate.js
     * @param {TextChannel|NewsChannel} channel The channel that had a webhook update
  
    if (channel) client.emit(Events.WEBHOOKS_UPDATE, channel);
  } */
return {
}}
=======
     * @param {TextChannel|NewsChannel|VoiceChannel} channel The channel that had a webhook update
     */
    if (channel) client.emit(Events.WebhooksUpdate, channel);
  }
>>>>>>> 9720e555340431c3b3ad7bd670ad0ac7eee8865f:packages/discord.js/src/client/actions/WebhooksUpdate.js
}

module.exports = WebhooksUpdate;
