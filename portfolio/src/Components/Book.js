import React from "react";
import "./Book.css";

const Book = ({
  name = "Lorem Ipsum",
  href,
  technologies = [],
  img,
  author = "",
  summary = "",
}) => {
  const handleTechnologies = () => {
    let out = [];
    for (let technology of technologies)
      out.push(
        <li>
          <text className="book-technology">{technology}</text>
        </li>
      );
    return <ul style={{}}>{out}</ul>;
  };

  return (
    <a className="book-container" href={href} target="_blank">
      <a href={href} className="book-name" target="_blank">
        {name}
        <br/>
        <text className="book-sub-title">{author}</text>
      </a>
      
      {/* <text className="book-technology-text"> Technologies:</text> */}
      <div className="book-subcontainer">
        <div className="book-img-wrapper">
          <img className="book-img" src={img} />
          
        </div>
        
      </div>
      <text className="book-summary">{summary}</text>
    </a>
  );
};

export default Book;
