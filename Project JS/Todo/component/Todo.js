import html from '../core.js';
import { connect } from '../store.js'
import TodoItem from './TodoItem.js'


function Todo( {todos} ){
    // console.log(todos)
    return html `
    <section class="main">
		<input id="toggle-all" class="toggle-all" type="checkbox">
		<label for="toggle-all">Mark all as complete</label>
		<ul class="todo-list">
        ${todos && todos.map(todo => TodoItem({todo}))}

		</ul>
	</section>
    `
}

export default connect()(Todo);