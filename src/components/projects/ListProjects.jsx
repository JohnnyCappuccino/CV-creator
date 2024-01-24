import React from "react";
import SimpleProject from './SimpleProject';


export default function ListJobs({projects , OnDelete}) {

  return(
    <div>
      {projects.map((project) => (
        <SimpleProject key={project.id} project = {project}  OnDelete = {OnDelete}/>
      ))}
    </div>
  )
}