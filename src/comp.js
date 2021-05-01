import { h, Fragment, Component, render } from 'preact';

class Counter extends Component {
	state = {
		value: 0,
	};
	setValue(v) {
		this.setState({ value: v });
	}
	render({ }, { value }) {
		return h(Fragment, null, [
			h('div', null, `Counter: ${value}`),
			h('button', {
				onClick: () => this.setValue(value + 1),
			}, 'Increment'),
			h('button', {
				onClick: () => this.setValue(value - 1),
			}, 'Decrement'),
		]);
	}
}

class TodoList extends Component {
	state = {
		todos: [],
		text: '',
	};
	setText = e => {
		this.setState({ text: e.target.value });
	};
	addTodo = () => {
		let { todos, text } = this.state;
		todos = todos.concat({ text });
		this.setState({ todos, text: '' });
	};
	render({ }, { todos, text }) {
		return h('form', {
			onSubmit: this.addTodo,
			action: 'javascript:',
		}, [
			h('input', {
				value: text,
				onInput: this.setText,
			}),
			h('button', { type: 'submit' }, 'Add'),
			h('ul', null, todos.map(todo => {
				return h('li', null, todo.text);
			})),
		]);
	}
}

export { Counter, TodoList };
