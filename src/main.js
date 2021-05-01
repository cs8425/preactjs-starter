import { h, Fragment, Component, render } from 'preact';

// import { Counter, TodoList } from './comp.js';
import { Counter, TodoList } from './comp.jsx';

// Create your app
const app = h(Fragment, null, [
	h('h1', null, [
		'Hello World!',

	]),
	h('div', null, [
		h(Counter),
		h(TodoList),
	]),
]);

render(app, document.getElementById('app'));
