import makeElement from "../utils/makeElement"
import link from "./../components/ui/link"
import {logo} from "../components/icons/logo"
import tagLine from "../components/ui/tagline"

const notFound = function(){
    const page = document.createElement('div')  
    const header = document.createElement('header')
    header.classList.add('center-in-page')
    const tagline = tagLine('tagline', "We Make To-Do's Easy", "h2")
    header.appendChild(makeElement(logo()))
    header.append(tagline)

    page.append(header)


    let bodyTemplate = `
        <div class="page-not-found center-in-page">
        <h1><span>404</span> <span>oops</span></h1>
        <h3>Page Not Found</h3>
        </div>
    `
    const bodyHeader = makeElement(bodyTemplate)
    const homeLink = link("take me back", "/todopage")
    homeLink.classList.add('link')

    bodyHeader.append(homeLink)
    page.append(bodyHeader)

    return page
}

export default notFound