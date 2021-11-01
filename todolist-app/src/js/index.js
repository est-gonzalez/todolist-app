import {Router} from "./routes/router";
import { createStore} from "./redux/store";
import { dataFetcher } from "./utils/dataFetcher";
import keyGenerator from "./utils/key"


const app = document.querySelector("#app");

const onAppInit = async function(e){
    const app = document.querySelector('#app')
    let todo = await dataFetcher('./data/todo.json')

    if(todo[0].id === undefined){
         todo = [...keyGenerator(todo)]
    }

    createStore(todo)
    
    Router(window.location.pathname)
}

window.addEventListener('load', onAppInit)