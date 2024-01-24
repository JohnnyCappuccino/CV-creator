import React from 'react';

export default function SimpleJob({job ,OnDelete}){
  return(
    <h3 className='Simple'>
      {job.CompanyName} 
      <button onClick={() => OnDelete(job.id)}>Delete</button>
    </h3>

  )
}