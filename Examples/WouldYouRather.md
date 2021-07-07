# Example for Would You Rather

```js
await WouldYouRather({
	message: message,
	embed: {
		title: 'Would you rather... | Weky Development',
		color: '#7289da',
		timestamp: true,
	},
	thinkMessage: 'I am thinking',
	othersMessage: 'Only <@{{author}}> can use the buttons!',
	buttons: { optionA: 'Option A', optionB: 'Option B' },
});
```