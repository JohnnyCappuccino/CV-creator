import React from "react";
import { useState } from "react";

export default function Project({onAdd}){

  const[projectName,setProjectName] = useState('');
  const[Desc,setDesc] = useState('');


const onSubmit = (e) =>{
  e.preventDefault();

  if(!projectName){
    alert('plz add name');
    return
  }

  onAdd({projectName, Desc})

  setProjectName("");
  setDesc("");
}

  return(
    <form className="Card" onSubmit={onSubmit}>
      <div>
        <label htmlFor="Company">Project Name:</label>
        <input type="text" placeholder="Amazon"
               value={projectName} 
               onChange={(e) => setProjectName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="job">Project Description:</label>
        <input type="text" placeholder="CEO"
               value={Desc} 
               onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <input id="SubmitButton" value="Add Work" type="submit" />
    </form>

  );
}
