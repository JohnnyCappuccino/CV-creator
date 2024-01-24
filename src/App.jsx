import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/edu/Education';
import ListEdu from './components/edu/ListEdu';
import Work from './components/work/Work';
import Project from './components/projects/Projects';
import Settings from './components/Settings';
import Profile from './components/Profile';
import ListJobs from './components/work/ListJobs';
import ListProjects from './components/projects/ListProjects';
import CV from './components/Cv';


function App() {

  //Education
  const [Educations,setEducations] = useState([
    {
      schoolName:"Harvard",
      day:"jun 2016 - may 2019",
      major:"Art major",
      gpa:"3.9",
      id:0
    }
  ]);

  const AddEdu = (Edu) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newEdu = {id, ...Edu};
    setEducations([...Educations,newEdu]);

  }

  const DeleteEdu = (id) => {
    setEducations(Educations.filter((edu) => edu.id !== id))
  }

  const [showEdu,setshowEdu] = useState(false);

  const showEduFunc = (e) =>{
    setshowEdu(!showEdu);
    if(!showEdu){
      e.target.innerHTML = "Close";
    }
    else{
      e.target.innerHTML = "Add Education";
    }
  }

  //Work
  const [jobs,setJobs] = useState([
    {
      CompanyName:"Amazon",
      day:"jun 2016 - may 2019",
      JobTitle:"lorem",
      Desc:"At vero eos et accusamus en provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit",
      id:0
    },
    {
      CompanyName:"Lorem",
      day:"jun 2016 - may 2029",
      JobTitle:"CEO",
      Desc:"Et harum quidem rerum facilis est et expedita distinctio. Nobis est eligendi optio cumque nihil impedit",
      id:1
    }
  ]);
  
  const AddJob = (job) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newJob = {id, ...job};
    setJobs([...jobs,newJob]);
    
  }
  
  const DeleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id))
  }
  
  const [showJob,setShowJob] = useState(false);
  
  const showJobFunc = (e) =>{
    setShowJob(!showJob);
    if(!showJob){
      e.target.innerHTML = "Close";
    }
    else{
      e.target.innerHTML = "Add Education";
    }
  }
  
  //Projects
  const [projects,setProjects] = useState([
    {
      projectName:"Abyados",
      Desc:"Super cool game made in C#",
      id:0
    }
  ]);

  const AddProject = (project) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newProject = {id, ...project};
    setProjects([...projects,newProject]);

  }

  const DeleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id))
  }

  const [showProjects,setShowProjects] = useState(false);

  const showProjectFunc = (e) =>{
    setShowProjects(!showProjects);
    if(!showProjects){
      e.target.innerHTML = "Close";
    }
    else{
      e.target.innerHTML = "Add Education";
    }
  }

  //CV
  const [info,setInfo] = useState({
    name:"Bob Sapp",
    jobTitle:"Open job position",
    email:"SuperCool@hotmail.com",
    phone:"3456784322",
    location:"New York/US"
  });
  const [profile, setProfrile] = useState("At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.");

  const changeCV = (name, jobTitle, email, phone, location) =>{
    const newInfo = {
      name:name,
      jobTitle:jobTitle,
      email:email,
      phone:phone,
      location:location
    }
    setInfo(newInfo);
  }

  const changeProfileCV = (newProfile) => {
    setProfrile(newProfile);
  }

  const [CvStyle, setCvStyle] = useState({

    fontFamily: "sans-serif",
    backgroundColor:"slateblue",
    flexDirection:"column",
    id:0
  });

  const changeCvStyle = (newStyle) =>{
    setCvStyle(newStyle);
    console.log(newStyle);
  }

  return (
    <>
      <div className="left">
        <h1>Personal Info:</h1>
        <PersonalInfo ChangeCv={changeCV}/>
      
        <h1>Education:</h1>
        <button className="mainBtn" onClick={showEduFunc}>Add Education</button>
        {showEdu && <Education onAdd={AddEdu}/>}
        <ListEdu Educations={Educations}  OnDelete = {DeleteEdu}/>

        <h1>Work:</h1>
        <button className="mainBtn" onClick={showJobFunc}>Add Work</button>
        {showJob && <Work onAdd={AddJob}/>}
        <ListJobs jobs={jobs}  OnDelete = {DeleteJob}/>

        <h1>Projects:</h1>
        <button className="mainBtn" onClick={showProjectFunc}>Add Project</button>
        {showProjects && <Project onAdd={AddProject}/>}
        <ListProjects projects={projects}  OnDelete = {DeleteProject}/>

        <h1>Profile:</h1>
        <Profile ChangeCv = {changeProfileCV}/>
        <h1>Settings:</h1>
        <Settings onChangeCV={changeCvStyle}/>
      </div>
      <div className="right">
        <CV info = {info} profile={profile} jobs={jobs} projects={projects} educations={Educations} style={CvStyle}/>
      </div>
    </>
  );
}

export default App;
