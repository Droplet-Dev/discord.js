'use strict';

const Action = require('./Action');
const GuildBan = require('../../structures/GuildBan');
const Events = require('../../util/Events');

class GuildBanRemove extends Action {
  handle(data) {
   /* const client = this.client;
    const guild = client.guilds.cache.get(data.guild_id);

    if (guild) {
      const ban = guild.bans.cache.get(data.user.id) ?? new GuildBan(client, data, guild);
      guild.bans.cache.delete(ban.user.id);
<<<<<<< HEAD:src/client/actions/GuildBanRemove.js
      client.emit(Events.GUILD_BAN_REMOVE, ban);
    } */
    return {};
=======
      client.emit(Events.GuildBanRemove, ban);
    }
>>>>>>> 9720e555340431c3b3ad7bd670ad0ac7eee8865f:packages/discord.js/src/client/actions/GuildBanRemove.js
  }
}

module.exports = GuildBanRemove;
