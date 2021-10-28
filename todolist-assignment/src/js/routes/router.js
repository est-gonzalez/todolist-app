import home from "../pages/index"; 
import directory from "../pages/toDoPage";
import deletePage from "../pages/delete/";
import notFound from "../pages/notFound";

const routes = {
    "/": home,
    "/directory":directory,
    "/delete":deletePage
}

const Router =  function (pathname)   {

   const isValidRoute =   Object.keys(routes).find(key => key===pathname)
    
    // loading and unloading pages into the div app
    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    
       
        // app.appendChild(routes[window.location.pathname]())
        if(isValidRoute === undefined){
            app.appendChild(notFound())
        }else{
            app.appendChild(routes[isValidRoute]()) 
        }
       
}
 
export { Router}