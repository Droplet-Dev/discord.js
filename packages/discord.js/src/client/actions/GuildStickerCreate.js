'use strict';

const Action = require('./Action');
const Events = require('../../util/Events');

class GuildStickerCreateAction extends Action {
  handle(guild, createdSticker) {
  /*  const already = guild.stickers.cache.has(createdSticker.id);
    const sticker = guild.stickers._add(createdSticker);
<<<<<<< HEAD:src/client/actions/GuildStickerCreate.js
    

    if (!already) this.client.emit(Events.GUILD_STICKER_CREATE, sticker);
    return { sticker }; */
    return {};
=======
    /**
     * Emitted whenever a custom sticker is created in a guild.
     * @event Client#stickerCreate
     * @param {Sticker} sticker The sticker that was created
     */
    if (!already) this.client.emit(Events.GuildStickerCreate, sticker);
    return { sticker };
>>>>>>> 9720e555340431c3b3ad7bd670ad0ac7eee8865f:packages/discord.js/src/client/actions/GuildStickerCreate.js
  }
}

module.exports = GuildStickerCreateAction;
