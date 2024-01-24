import React from "react";
import SimpleWork from './SimpleWork';


export default function ListJobs({jobs , OnDelete}) {

  return(
    <div>
      {jobs.map((job) => (
        <SimpleWork key={job.id} job = {job}  OnDelete = {OnDelete}/>
      ))}
    </div>
  )
}