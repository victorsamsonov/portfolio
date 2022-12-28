import React from "react";
import "./Certification.css";

const Project = ({
  name = "Lorem Ipsum",
  href,
  technologies = [],
  descriptions=false,
  img
}) => {
  
  const handleTechnologies = () => {
    let out = [];
    for (let technology of technologies)
      out.push(
        <li>
          <text className="certification-technology">{technology}</text>
        </li>
      );
    return <ul style={{}}>{out}</ul>;
  };

  return (
    <a className="certification-container"
    href={href} target="_blank">
      <a href={href} className="certification-name" target="_blank">
        {name}
      </a>
      {<>
      desciptions ? <text className="we-technology-text"> What I did:</text>
        {handleDescription()} : <></>
      
      </>
}
      <text className="certification-technology-text"> Technlogies:</text>
      <div className="certification-subcontainer">
        {handleTechnologies()}
        <div className="certification-img-wrapper">
          <img className="certification-img" src={img} />
        </div>
      </div>
    </a>
  );
};

export default Project;
