const { Structures } = require("discord.js");
const Message = require('./Classes/Message');
const TextChannel = require('./Classes/TextChannel');
const DMChannel = require('./Classes/DMChannel');
const MessageButton = require('./Classes/MessageButton');
const INTERACTION_CREATE = require('./Classes/INTERACTION_CREATE.js');

module.exports = (client) => {

    if (require('./Util').checkDjsVersion() === false) {
        throw new Error('The discord.js version must be v12 or high');
    }

    Structures.extend("Message", () => Message);
    Structures.extend("TextChannel", () => TextChannel);
    Structures.extend("DMChannel", () => DMChannel);

    client.ws.on('INTERACTION_CREATE', data => {

        if (!data.message) return;

        if (data.data.component_type === 2) {
            const button = new INTERACTION_CREATE(client, data);

            client.emit('clickButton', button);
        }
    });

    return {
        MessageButton: MessageButton
    };
}

module.exports.MessageButton = MessageButton;