import React from "react";
import SimpleEdu from './SimpleEdu';


export default function ListEdu({Educations , OnDelete }) {
  return(
    <div>
      {Educations.map((edu) => (
        <SimpleEdu key={edu.id} Educations = {edu}  OnDelete = {OnDelete}/>
      ))}
    </div>
  )
}