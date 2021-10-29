import {Router} from "./routes/router";
import { createStore} from "./redux/store";
import { dataFetcher } from "./utils/dataFetcher";
import keyGenerator from "./utils/key"


const app = document.querySelector("#app");
Router(window.location.pathname)


const onAppInit = async function(e){
    let todo = await dataFetcher('./data/todo.json')

    // DEMO IF THE DATA DOESN'T HAVE SOME UNIQUE KEY
    // example for this data as there is no unique id
    if(todo[0].id === undefined){
         todo = [...keyGenerator(todo)]
    }

    createStore(todo)
    
   
}

window.addEventListener('load', onAppInit)