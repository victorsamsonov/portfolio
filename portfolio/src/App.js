import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import Header from "./Components/Header";
import resume from "./docs/resume.pdf";
import SectionTitle from "./Components/SectionTitle";
import Certification from "./Components/Certification";
import WorkExperience from "./Components/WorkExperience";
import Project from "./Components/Certification";
import Book from "./Components/Book";

const UDEMY_CERT1 = require("./Components/images/Udemy-ML.PNG");
const UDEMY_CERT2 = require("./Components/images/Udemy-DL.PNG");
const PATHFINDING_IMG = require("./Components/images/pathfinding-visualizer.PNG");
const SUDOKU_IMG = require("./Components/images/Sudoku.PNG");
const BOOK_PDSH = require("./Components/images/Python Data Science.png");
const BOOK_ML = require("./Components/images/Python ML.jpg");
const BOOK_DL = require("./Components/images/Book DL.jpg");
const BOOK_100PAGE = require("./Components/images/100Page.jpg");
const SORTING_IMG = require("./Components/images/sorting-visualizer.PNG");
function App() {
  const ABOUT_ME = "About Me";
  const TECHNOLOGIES_SKILLS = "Technologies and Skills";
  const CERTIFICATIONS = "Certifications";
  const WORK_EXPERIENCE = "Work Experience";
  const PROJECTS = "Personal Projects";
  const BOOKS = "Books I've Read";
  const BG1 = "bg1";
  const BG2 = "bg2";
  const PROFICIENT = [
    "Python",
    "R",
    "TensorFlow",
    "PyTorch",
    "scikit-learn",
    "MySQL",
    "JavaScript",
    "React and React Native",
    "HTML and CSS",
  ];

  const FAMILIAR = [
    "Flask",
    "C",
    "Java",
    "Haskell",
    "F#",
    "Racket",
    "Node JS",
    "TypeScript",
  ];

  const BOOK1 = {
    name: "Python Data Science Handbook",
    href: "https://www.oreilly.com/library/view/python-data-science/9781491912126/",
    img: BOOK_PDSH,
    author: "Jake VanderPlas",
    summary: 
      <p className="book-summary">
      When I became interested in the field of Data Science and after completing several online courses, I found out that I lacked knowledge in certain libraries such as Numpy, Matplotlib, and Pandas. As a result I started seeking for books that would not only provide me with the tools to become familiar with these instruments, but to also cover Data Science to a certain extent. One of the most recommended books was this one in particular and It was definitely worth the read. The book is sepparated into 4 main sections in which mainly covers: IPython (the shortest section which I skipped), Numpy, Pandas, Matplotlib, and Machine Learning. Each of these sections provide the reader with gentle introductions with corresponding code snippets. 
      <br/>
      <br/>
    I am glad to have read this books since a large portion of Machine Learning and Deep Learning involves data preprocessing, which this book has helped me tremendously to become aquainted with. I recommend this book to anyone that was some basic programming experience and that is interested to take their first step into the field of Data Science. You will learn Broadcasting rules, Data frame operations, Data Processing Methods, Data Visualization, and very basic implementations of Machine Learning Algorithms using libraries (scikit-learn).
    </p>
    ,
  };

  const BOOK2 = {
    name: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow, 2nd Edition",
    href: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/",
    img: BOOK_ML,
    author: "Geron Aurelien",
    summary:
      <p className="book-summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
  };

  const BOOK3 = {
    name: "Deep Learning",
    href: "https://www.deeplearningbook.org/",
    img: BOOK_DL,
    author: "Ian Goodfellow, Yoshua Bengio and Aaron Courville",
    summary:
    <p className="book-summary"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>,
  };

  const BOOK4 = {
    name: "The Hundred-Page Machine Learning Book",
    href: "http://themlbook.com/",
    img: BOOK_100PAGE,
    author: "Andriy Burkov",
    summary:
    <text className="book-summary">
      The fact that the author was able to summarize Machine Learning In approximately 120 pages without giving up that much detail is remarkable. The book covers some of the basic math that is necessary in Machine Learning, along with supervised, unsupervised, semi-supervised algorithms, and has a chapter centered around Neural Networks and Deep Learning. Despite the book seeming very "Math friendly" at the beginning, It does get more invovled with the formulas and explanations as you  make progress. This shouldn't be an issue for those that have took mathematics courses such as Multivariable Calculus with optimization, Linear Algebra, Probability, and Statistics. 
      <br/>
      <br/>
      Overall, I would recommend this book for those that have some basic understanding in Machine Learning since this isn't exactly a book for a beginner to learn the details (the book is short so it is hard to provide very detailed explanations, which perfectly makes sense), but it seems like the perfect tool to read before a job interview or to refresh some concepts, especially since you can read this publication in one sitting. It is a must have for any Data Scientist.
      </text>
  }

  const PROJECT2 = {
    name: "React JS Pathfinding Visualizer 2021",
    href: "https://github.com/victorsamsonov/Pathfinding-Visualizer",
    technologies: [
      "React",
      "JavaScript",
      "HTML and CSS",
      "Git",
      "GitHub",
      "Algorithms",
    ],
    img: PATHFINDING_IMG,
  };

  const PROJECT1 = {
    name: "React JS Sorting Visualizer 2022",
    href: "https://github.com/victorsamsonov/Sorting-Algorithms",
    technologies: [
      "React",
      "JavaScript",
      "HTML and CSS",
      "Git",
      "GitHub",
      "Algorithms",
    ],
    img: SORTING_IMG,
  };

  const PROJECT3 = {
    name: "Python Random Sudoku Generator 2020",
    href: "https://github.com/victorsamsonov/Python-Random-Sudoku-Generator",
    technologies: ["Python", "Pygame", "Git", "Algorithms"],
    img: SUDOKU_IMG,
  };

  const CERTIFICATION1 = {
    name: "Machine Learning A-Z: Hands-On Python & R In Data Science (44.5 hours)",
    href: "https://www.udemy.com/certificate/UC-788d256d-355f-4933-b50d-535d6a4d8915/",
    technologies: [
      "Python",
      "R",
      "Machine Learning",
      "Deep Learning",
      "scikit-learn",
      "TensorFlow",
    ],
    img: UDEMY_CERT1,
  };

  const CERTIFICATION2 = {
    name: "Deep Learning A-Z: Hands-On Artificial Neural Networks      (22.5 hours)",
    href: "https://www.udemy.com/certificate/UC-eefc8a0f-1e7e-48d6-90fd-3e6178b3176c/",
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Deep Learning",
      "Self-Organizing Maps",
      "Boltzmann Machines",
      "Autoencoders",
    ],
    img: UDEMY_CERT2,
  };

  const WORK_EXPERIENCE1 = {
    name: "Machine Learning Intern (Computer Developer) @ EKI-Digital, January – March 2022",
    href: "https://www.eki-digital.com/",
    technologies: ["Azure ML", "Python", "scikit-learn", "TensorFlow"],
    descriptions: [
      "Used Azure ML and Python to develop scripts and models with the aim of maximizing profits.",
      "Received Training based on previous company projects such as predicting housing prices for a client, while using regression, and deep neural networks.",
      "Worked on Researching some of the latest Neural Network architectures (SqueezeNet and AlexNet)",
    ],
  };

  const WORK_EXPERIENCE2 = {
    name: "Front-End Developer @ Perkuno, April 2020 – January 2022 ",
    href: "https://perkuno.com/",
    technologies: [
      "React-Native",
      "JavaScript",
      "TypeScript",
      "Python",
      "scikit-learn",
    ],
    descriptions: [
      "Used React Native to implement screens, components, animations, state management and improved the Android version of a Stocks and Trading App.",
      "Lead the Front-End team in completing all tasks on time, resulting in the App placing top 5 among 200 competitors in the analysis report.",
      "Implemented the Machine Learning regression algorithm for predicting Stock Prices.",
    ],
  };

  const ALL_BOOKS = [BOOK1, BOOK4, BOOK2, BOOK3];
  const ALL_PROJECTS = [PROJECT1, PROJECT2, PROJECT3];
  const ALL_WORK_EXPERIENCES = [WORK_EXPERIENCE1, WORK_EXPERIENCE2];
  const ALL_CERTIFICATIONS = [CERTIFICATION2, CERTIFICATION1];

  const proficient_list = () => {
    // let PROFICIENT = ['Python', 'Flask', 'TensorFlow', 'MySQL', 'React and React Native', 'JavaScript', 'scikit-learn']
    let out = [];
    for (let skill of PROFICIENT)
      out.push(
        <li
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            flexBasis: "25%",
            justifyContent: "center",
          }}
        >
          <text className="ts-bullets">{skill}</text>
          <img
            className={`ts-img ${
              skill === "PyTorch"
                ? "pt"
                : undefined || skill === "scikit-learn"
                ? "sl"
                : undefined
            } `}
            src={require(`./Components/images/${skill}.png`)}
          />
        </li>
      );

    return <div className="ts-content">{out}</div>;
  };

  const familiarList = () => {
    // let PROFICIENT = ['Python', 'Flask', 'TensorFlow', 'MySQL', 'React and React Native', 'JavaScript', 'scikit-learn']
    let out = [];
    for (let skill of FAMILIAR)
      out.push(
        <li
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            flexBasis: "25%",
            justifyContent: "center",
          }}
        >
          <text className="ts-bullets">{skill}</text>
          <img
            className={`ts-img ${
              skill === "PyTorch"
                ? "pt"
                : undefined || skill === "scikit-learn"
                ? "sl"
                : undefined
            } `}
            src={require(`./Components/images/${skill}.png`)}
          />
        </li>
      );

    return <div className="ts-content">{out}</div>;
  };

  const handleCertifications = () => {
    let out = [];
    for (let { name, href, technologies, img } of ALL_CERTIFICATIONS)
      out.push(
        <Certification
          name={name}
          href={href}
          technologies={technologies}
          img={img}
        />
      );

    return <div>{out}</div>;
  };

  const handleProjects = () => {
    let out = [];
    for (let { name, href, technologies, img } of ALL_PROJECTS)
      out.push(
        <Project
          name={name}
          href={href}
          technologies={technologies}
          img={img}
        />
      );

    return <div>{out}</div>;
  };

  const handleBooks = () => {
    let out = [];
    for (let { name, href, img, author, summary } of ALL_BOOKS)
      out.push(
        <Book
          name={name}
          href={href}
          img={img}
          author={author}
          summary={summary}
        />
      );

    return <div>{out}</div>;
  };

  const handleWorkExperiences = () => {
    let out = [];
    for (let { name, href, technologies, descriptions } of ALL_WORK_EXPERIENCES)
      out.push(
        <WorkExperience
          name={name}
          href={href}
          technologies={technologies}
          descriptions={descriptions}
        />
      );

    return <div>{out}</div>;
  };

  return (
    <div className="App">
      <ul class="box-area">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <header className="App-header">
        <div className="header-left">
          <h1 className="title"> Victor Samsonov</h1>
          <p className="sub-title">
            B.S In Computer Science
            <br />
            M.S In Artificial Intelligence
          </p>
        </div>
        <Header />
      </header>
      <section className="body">
        <SectionTitle title={ABOUT_ME} bg={BG1} color="white" />
        <p className="section-text">
          My name is Victor Samsonov, I am a Student at the Illinois Institute
          of Technology currently pursuing both my Bachelor's in Computer
          Science and my Master's in Artificial Intelligence (set to graduate in
          2023, completing both degrees in 4 years). My main area of focus
          currently lies in Data Science, a field that I'm passionate about and
          exploring every single day, with the hope of one day reaching my full
          potential. <br />
        </p>
        <p className="section-text">
          I am a highly motivated and selfless Individual that always aims to do
          what is best for the team, in order to facilitate a successful
          environment. I enjoy getting challenged and push myself not only to
          improve as a Data Scientist, but also as an individual.
        </p>
        <div className="about-me-images ">
          <img className="medium-img" src={PATHFINDING_IMG}></img>
          <img className="medium-img" src={SORTING_IMG}></img>
        </div>

        <a className="resume-button" href={resume} target="_blank">
          <text>View Resume</text>
        </a>
      </section>

      <section className="body bg-white">
        <SectionTitle title={TECHNOLOGIES_SKILLS} bg={BG2} color="white" />
        <ul className="ts-wrapper">
          <text className="ts-sub-title">Proficient with:</text>
          <div>{proficient_list()}</div>
          <text className="ts-sub-title">Familiar with:</text>
          <div>{familiarList()}</div>
        </ul>
      </section>

      <section className="body">
        <SectionTitle title={CERTIFICATIONS} bg={BG1} color="white" />
        {handleCertifications()}
      </section>

      <section className="body bg-white">
        <SectionTitle title={WORK_EXPERIENCE} bg={BG2} color="white" />
        {handleWorkExperiences()}
      </section>

      <section className="body">
        <SectionTitle title={PROJECTS} bg={BG1} color="white" />
        {handleProjects()}
      </section>

      <section className="body bg-white">
        <SectionTitle title={BOOKS} bg={BG2} color="white" />
        {handleBooks()}
      </section>
    </div>
  );
}

export default App;