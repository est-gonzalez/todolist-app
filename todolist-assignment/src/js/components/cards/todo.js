import makeElement from "../../utils/makeElement";

const todo = function ({id,category,title,isComplete,startDate, startTime, endDate,endTime}) {
  const template = `       
  <li class="todo" data-key="${id}">
     <p>${category}</p>
     <p> ${title} </p>
     <p>Start: ${startDate}, ${startTime}</p> 
     <p>Finish: ${endDate}, ${endTime}</p> 
     <p>${isComplete}</p>
     <p class="controls"><button>edit</button><button>delete</button></p>      
  </li>        
  `;
  return makeElement(template)
};

export default todo;
