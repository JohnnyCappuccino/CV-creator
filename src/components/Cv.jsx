import React from "react";
import WorkCV from "./work/WorkCV";
import ProjectCV from "./projects/ProjectCV";
import EducationCV from "./edu/EducationCV";

export default function Cv({info, profile, educations,projects,jobs,style}) {
  return (
    <div className="CV" style={style}>
      <div className="personalInfo">
        <h1> {info.name}</h1>
        <div>
          <h2>{info.jobTitle}</h2>
          <h3>{info.email}</h3>
          <h3>{info.phone}</h3>
          <h3>{info.location}</h3>
      
        </div>
      </div>
      <div className="main">
        <div>
          <h1 className="title">Education</h1>
          <EducationCV educations = {educations}/>
        </div>

        <div>
          <h1 className="title">Work</h1>
          <WorkCV jobs = {jobs}/>
        </div>

        <div>
          <h1 className="title">Projects</h1>
          <ProjectCV projects = {projects}/>
        </div>

        <div>
          <h1 className="title">Profile</h1>
          <p className="profile">{profile}</p>
        </div>
      </div>
    </div>
);
}