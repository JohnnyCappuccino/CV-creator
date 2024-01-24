import React from 'react';

export default function SimpleEdu({Educations ,OnDelete}){
  return(
    <h3 className='Simple'>
      {Educations.schoolName} 
      <button onClick={() => OnDelete(Educations.id)}>Delete</button>
    </h3>

  )
}