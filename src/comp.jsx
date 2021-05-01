import { h, Fragment, Component, render } from 'preact';

class Counter extends Component {
	state = {
		value: 0,
	};
	setValue(v) {
		this.setState({ value: v });
	}
	render({ }, { value }) {
		return (
			<>
				<div>Counter: {value}</div>
				<button onClick={() => this.setValue(value + 1)}>Increment</button>
				<button onClick={() => this.setValue(value - 1)}>Decrement</button>
			</>
		);
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
		return (
			<form onSubmit={this.addTodo} action="javascript:">
				<input value={text} onInput={this.setText} />
				<button type="submit">Add</button>
				<ul>
					{todos.map(todo => (
						<li>{todo.text}</li>
					))}
				</ul>
			</form>
		);
	}
}

export { Counter, TodoList };
