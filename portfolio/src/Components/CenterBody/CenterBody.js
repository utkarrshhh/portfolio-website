import React from "react";
import developer from "C:/Users/utkar/Desktop/dont touch/pendrive/js/projects/portfolio/portfolio/src/Components/Image/developer.png";
import TypeWriter from "../Typerwriter/TypeWriter";

export default function CenterBody() {
const message = " Web Developer"
  
  return (
    <main>
      <section className="container">
        
        <div className="leftBody">
           <div>Hey there!! i am  <span className="name"> Utkarsh </span> </div> 
           <div className="type">
           and i am a 
           <TypeWriter message={message}/>
           </div>
           
        </div>
        <div className="rightBody">
          <div className="imageHere">
            <img src={developer} alt="" className="imageHere" />
          </div>
        </div>
      </section>
      <hr className="line"/>
    </main>
  );
}
