'use strict';

const Action = require('./Action');
const Events = require('../../util/Events');

class InviteCreateAction extends Action {
  handle(data) {
   /* const client = this.client;
    const channel = client.channels.cache.get(data.channel_id);
    const guild = client.guilds.cache.get(data.guild_id);
    if (!channel) return false;

    const inviteData = Object.assign(data, { channel, guild });
    const invite = guild.invites._add(inviteData);
<<<<<<< HEAD:src/client/actions/InviteCreate.js
    client.emit(Events.INVITE_CREATE, invite);
    return { invite }; */
    return {};
=======

    /**
     * Emitted when an invite is created.
     * <info> This event only triggers if the client has `MANAGE_GUILD` permissions for the guild,
     * or `MANAGE_CHANNELS` permissions for the channel.</info>
     * @event Client#inviteCreate
     * @param {Invite} invite The invite that was created
     */
    client.emit(Events.InviteCreate, invite);
    return { invite };
>>>>>>> 9720e555340431c3b3ad7bd670ad0ac7eee8865f:packages/discord.js/src/client/actions/InviteCreate.js
  }
}

module.exports = InviteCreateAction;
