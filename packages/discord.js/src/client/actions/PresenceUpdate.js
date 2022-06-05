'use strict';

const Action = require('./Action');
const Events = require('../../util/Events');

class PresenceUpdateAction extends Action {
  handle(data) {
<<<<<<< HEAD:src/client/actions/PresenceUpdate.js
     /*let user = this.client.users.cache.get(data.user.id);
    if (!user && data.user?.username) user = this.client.users._add(data.user);
=======
    let user = this.client.users.cache.get(data.user.id);
    if (!user && data.user.username) user = this.client.users._add(data.user);
>>>>>>> 9720e555340431c3b3ad7bd670ad0ac7eee8865f:packages/discord.js/src/client/actions/PresenceUpdate.js
    if (!user) return;

    if (data.user.username) {
      if (!user._equals(data.user)) this.client.actions.UserUpdate.handle(data.user);
    }

    const guild = this.client.guilds.cache.get(data.guild_id);
    if (!guild) return;

    const oldPresence = guild.presences.cache.get(user.id)?._clone() ?? null;
    let member = guild.members.cache.get(user.id);
    if (!member && data.status !== 'offline') {
      member = guild.members._add({
        user,
        deaf: false,
        mute: false,
      });
      this.client.emit(Events.GuildMemberAvailable, member);
    }
    const newPresence = guild.presences._add(Object.assign(data, { guild }));
<<<<<<< HEAD:src/client/actions/PresenceUpdate.js
    if (this.client.listenerCount(Events.PRESENCE_UPDATE) && !newPresence.equals(oldPresence)) {
     
      this.client.emit(Events.PRESENCE_UPDATE, oldPresence, newPresence);
    }*/
    return {};
=======
    if (this.client.listenerCount(Events.PresenceUpdate) && !newPresence.equals(oldPresence)) {
      /**
       * Emitted whenever a guild member's presence (e.g. status, activity) is changed.
       * @event Client#presenceUpdate
       * @param {?Presence} oldPresence The presence before the update, if one at all
       * @param {Presence} newPresence The presence after the update
       */
      this.client.emit(Events.PresenceUpdate, oldPresence, newPresence);
    }
>>>>>>> 9720e555340431c3b3ad7bd670ad0ac7eee8865f:packages/discord.js/src/client/actions/PresenceUpdate.js
  }
}

module.exports = PresenceUpdateAction;
