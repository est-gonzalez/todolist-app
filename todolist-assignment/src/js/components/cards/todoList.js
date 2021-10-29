import makeElement from './../../utils/makeElement'

const todoList = function (){
    const template = `
    <aside id="todoList" class="todoList">
    <header>
        <h2>To Do List</h2>
    </header>
    <ul id="todo" class="todo">
     
    </ul>
    <footer>

    </footer>
</aside>
    `

    return makeElement(template)
}

export default todoList