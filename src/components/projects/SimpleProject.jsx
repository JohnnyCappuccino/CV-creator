import React from 'react';

export default function SimpleProject({project ,OnDelete}){
  return(
    <h3 className='Simple'>
      {project.projectName} 
      <button onClick={() => OnDelete(project.id)}>Delete</button>
    </h3>

  )
}