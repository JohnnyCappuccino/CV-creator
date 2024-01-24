import React from "react";
import {useState} from 'react';

export default function Education({onAdd}){

    const[schoolName,setSchoolName] = useState('');
    const[day,setDay] = useState('');
    const[major,setMajor] = useState('');
    const[gpa,setGpa] = useState('');


  const onSubmit = (e) =>{
    e.preventDefault();

    if(!schoolName){
      alert('plz add name');
      return
    }

    onAdd({schoolName, day, major, gpa})

    setSchoolName("");
    setDay("");
    setMajor("");
    setGpa("");
  }

  return(
    <form className="Card" onSubmit={onSubmit}>
      <div>
        <label htmlFor="SchoolName">School:</label>
        <input type="text" placeholder="Harvard university"
              value={schoolName} 
              onChange={(e) => setSchoolName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="Date">Date:</label>
        <input type="text" placeholder="May 2019"
               value={day} 
               onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="Degree">Degree & Major:</label>
        <input type="text" placeholder="Bachelor of arts"
               value={major} 
               onChange={(e) => setMajor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="GPA">GPA:</label>
        <input type="text" placeholder="3.81"
               value={gpa} 
               onChange={(e) => setGpa(e.target.value)}
        />
      </div>
      <input id="SubmitButton" value="Add Education" type="submit" />
    </form>

  );
}
