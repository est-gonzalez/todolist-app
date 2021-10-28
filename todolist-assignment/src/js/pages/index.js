import makeElement from "../utils/makeElement"
import link from "./../components/ui/link"
const index = function(){
    const page = document.createElement('div')  
    let headerTemplate = `
        <header class="warning center-in-page">
            <h1>Home Page</h1>
        </header>
    `
    const pageHeader = makeElement(headerTemplate)
    const homeLink = link("employee directory", "/directory")

    pageHeader.append(homeLink)
    page.append(pageHeader)

    return page
}

export default index