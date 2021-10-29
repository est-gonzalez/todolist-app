import makeElement from "../utils/makeElement"
import todoList from "../components/cards/todoList"
import todo from "../components/cards/todo"
import { getStore } from "../redux/store"

 
const todoPage = function(){
  const todos = getStore()
  const page = document.createElement('div')
  const container = todoList()

  if(todoPage !== null){
    const ul = container.querySelector('ul')
    const elements = todos.map(td => todo(td))
    elements.forEach(element=> ul.append(element))
    page.append(container)
  }
  
  return page
}

export default todoPage


 