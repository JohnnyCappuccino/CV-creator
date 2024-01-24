import React from "react";
import {useState} from 'react';

export default function Work({onAdd}){

  const[CompanyName,setCompanyName] = useState('');
  const[day,setDay] = useState('');
  const[JobTitle,setJobTitle] = useState('');
  const[Desc,setDesc] = useState('');


const onSubmit = (e) =>{
  e.preventDefault();

  if(!CompanyName){
    alert('plz add name');
    return
  }

  onAdd({CompanyName, day, JobTitle, Desc})

  setCompanyName("");
  setDay("");
  setJobTitle("");
  setDesc("");
}

  return(
    <form className="Card" onSubmit={onSubmit}>
      <div>
        <label htmlFor="Company">Company Name:</label>
        <input type="text" placeholder="Amazon"
               value={CompanyName} 
               onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="job">Job Title:</label>
        <input type="text" placeholder="CEO"
               value={JobTitle} 
               onChange={(e) => setJobTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="Time">Date:</label>
        <input type="text" placeholder="may 2002 - june 2030"
               value={day} 
               onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input type="text" placeholder="i am jeff bezos"
               value={Desc} 
               onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <input id="SubmitButton" value="Add Work" type="submit" />
    </form>

  );
}
