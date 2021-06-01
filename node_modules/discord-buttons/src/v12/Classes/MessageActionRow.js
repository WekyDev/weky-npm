const { MessageComponentTypes } = require('../Constants');
const BaseMessageComponent = require('./interfaces/BaseMessageComponent');

class MessageActionRow  extends BaseMessageComponent {

    constructor(data = {}) {
        super({ type: 'ACTION_ROW' });
        this.setup(data);
    }

    setup(data) {
        if ('component' in data) {
            this.component = BaseMessageComponent.create(component, null, true);
        }
        
        this.components = [];
        if ('components' in data) {
            this.components = data.components.map(c => BaseMessageComponent.create(c, null, true));
        }

        return this;
    }

    addComponents(...components) {
        this.components.push(...components.flat(2).map(c => BaseMessageComponent.create(c, null, true)));
        return this;
    }

    addComponent(component) {
        return this.addComponents(component);
    }

    toJSON() {
        return {
            components: this.components.map(c => c.toJSON()),
            type: MessageComponentTypes[this.type],
        };
    }
}

module.exports = MessageActionRow;
