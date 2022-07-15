import html from '../core.js';
import { connect } from '../store.js'

function TodoItem( {todo} ){
    console.log(todo)
    return html `
    <li class="completed">
        <div class="view">
            <input class="toggle" type="checkbox" checked>
            <label>${todo}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `
}

export default connect()(TodoItem);