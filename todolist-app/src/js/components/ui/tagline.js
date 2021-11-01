import makeElement from "../../utils/makeElement"

const tagLine = function (className="ui-header", title="ui header", elem="h2"){
    const template = `<${elem} class="${className}">${title}</${elem}>`
    const element = makeElement(template)

    return element
}

export default tagLine