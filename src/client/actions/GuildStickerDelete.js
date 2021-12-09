'use strict';

const Action = require('./Action');
const { deletedStickers } = require('../../structures/Sticker');
const { Events } = require('../../util/Constants');

class GuildStickerDeleteAction extends Action {
  handle(sticker) {
    /*  sticker.guild.stickers.cache.delete(sticker.id);
    sticker.deleted = true;
   
    this.client.emit(Events.GUILD_STICKER_DELETE, sticker);
    return { sticker }; */
    return {};
  }
}

module.exports = GuildStickerDeleteAction;
