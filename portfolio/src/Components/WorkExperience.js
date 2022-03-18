import React from "react";
import "./WorkExperience.css";
const WorkExperience = ({
  name = "Lorem Ipsum",
  href,
  technologies = [],
  descriptions = [],
}) => {

  const handleTechnologies = () => {
    let out = [];
    for (let technology of technologies)
      out.push(
        <li>
          <text className="we-technology">{technology}</text>
        </li>
      );
    return <ul style={{}}>{out}</ul>;
  };

  const handleDescription = () => {
    let out = [];
    for (let description of descriptions)
      out.push(
        <li>
          <text className="we-technology">{description}</text>
        </li>
      );
    return <ul style={{}}>{out}</ul>;
  };

  return (
    <a className="we-container"
    href={href} target="_blank">
      <a href={href} className="we-name" target="_blank">
        {name}
      </a>
      <text className="we-technology-text"> What I did:</text>
        {handleDescription()}
      <text className="we-technology-text"> Technologies:</text>
      <div className="we-subcontainer">
        {handleTechnologies()}
      </div>
    </a>
  );
};

export default WorkExperience;
