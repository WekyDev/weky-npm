const { Structures } = require("discord.js");
const ButtonCollector = require('./ButtonCollector');
const APIMessage = require('./APIMessage').APIMessageMain;

class Message extends Structures.get("Message") {

    createButtonCollector(filter, options = {}) {
        return new ButtonCollector(this, filter, options);
    }

    awaitButtons(filter, options = {}) {
        return new Promise((resolve, reject) => {
            const collector = this.createButtonCollector(filter, options);
            collector.once('end', (buttons, reason) => {
                if (options.errors && options.errors.includes(reason)) {
                    reject(buttons);
                } else {
                    resolve(buttons);
                }
            });
        })
    }

    reply(content, options) {
        return this.channel.send(
            content instanceof APIMessage
                ? content
                : APIMessage.transformOptions(content, options, { reply: this.member || this.author }),
        );
    }

    edit(content, options) {
        const { data } =
            content instanceof APIMessage ? content.resolveData() : APIMessage.create(this, content, options).resolveData();
        return this.client.api.channels[this.channel.id].messages[this.id].patch({ data }).then(d => {
            const clone = this._clone();
            clone._patch(d);
            return clone;
        });
    }

}

module.exports = Message;