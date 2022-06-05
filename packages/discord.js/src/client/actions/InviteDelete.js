'use strict';

const Action = require('./Action');
const Invite = require('../../structures/Invite');
const Events = require('../../util/Events');

class InviteDeleteAction extends Action {
  handle(data) {
  /*  const client = this.client;
    const channel = client.channels.cache.get(data.channel_id);
    const guild = client.guilds.cache.get(data.guild_id);
    if (!channel) return false;

    const inviteData = Object.assign(data, { channel, guild });
    const invite = new Invite(client, inviteData);
    guild.invites.cache.delete(invite.code);

<<<<<<< HEAD:src/client/actions/InviteDelete.js
  
    client.emit(Events.INVITE_DELETE, invite);
    return { invite }; */
    return {};
=======
    /**
     * Emitted when an invite is deleted.
     * <info> This event only triggers if the client has `MANAGE_GUILD` permissions for the guild,
     * or `MANAGE_CHANNELS` permissions for the channel.</info>
     * @event Client#inviteDelete
     * @param {Invite} invite The invite that was deleted
     */
    client.emit(Events.InviteDelete, invite);
    return { invite };
>>>>>>> 9720e555340431c3b3ad7bd670ad0ac7eee8865f:packages/discord.js/src/client/actions/InviteDelete.js
  }
}

module.exports = InviteDeleteAction;
