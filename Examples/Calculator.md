# Example for Calculator

```js
await Calculator({
    message: message,
    embed: {
        title: 'Calculator | Weky Development',
        color: '#7289da',
        footer: '©️ Weky Development',
        timestamp: true
    },
    disabledQuery: 'Calculator is disabled!',
    invalidQuery: 'The provided equation is invalid!',
    othersMessage: 'Only <@{{author}}> can use the buttons!'
});
```