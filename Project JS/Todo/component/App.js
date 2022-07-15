import html from '../core.js';
import { connect } from '../store.js'
import Header from './Header.js'
import Todo from './Todo.js';
function App({todos}){
    return html `
    <section class="todoapp">
    ${Header()}
    ${Todo()}
    </section>
    `
}

export default connect()(App);