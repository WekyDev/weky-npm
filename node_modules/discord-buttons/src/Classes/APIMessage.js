const { APIMessage } = require("discord.js");
const Util = require('../Util');
const MessageButton = require('./MessageButton');

class sendAPICallback extends APIMessage {
    resolveData() {

        if (this.data) {
            return this;
        }

        super.resolveData();

        if (this.options.flags) {
            this.data.flags = parseInt(this.options.flags);
        }

        if (typeof (this.options.ephemeral) === 'boolean' && this.options.ephemeral === true) {
            this.data.flags = 64;
        }

        const buttons = [];
        if (this.options.type === 2) {
            buttons.push(Util.resolveButton(this.options));
        } else if (this.options.buttons) {
            this.options.buttons.map((x) => buttons.push(Util.resolveButton(x)));
        } else if (this.options.button) {
            buttons.push(Util.resolveButton(this.options.button));
        }

        if (buttons.length) {
            this.data.components = [
                {
                    type: 1,
                    components: buttons
                }
            ];
        }

        return this;
    }
}

class APIMessageMain extends APIMessage {
    resolveData() {
        if (this.data) {
            return this;
        }

        super.resolveData();

        const buttons = [];
        if (this.options.type === 2) {
            buttons.push(Util.resolveButton(this.options));
        } else if (this.options.buttons) {
            this.options.buttons.map((x) => buttons.push(Util.resolveButton(x)));
        } else if (this.options.button) {
            buttons.push(Util.resolveButton(this.options.button));
        }

        if (buttons.length) {
            this.data.components = [
                {
                    type: 1,
                    components: buttons
                }
            ];
        }

        return this;
    }
}

module.exports = {
    sendAPICallback,
    APIMessageMain
}