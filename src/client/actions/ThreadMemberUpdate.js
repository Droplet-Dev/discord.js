'use strict';

const Action = require('./Action');
const { Events } = require('../../util/Constants');

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
      
      
      client.emit(Events.THREAD_MEMBER_UPDATE, old, member);
    } */
    return {};
  }
}

module.exports = ThreadMemberUpdateAction;
