import React from "react";

export default function ListJobs({educations}) {

  return(
    <div>
      {educations.map((education) => (
        <div key={education.id} className="CvCard">
          <div>
            <p>{education.day}</p>
          </div>
          <div>
            <p><strong>{education.schoolName}</strong></p>
            <p>{education.major}</p>
            <p>{education.gpa}</p>
          </div>
        </div>
      ))}
    </div>
  )
}