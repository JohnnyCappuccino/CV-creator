import React from "react";

export default function ListJobs({jobs}) {

  return(
    <div>
      {jobs.map((job) => (
        <div key={job.id} className="CvCard">
          <div>
            <p>{job.day}</p>
          </div>
          <div>
            <p><strong>{job.CompanyName}</strong></p>
            <p>{job.JobTitle}</p>
            <p>{job.Desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}