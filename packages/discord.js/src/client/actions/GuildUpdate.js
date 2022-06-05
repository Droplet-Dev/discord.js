'use strict';

const Action = require('./Action');
const Events = require('../../util/Events');

class GuildUpdateAction extends Action {
  handle(data) {
    const client = this.client;
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
    }
    const guild = client.guilds.cache.get(data.id);
    if (guild) {
      const old = guild._update(data);
      /**
       * Emitted whenever a guild is updated - e.g. name change.
       * @event Client#guildUpdate
       * @param {Guild} oldGuild The guild before the update
       * @param {Guild} newGuild The guild after the update
       */
      client.emit(Events.GuildUpdate, old, guild);
      return {
        old,
        updated: guild,
      };
    }

    return {
      old: null,
      updated: null,
    };
  }
}

module.exports = GuildUpdateAction;
