'use strict';

const { Collection } = require('@discordjs/collection');
const Action = require('./Action');
const Events = require('../../util/Events');

class MessageDeleteBulkAction extends Action {
  handle(data) {
    /*
    const client = this.client;
    const channel = client.channels.cache.get(data.channel_id);

    if (channel) {
      if (!channel.isTextBased()) return {};

      const ids = data.ids;
      const messages = new Collection();
      for (const id of ids) {
        const message = this.getMessage(
          {
            id,
            guild_id: data.guild_id,
          },
          channel,
          false,
        );
        if (message) {
          messages.set(message.id, message);
          channel.messages.cache.delete(id);
        }
      }

<<<<<<< HEAD:src/client/actions/MessageDeleteBulk.js
   
      if (messages.size > 0) client.emit(Events.MESSAGE_BULK_DELETE, messages);
=======
      /**
       * Emitted whenever messages are deleted in bulk.
       * @event Client#messageDeleteBulk
       * @param {Collection<Snowflake, Message>} messages The deleted messages, mapped by their id
       * @param {TextBasedChannels} channel The channel that the messages were deleted in
       */
      if (messages.size > 0) client.emit(Events.MessageBulkDelete, messages, channel);
>>>>>>> 9720e555340431c3b3ad7bd670ad0ac7eee8865f:packages/discord.js/src/client/actions/MessageDeleteBulk.js
      return { messages };
    }*/
    return {};
    
  }
}

module.exports = MessageDeleteBulkAction;
