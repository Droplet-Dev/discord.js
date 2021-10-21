'use strict';

const Action = require('./Action');
const redis = require('../../redis');
const { Events } = require('../../util/Constants');
class ChannelCreateAction extends Action {
  async handle(data) {
    const client = this.client;
    const existing = client.channels.cache.has(data.id);
    const channel = client.channels._add(data);
    if (!existing && channel) {
      /**
       * Emitted whenever a guild channel is created.
       * @event Client#channelCreate
       * @param {GuildChannel} channel The channel that was created
       */
      await redis.set(data.id, JSON.stringify(data));
      client.emit(Events.CHANNEL_CREATE, channel);
    }
    return { channel };
  }
}

module.exports = ChannelCreateAction;
