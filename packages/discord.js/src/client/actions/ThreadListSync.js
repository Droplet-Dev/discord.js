'use strict';

const { Collection } = require('@discordjs/collection');
const Action = require('./Action');
const Events = require('../../util/Events');

class ThreadListSyncAction extends Action {
  handle(data) {
     /*const client = this.client;

    const guild = client.guilds.cache.get(data.guild_id);
    if (!guild) return {};

    if (data.channel_ids) {
      for (const id of data.channel_ids) {
        const channel = client.channels.resolve(id);
        if (channel) this.removeStale(channel);
      }
    } else {
      for (const channel of guild.channels.cache.values()) {
        this.removeStale(channel);
      }
    }

    const syncedThreads = data.threads.reduce((coll, rawThread) => {
      const thread = client.channels._add(rawThread);
      return coll.set(thread.id, thread);
    }, new Collection());

    for (const rawMember of Object.values(data.members)) {
      // Discord sends the thread id as id in this object
      const thread = client.channels.cache.get(rawMember.id);
      if (thread) {
        thread.members._add(rawMember);
      }
    }

<<<<<<< HEAD:src/client/actions/ThreadListSync.js
   
    client.emit(Events.THREAD_LIST_SYNC, syncedThreads);
=======
    /**
     * Emitted whenever the client user gains access to a text or news channel that contains threads
     * @event Client#threadListSync
     * @param {Collection<Snowflake, ThreadChannel>} threads The threads that were synced
     * @param {Guild} guild The guild that the threads were synced in
     */
    client.emit(Events.ThreadListSync, syncedThreads, guild);
>>>>>>> 9720e555340431c3b3ad7bd670ad0ac7eee8865f:packages/discord.js/src/client/actions/ThreadListSync.js

    return {
      syncedThreads,
    }; 
  }

  removeStale(channel) {
    channel.threads?.cache.forEach(thread => {
      if (!thread.archived) {
        this.client.channels._remove(thread.id);
      }
    }); */
    return {};
  }
}

module.exports = ThreadListSyncAction;
