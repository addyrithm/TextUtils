import React from "react";

export default function FooterBar(props) {
  return (
      <div className={` text-center p-3 bg-${props.mode==='dark'?'dark':'light'}
      `}>
        ©2022 Copyright:  
        <a
          className="text"
          href="https://www.linkedin.com/in/adarsh-sharma-438b9b1b9/"
        >
          Linkedin Profile
        </a>
      </div>
  );
}
