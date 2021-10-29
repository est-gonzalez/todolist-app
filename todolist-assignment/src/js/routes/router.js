import home from "../pages/home"; 
import todoPage from "../pages/toDoPage";
import notFound from "../pages/notFound";

const routes = {
    "/": home,
    "/todopage":todoPage
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