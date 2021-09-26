'use strict';

const Action = require('./Action');
const { Events } = require('../../util/Constants');

class ThreadMembersUpdateAction extends Action {
  handle(data) {
  /*  const client = this.client;
    const thread = client.channels.cache.get(data.id);
    if (thread) {
      const old = thread.members.cache.clone();
      thread.memberCount = data.member_count;

      data.added_members?.forEach(rawMember => {
        thread.members._add(rawMember);
      });

      data.removed_member_ids?.forEach(memberId => {
        thread.members.cache.delete(memberId);
      });

   
      client.emit(Events.THREAD_MEMBERS_UPDATE, old, thread.members.cache);
    } */
    return {};
  }
}

module.exports = ThreadMembersUpdateAction;
