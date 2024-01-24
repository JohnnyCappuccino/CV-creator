import React from "react";
import { useState } from "react";

export default function Profile({ChangeCv}){

  const [profile, setProfrile] = useState("At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. ");

  return(
    <div className="Card">
        <textarea name="" id="" cols="30" rows="10" 
          value={profile} 
           onChange={(e) => {
            setProfrile(e.target.value);
            ChangeCv(e.target.value);
          }}
        ></textarea>
    </div>

  );
}
