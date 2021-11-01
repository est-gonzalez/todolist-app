import makeElement from "../../utils/makeElement";

const todo = function ({id,category,title,isComplete,startDate, startTime, endDate,endTime}) {
  let status = "";

  if(isComplete === true){
    status = "Completed"
  }else {
    status = "Incomplete"
  }
  
  const template = `       
  <li class="todo" data-key="${id}">
     <p>${category}</p>
     <p> ${title} </p>
     <p>Start: ${startDate}, ${startTime}</p> 
     <p>Finish: ${endDate}, ${endTime}</p> 
     <p>${status}</p>
     <div class="controls"><button>edit</button><button>delete</button></div>    
  </li>        
  `;
  return makeElement(template)
};

export default todo;
