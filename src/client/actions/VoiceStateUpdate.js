'use strict';

const Action = require('./Action');
const VoiceState = require('../../structures/VoiceState');
const { Events } = require('../../util/Constants');

class VoiceStateUpdate extends Action {
  handle(data) {
    /*  const client = this.client;
    const guild = client.guilds.cache.get(data.guild_id);
    if (guild) {
      // Update the state
      const oldState =
        guild.voiceStates.cache.get(data.user_id)?._clone() ?? new VoiceState(guild, { user_id: data.user_id });

      const newState = guild.voiceStates._add(data);

      // Get the member
      let member = guild.members.cache.get(data.user_id);
      if (member && data.member) {
        member._patch(data.member);
      } else if (data.member?.user && data.member.joined_at) {
        member = guild.members._add(data.member);
      }

      // Emit event
      if (member?.user.id === client.user.id) {
        client.emit('debug', `[VOICE] received voice state update: ${JSON.stringify(data)}`);
        client.voice.onVoiceStateUpdate(data);
      }

     
      client.emit(Events.VOICE_STATE_UPDATE, oldState, newState);
    } */
    return {};

  }
}

module.exports = VoiceStateUpdate;
