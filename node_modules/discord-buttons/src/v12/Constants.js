exports.MessageComponentTypes = createEnum([null, 'ACTION_ROW', 'BUTTON', 'SELECT_MENU']);

exports.MessageButtonStyles = createEnum([null, 'blurple', 'grey', 'green', 'red', 'url']);
exports.MessageButtonStylesAliases = createEnum([null, 'PRIMARY', 'SECONDARY', 'SUCCESS', 'DESTRUCTIVE', 'LINK']);

function createEnum(keys) {
    const obj = {};
    for (const [index, key] of keys.entries()) {
        if (key === null) continue;
        obj[key] = index;
        obj[index] = key;
    }
    return obj;
}