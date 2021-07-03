const { MessageEmbed, WebhookClient } = require('discord.js');
const APIMessage = require('./APIMessage').sendAPICallback;

class ExtendedWebhookClient extends WebhookClient {
  async editMessage(message, content, options) {
    if (content ? content.embed : null instanceof MessageEmbed) {
      options
        ? options.embeds && Array.isArray(options.embeds)
          ? options.embeds.push(content.embed)
          : (options.embeds = [content.embed])
        : (options = {}) && (options.embeds = [content.embed]);
      content = null;
    }

    if (options && options.embed) {
      options
        ? options.embeds && Array.isArray(options.embeds)
          ? options.embeds.push(options.embed)
          : (options.embeds = [options.embed])
        : (options = {}) && (options.embeds = [options.embed]);
      options.embed = null;
    }

    let apiMessage;

    if (content instanceof APIMessage) {
      apiMessage = content.resolveData();
    } else {
      apiMessage = APIMessage.create(this, content, options).resolveData();
    }

    const { data, files } = await apiMessage.resolveFiles();

    return this.client.api
      .webhooks(this.id, this.token)
      .messages(typeof message === 'string' ? message : message.id)
      .patch({ data, files });
  }

  async deleteMessage(message) {
    await this.client.api
      .webhooks(this.id, this.token)
      .messages(typeof message === 'string' ? message : message.id)
      .delete();
  }

  async fetchMessage(message, cache = true) {
    const data = await this.client.api.webhooks(this.id, this.token).messages(message).get();
    return this.client.channels
      ? this.client.channels.cache.get(data.channel_id)
        ? this.client.channels.cache.get(data.channel_id).messages.add(data, cache)
        : null
      : data;
  }
}

module.exports = ExtendedWebhookClient;
