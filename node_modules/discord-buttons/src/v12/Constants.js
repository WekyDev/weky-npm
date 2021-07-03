exports.MessageComponentTypes = createEnum([null, 'ACTION_ROW', 'BUTTON', 'SELECT_MENU']);

exports.MessageButtonStyles = createEnum([null, 'blurple', 'grey', 'green', 'red', 'url']);

exports.MessageButtonStylesAliases = createEnum([null, 'PRIMARY', 'SECONDARY', 'SUCCESS', 'DESTRUCTIVE', 'LINK']);

exports.InteractionReplyTypes = createEnum([
  null,
  'PONG',
  null,
  null,
  'CHANNEL_MESSAGE_WITH_SOURCE',
  'DEFFERED_CHANNEL_MESSAGE_WITH_SOURCE',
  'DEFFERED_UPDATE_MESSAGE',
  'UPDATE_MESSAGE',
]);

function createEnum(keys) {
  const obj = {};
  for (const [index, key] of keys.entries()) {
    if (key === null) continue;
    obj[key] = index;
    obj[index] = key;
  }
  return obj;
}
