import html from '../core.js';
import { connect } from '../store.js'

function TodoItem( {todo} ){
    // console.log(todo);
    return html `
    <li class="${todo.completed && 'completed'}">
        <div class="view">
            <input class="toggle" type="checkbox" ${todo.completed && 'checked'}>
            <label>${todo.title}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="${todo.title}">
    </li>
    `
}

export default connect()(TodoItem);