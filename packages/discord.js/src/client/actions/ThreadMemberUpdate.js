'use strict';

const Action = require('./Action');
const Events = require('../../util/Events');

class ThreadMemberUpdateAction extends Action {
  handle(data) {
 /*   const client = this.client;
    // Discord sends the thread id as id in this object
    const thread = client.channels.cache.get(data.id);
    if (thread) {
      const member = thread.members.cache.get(data.user_id);
      if (!member) {
        const newMember = thread.members._add(data);
        return { newMember };
      }
      const old = member._update(data);
<<<<<<< HEAD:src/client/actions/ThreadMemberUpdate.js
      
      
      client.emit(Events.THREAD_MEMBER_UPDATE, old, member);
    } */
=======
      /**
       * Emitted whenever the client user's thread member is updated.
       * @event Client#threadMemberUpdate
       * @param {ThreadMember} oldMember The member before the update
       * @param {ThreadMember} newMember The member after the update
       */
      client.emit(Events.ThreadMemberUpdate, old, member);
    }
>>>>>>> 9720e555340431c3b3ad7bd670ad0ac7eee8865f:packages/discord.js/src/client/actions/ThreadMemberUpdate.js
    return {};
  }
}

module.exports = ThreadMemberUpdateAction;
