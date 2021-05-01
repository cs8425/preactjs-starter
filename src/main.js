import { h, Fragment, Component, render } from 'preact';
import { Link, Route, Router } from 'wouter-preact';

import { useHashLocation } from './hashRoute.js';
import { KeepStateRoute } from './keepStateRoute.js';

import { Counter, TodoList } from './comp.js';
// import { Counter, TodoList } from './comp.jsx';

// Create your app
const app = h(Router, { hook: useHashLocation }, [
	h('h1', null, [
		'Hello World!',

	]),
	h('div', { class: 'navlink' }, [
		h(Link, { href: '/' }, 'all'),
		h(Link, { href: '/counter' }, 'Counter'),
		h(Link, { href: '/todolist' }, 'TodoList'),
	]),
	h('hr', null),


	// h(Route, { path: '/' }, h('div', null, [
	// 	h(Counter),
	// 	h(TodoList),
	// ])),
	// h(Route, { path: '/counter', component: Counter }),
	// h(Route, { path: '/todolist', component: TodoList }),


	h(KeepStateRoute, { path: '/' }, h('div', null, [
		h(Counter),
		h(TodoList),
	])),
	h(KeepStateRoute, { path: '/counter' }, h(Counter)),
	h(KeepStateRoute, { path: '/todolist' }, h(TodoList)),
]);

render(app, document.getElementById('app'));
