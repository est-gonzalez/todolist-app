import makeElement from "../utils/makeElement"
import link from "../components/ui/link"
import {logo} from "../components/icons/logo"
import tagLine from "../components/ui/tagline"

const index = function(){
    const page = document.createElement('div')  
    const header = document.createElement('header')
    header.classList.add('center-in-page')
    const tagline = tagLine('tagline', "We Make To-Do's Easy", "h2")
    const homeLink = link("To Do List", "/todopage")
    homeLink.classList.add('link')
    header.appendChild(makeElement(logo()))
    header.append(tagline)
    header.append(homeLink)

    page.append(header)

    return page
}

export default index