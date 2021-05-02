import { h, Fragment, Component, render } from 'preact';
import { Link, Route, Router } from 'wouter-preact';

// router的功能強化(hash URL & 簡易版組件狀態保持)
import { useHashLocation } from './hashRoute.js';
import { KeepStateRoute } from './keepStateRoute.js';

// 引入組件
// import { Counter, TodoList } from './comp.js';
import { Counter, TodoList } from './comp.jsx';

// Create your app
/*const app = h(Router, { hook: useHashLocation }, [
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
]);*/

// jsx
const app = (
	<Router hook={useHashLocation}>
		<h1>Hello World!</h1>
		<div class="navlink">
			<Link href="/">all</Link>
			<Link href="/counter">Counter</Link>
			<Link href="/todolist">TodoList</Link>
		</div>
		<hr/>
		<KeepStateRoute path="/">
			<Counter></Counter>
			<TodoList></TodoList>
		</KeepStateRoute>
		<KeepStateRoute path="/counter">
			<Counter></Counter>
		</KeepStateRoute>
		<KeepStateRoute path="/todolist">
			<TodoList></TodoList>
		</KeepStateRoute>
	</Router>
);

render(app, document.getElementById('app'));
