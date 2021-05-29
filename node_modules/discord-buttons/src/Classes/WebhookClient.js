const { WebhookClient } = require('discord.js');
const APIMessage = require('./APIMessage').APIMessageMain;

module.exports = class extends WebhookClient {
    async editMessage(message, content, options = {}) {
        const { data, files } = await (content instanceof APIMessage ? content : APIMessage.create(this, content, options).resolveData()
        ).resolveFiles();
        const d = await this.client.api
            .webhooks(this.id, this.token)
            .messages(typeof message === 'string' ? message : message.id)
            .patch({ data, files });

        const messageManager = this.client.channels ? (this.channels.cache.get(d.channel_id) ? this.channels.cache.get(d.channel_id).messages : null) : null;
        if (!messageManager) return d;

        const existing = messageManager.cache.get(d.id);
        if (!existing) return messageManager.add(d);

        const clone = existing._clone();
        clone._patch(d);
        return clone;
    }

    async deleteMessage(message) {
        await this.client.api
            .webhooks(this.id, this.token)
            .messages(typeof message === 'string' ? message : message.id)
            .delete();
    }

    async fetchMessage(message, cache = true) {
        const data = await this.client.api.webhooks(this.id, this.token).messages(message).get();
        return this.client.channels ? (this.client.channels.cache.get(data.channel_id) ? this.client.channels.cache.get(data.channel_id).messages.add(data, cache) : null) : data;
    }
}