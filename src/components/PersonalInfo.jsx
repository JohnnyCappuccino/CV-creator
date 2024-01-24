import React from "react";
import { useState } from "react";

export default function PersonalInfo({ChangeCv}){

  const[Name,setName] = useState('Bob Sapp');
  const[objective,setObjective] = useState('Open job position');
  const[email,setEmail] = useState('SuperCool@hotmail.com');
  const[phone,setPhone] = useState('3456784322');
  const[location,setLocation] = useState('New York/US');

  return(
    <div className="Card">
      <div>
        <label htmlFor="Name">Name:</label>
        <input type="text" placeholder="Name"
               value={Name} 
               onChange={(e) => {
                setName(e.target.value);
                ChangeCv(e.target.value, objective, email, phone,location);
              }}
        />
      </div>
      <div>
        <label htmlFor="Objective">Objective:</label>
        <input type="text" placeholder="Name"
               value={objective} 
               onChange={(e) => {
                setObjective(e.target.value)
                ChangeCv(Name, e.target.value, email, phone,location);
              }}
        />
      </div>
      <div>
        <label htmlFor="Email">Email:</label>
        <input type="text" placeholder="Name"
               value={email} 
               onChange={(e) => {
                setEmail(e.target.value)
                ChangeCv(Name, objective, e.target.value, phone,location);
              }}
        />
      </div>
      <div>
        <label htmlFor="Tel">Phone:</label>
        <input type="text" placeholder="Name"
               value={phone} 
               onChange={(e) => {
                setPhone(e.target.value)
                ChangeCv(Name, objective, email, e.target.value,location);
              }}
        />
      </div>
      <div>
        <label htmlFor="Location">Location:</label>
        <input type="text" placeholder="Name"
               value={location} 
               onChange={(e) => {
                setLocation(e.target.value)
                ChangeCv(Name, objective, email, phone,e.target.value);
              }}
        />
      </div>
    </div>

  );
}
