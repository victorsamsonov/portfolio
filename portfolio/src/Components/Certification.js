import React from "react";
import "./Certification.css";

const Certification = ({
  name = "Lorem Ipsum",
  href,
  technologies = [],
  img,
  primary_col
}) => {
  const handleTechnologies = () => {
    let out = [];
    for (let technology of technologies)
      out.push(
        <li>
          <text className="certification-technology">{technology}</text>
        </li>
      );
    return <ul className="certification-ul">{out}</ul>;
  };
  let container = primary_col ? "certification-container-2":"certification-container" 
  return (
    <a className={container}
    href={href} target="_blank">
      <a href={href} className="certification-name" target="_blank">
        {name}
      </a>
      <text className="certification-technology-text"> Technologies and Concepts:</text>
      <div className="certification-subcontainer">
        {handleTechnologies()}
        <div className="certification-img-wrapper">
          <img className="certification-img" src={img} />
        </div>
      </div>
    </a>
  );
};

export default Certification;
