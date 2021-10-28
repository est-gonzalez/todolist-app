import makeElement from "../utils/makeElement"
import directory from "../components/cards/directory"
import employee from "../components/cards/employee"
import { getStore } from "../redux/store"
import { render } from "ejs"
 
const employeeDirectory = function(){
    const employeeList = getStore()
    const page = document.createElement('div')
    const container = directory(); 

    // RENDER FUNCTION
    function render(){ 
      const ul = container.querySelector('ul')
      // creating the emply cards from data
      const elements = employeeList.map(emp => employee(emp))
      // looping emp li adding the
      elements.forEach(element=> ul.append(element))
      page.append(container)
 }
  
    if(employeeList !== null){
      render()
    }
    
    return page
}

export default employeeDirectory


 