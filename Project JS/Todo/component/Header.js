import html from '../core.js';
import { connect } from '../store.js'


function Header(){
    return html `
    <header class="header">
        <h1>todos</h1>
        <input class="new-todo" placeholder="What needs to be done?" autofocus>
    </header>
    `
}

export default connect()(Header);