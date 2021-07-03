const TextChannel = require('discord.js').Structures.get('TextChannel');
const Structures = require('discord.js').Structures;
const { APIMessage } = require('./APIMessage');

class ExtendedTextChannel extends TextChannel {
  async send(content, options) {
    const User = Structures.get('User');
    const GuildMember = Structures.get('GuildMember');

    if (this instanceof User || this instanceof GuildMember) {
      return this.createDM().then((dm) => dm.send(content, options));
    }

    let apiMessage;

    if (content instanceof APIMessage) {
      apiMessage = content.resolveData();
    } else {
      apiMessage = APIMessage.create(this, content, options).resolveData();
    }

    if (Array.isArray(apiMessage.data.content)) {
      return Promise.all(apiMessage.data.content.map(this.send.bind(this)));
    }

    const { data, files } = await apiMessage.resolveFiles();
    return this.client.api.channels[this.id].messages.post({ data, files }).then((d) => this.client.actions.MessageCreate.handle(d).message);
  }
}

module.exports = ExtendedTextChannel;
