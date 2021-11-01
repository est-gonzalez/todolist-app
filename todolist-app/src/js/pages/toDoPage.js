import makeElement from "../utils/makeElement"
import todoList from "../components/cards/todoList"
import todo from "../components/cards/todo"
import { getStore } from "../redux/store"
import {logo} from "../components/icons/logo"
import tagLine from "../components/ui/tagline"

 
const todoPage = function(){
  const todos = getStore()
  const page = document.createElement('div')
  const header = document.createElement('header')
    header.classList.add('center-in-page')
    const tagline = tagLine('tagline', "We Make To-Do's Easy", "h2")
    header.appendChild(makeElement(logo()))
    header.append(tagline)

    page.append(header)

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


 