import React from "react";

export default function ListJobs({projects}) {

  return(
    <div>
      {projects.map((project) => (
        <div key={project.id} className="CvCard">
          <div>
            <p>{project.projectName}</p>
          </div>
          <div>
            <p>{project.Desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}