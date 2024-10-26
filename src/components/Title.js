import React from "react";
import Model from 'components/3D.js'
import 'styles/title.css';

function Title() {
  return (
    <div className="w-screen h-screen p-20 flex flex-row">
      <div className="flex flex-col justify-end p-2">
        <Model/>
        <div className="flex justify-center items-center drop mx-auto">
          <h1 className="text-9xl">J</h1>
          <h1 className="text-7xl">ai</h1>
          <h1 className="text-9xl ml-4">N</h1>
          <h1 className="text-7xl">arayana</h1>
        </div>
        <p> Full Stack Devoloper @ Deloitte</p>
      </div>
      <div className="w-2/3 drop">
        <ul className="text-center custom-text-9xl pl-40">
          <li className="no-fill-hover translate-right ">Projects</li>
          <li className="no-fill-hover translate-right ">Education</li>
          <li className="no-fill-hover translate-right ">Experiance</li>
          <li className="no-fill-hover translate-right ">About</li>
        </ul>
      </div>
    </div>

  );
}

export default Title;