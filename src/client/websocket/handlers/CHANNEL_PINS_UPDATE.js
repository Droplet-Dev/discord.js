'use strict';

const { Events } = require('../../../util/Constants');

module.exports = (client, { d: data }) => {
  /* const channel = client.channels.cache.get(data.channel_id);
  const time = new Date(data.last_pin_timestamp);

  if (channel && !Number.isNaN(time.getTime())) {
    // Discord sends null for last_pin_timestamp if the last pinned message was removed
    channel.lastPinTimestamp = time.getTime() ?? null;


    client.emit(Events.CHANNEL_PINS_UPDATE, channel, time);
  } */ return {};
};
