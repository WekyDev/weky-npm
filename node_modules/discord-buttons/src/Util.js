const styles = {
    'blurple': 1,
    'gray': 2,
    'green': 3,
    'red': 4,
    'url': 5
};

module.exports = {
    resolveStyle(style) {

        if (!style || style === undefined || style === null) throw new TypeError('NO_BUTTON_STYLE: Please provide button style');

        if (!styles[style] || styles[style] === undefined || styles[style] === null) throw new TypeError('INVALID_BUTTON_STYLE: An invalid button styles was provided');

        return styles[style] || style;
    },
    resolveButton(data) {

        if (!data.style) throw new TypeError('NO_BUTTON_STYLE: Please provide button style');

        if (!data.label) throw new TypeError('NO_BUTTON_LABEL: Please provide button label');

        if (data.style === 5) {
            if (!data.url) throw new TypeError('NO_BUTTON_URL: You provided url style, you must provide an URL');
        } else {
            if (!data.custom_id) throw new TypeError('NO_BUTTON_ID: Please provide button id');
        }

        return {
            style: data.style,
            label: data.label,
            disabled: Boolean(data.disabled),
            url: data.url,
            custom_id: data.custom_id,
            type: 2
        }
    },
    checkDjsVersion() {
        let version = require('discord.js').version.split('');

        if (parseInt(version[0] + version[1]) > 11) {
            return true;
        } else {
            return false;
        }
    }
}