'use strict';

const { Events, Status } = require('../../../util/Constants');

module.exports = (client, { d: data }, shard) => {
  data = {
    lazy: data.lazy,
    large: data.large,
    name: data.name,
    members: data.members,
    emojis: data.emojis,
    channels: data.channels,
    unavailable: data.unavailable,
    owner_id: data.owner_id,
    id: data.id,
    roles: data.roles,
  };
  let guild = client.guilds.cache.get(data.id);
  if (guild) {
    if (!guild.available && !data.unavailable) {
      // A newly available guild
      guild._patch(data);
    }
  } else {
    // A new guild
    data.shardId = shard.id;
    guild = client.guilds._add(data);
    if (client.ws.status === Status.READY) {
      /**
       * Emitted whenever the client joins a guild.
       * @event Client#guildCreate
       * @param {Guild} guild The created guild
       */
      client.emit(Events.GUILD_CREATE, guild);
    }
  }
};
