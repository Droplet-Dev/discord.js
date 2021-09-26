'use strict';

const Action = require('./Action');
const { Events } = require('../../util/Constants');

class ThreadCreateAction extends Action {
  handle(data) {
 /*   const client = this.client;
    const existing = client.channels.cache.has(data.id);
    const thread = client.channels._add(data);
    if (!existing && thread) {
   
      client.emit(Events.THREAD_CREATE, thread);
    }
    return { thread }; */
    return {};
  }
}

module.exports = ThreadCreateAction;
