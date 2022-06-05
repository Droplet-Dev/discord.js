'use strict';

const Action = require('./Action');
const Events = require('../../util/Events');

class GuildStickerDeleteAction extends Action {
  handle(sticker) {
<<<<<<< HEAD:src/client/actions/GuildStickerDelete.js
    /*  sticker.guild.stickers.cache.delete(sticker.id);
    sticker.deleted = true;
   
    this.client.emit(Events.GUILD_STICKER_DELETE, sticker);
    return { sticker }; */
    return {};
=======
    sticker.guild.stickers.cache.delete(sticker.id);
    /**
     * Emitted whenever a custom sticker is deleted in a guild.
     * @event Client#stickerDelete
     * @param {Sticker} sticker The sticker that was deleted
     */
    this.client.emit(Events.GuildStickerDelete, sticker);
    return { sticker };
>>>>>>> 9720e555340431c3b3ad7bd670ad0ac7eee8865f:packages/discord.js/src/client/actions/GuildStickerDelete.js
  }
}

module.exports = GuildStickerDeleteAction;
