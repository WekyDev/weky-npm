const Message = require('discord.js').Structures.get('Message');
const ButtonCollector = require('./ButtonCollector');
const MenuCollector = require('./MenuCollector');
const APIMessage = require('./APIMessage').APIMessage;
const BaseMessageComponent = require('./interfaces/BaseMessageComponent');

class ExtendedMessage extends Message {
  _patch(data) {
    super._patch(data);
    if (data.components && Array.isArray(data.components) && data.components.length > 0) {
      this.components = data.components.map((c) => BaseMessageComponent.create(c));
    } else {
      this.components = [];
    }
    return this;
  }

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
    });
  }

  createMenuCollector(filter, options = {}) {
    return new MenuCollector(this, filter, options);
  }

  awaitMenus(filter, options = {}) {
    return new Promise((resolve, reject) => {
      const collector = this.createMenuCollector(filter, options);
      collector.once('end', (menus, reason) => {
        if (options.errors && options.errors.includes(reason)) {
          reject(menus);
        } else {
          resolve(menus);
        }
      });
    });
  }

  reply(content, options) {
    return this.channel.send(
      content instanceof APIMessage ? content : APIMessage.transformOptions(content, options, { reply: this.member || this.author }),
    );
  }

  edit(content, options) {
    if (options === null && options !== undefined) options = { components: null };
    const { data } = content instanceof APIMessage ? content.resolveData() : APIMessage.create(this, content, options).resolveData();
    return this.client.api.channels[this.channel.id].messages[this.id].patch({ data }).then((d) => {
      const clone = this._clone();
      clone._patch(d);
      return clone;
    });
  }
}

module.exports = ExtendedMessage;
