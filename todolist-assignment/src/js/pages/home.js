import makeElement from "../utils/makeElement"
import link from "../components/ui/link"
import {logo} from "../components/icons/logo"

const index = function(){
    const page = document.createElement('div')  
    let headerTemplate = `
        <header class="warning center-in-page">
            <h1>We Make To-Do's Easy</h1>
        </header>
    `
    const pageHeader = makeElement(headerTemplate)
    const homeLink = link("To Do List", "/todopage")

    pageHeader.append(homeLink)
    page.append(pageHeader)

    return page
}

export default index