class sudo {
    /**
     * @name sudo
     * @kind constructor
     * @param {Object} options options
     * @param {any} [options.message] the discord message
     * @param {String} [options.text] text sent by sudo user
     * @param {any} [options.member] member you want to sudo
     */
    
    constructor(options) {
        if(!options.text) throw new TypeError('Weky Error: Missing argument text');
        if(typeof options.text !== 'string') throw new TypeError('Weky Error: text must be a string');

        if(!options.member) throw new TypeError('Weky Error: Missing argument member');

        if(!options.message) throw new TypeError('Weky Error: Missing argument message');
    
        this.message = options.message;
        this.text = options.text;
        this.member = options.member;
    }
    
    async start() {
        this.message.channel.createWebhook(this.member.user.username, {
            avatar: this.member.user.displayAvatarURL({ dynamic: true })
        }).then(webhook => {
            webhook.send(this.text);
            setTimeout(() => {
                webhook.delete();
            }, 3000);
        })

    }
}

module.exports = sudo;
