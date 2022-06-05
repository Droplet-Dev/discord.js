'use strict';

const Events = require('../../../util/Events');

module.exports = (client, { d: data }) => {
<<<<<<< HEAD:src/client/websocket/handlers/CHANNEL_PINS_UPDATE.js
  /* const channel = client.channels.cache.get(data.channel_id);
  const time = new Date(data.last_pin_timestamp);
=======
  const channel = client.channels.cache.get(data.channel_id);
  const time = data.last_pin_timestamp ? Date.parse(data.last_pin_timestamp) : null;
>>>>>>> 9720e555340431c3b3ad7bd670ad0ac7eee8865f:packages/discord.js/src/client/websocket/handlers/CHANNEL_PINS_UPDATE.js

  if (channel) {
    // Discord sends null for last_pin_timestamp if the last pinned message was removed
    channel.lastPinTimestamp = time;

<<<<<<< HEAD:src/client/websocket/handlers/CHANNEL_PINS_UPDATE.js

    client.emit(Events.CHANNEL_PINS_UPDATE, channel, time);
  } */ return {};
=======
    /**
     * Emitted whenever the pins of a channel are updated. Due to the nature of the WebSocket event,
     * not much information can be provided easily here - you need to manually check the pins yourself.
     * @event Client#channelPinsUpdate
     * @param {TextBasedChannels} channel The channel that the pins update occurred in
     * @param {Date} time The time of the pins update
     */
    client.emit(Events.ChannelPinsUpdate, channel, time);
  }
>>>>>>> 9720e555340431c3b3ad7bd670ad0ac7eee8865f:packages/discord.js/src/client/websocket/handlers/CHANNEL_PINS_UPDATE.js
};
