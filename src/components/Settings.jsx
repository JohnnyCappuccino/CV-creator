import React from "react";
import { useState } from "react";

export default function Settings({onChangeCV}){

  const [CvStyle, setCvStyle] = useState({

    fontFamily: "sans-serif",
    backgroundColor:"slateblue",
    flexDirection:"column",
    id:0
  });

  return(
    <div className="Card">

      <div>
        <label htmlFor="lineColor">Line color:</label>
        <input type="color" id="lineColor"
               onChange={
                (e) => {
                  setCvStyle({...CvStyle, backgroundColor:e.target.value})
                  onChangeCV({...CvStyle, backgroundColor:e.target.value}); 
                }
              } 
        />
      </div>

      <div className="lineStyle">
        <button onClick={() =>{
           setCvStyle({...CvStyle, flexDirection:"column"})
           onChangeCV({...CvStyle, flexDirection:"column"});   
           const element = document.querySelector('.main');
           if(element.parentElement.children[0] === element) {
            element.parentNode.insertBefore(element.nextSibling, element);
          }   
          }
           } className="Square"></button>
        <button onClick={() =>{
           setCvStyle({...CvStyle, flexDirection:"row"})          
           onChangeCV({...CvStyle, flexDirection:"row"});  
           const element = document.querySelector('.main');
           if(element.parentElement.children[0] === element) {
             element.parentNode.insertBefore(element.nextSibling, element);
           }
          }
           } className="Square"></button>
        <button onClick={() =>{
           setCvStyle({...CvStyle, flexDirection:"row"})          
           onChangeCV({...CvStyle, flexDirection:"row"})
           const element = document.querySelector('.main');
           if(element.parentElement.children[1] === element) {
            element.parentNode.insertBefore(element,element.previousSibling);
          }
          }
           } className="Square"></button>
      </div>

      <div>
        <button onClick={() =>{
           setCvStyle({...CvStyle, fontFamily:"sans"})          
           onChangeCV({...CvStyle, fontFamily:"sans"});  
          }
           }>Sans</button>
        <button onClick={() =>{
           setCvStyle({...CvStyle, fontFamily:"serif"})          
           onChangeCV({...CvStyle, fontFamily:"serif"});  
          }
           }>Serif</button>
        <button onClick={() =>{
           setCvStyle({...CvStyle, fontFamily:"Tahoma"})          
           onChangeCV({...CvStyle, fontFamily:"Tahoma"});  
          }
           }>Tahoma</button>
      </div>

    </div>

  );
}
