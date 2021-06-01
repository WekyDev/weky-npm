const { MessageComponentTypes } = require('../../Constants');
const { resolveType } = require('../../Util');

class BaseMessageComponent {
    constructor(data) {
        this.type = 'type' in data ? resolveType(data.type) : null;
    }

    static create(data) {
        let component;

        if (typeof (data.type) === 'string') {
            type = MessageComponentTypes[type];
        }

        switch (data.type) {
            case MessageComponentTypes.ACTION_ROW: {
                const MessageActionRow = require('../MessageActionRow');
                component = new MessageActionRow(data);
                break;
            }
            case MessageComponentTypes.BUTTON: {
                const MessageButton = require('../MessageButton');
                component = new MessageButton(data);
                break;
            }
            default:
                throw new TypeError('INVALID_TYPE: valid MessageComponentType');
        }
        return component;
    }
}

module.exports = BaseMessageComponent;