import html from '../core.js';
import { connect } from '../store.js'
import Header from './Header.js'
import Todo from './Todo.js';
import Footer from './Footer.js'
function App({todos}){
    return html `
    <section class="todoapp">
    ${Header()}
    ${todos && todos.length > 0 && Todo()}
    ${Footer()}
    </section>
    `
}

export default connect()(App);