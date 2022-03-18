import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import Settings from "./Components/Settings";
import resume from "./docs/resume.pdf";
import SectionTitle from "./Components/SectionTitle";
import Certification from "./Components/Certification";
import WorkExperience from "./Components/WorkExperience";

const UDEMY_CERT1 = require("./Components/images/Udemy-ML.PNG");
const UDEMY_CERT2 = require("./Components/images/Udemy-DL.PNG");
const PATHFINDING_IMG = require("./Components/images/pathfinding-visualizer.PNG");
const SORTING_IMG = require("./Components/images/sorting-visualizer.PNG");
function App() {
  const WIDTH = 550;
  const DEFAULT_DT = 70;
  const [idCounter, setidCounter] = useState(0);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [animation, setAnimation] = useState(true);
  const [isSorted, setIsSorted] = useState(false);
  const [DT, setDT] = useState(DEFAULT_DT);
  const [size, setSize] = useState(50);
  const [isSorting, setIsSorting] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const randFunc = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const ABOUT_ME = "About Me";
  const TECHNOLOGIES_SKILLS = "Technologies and Skills";
  const CERTIFICATIONS = "Certifications";
  const WORK_EXPERIENCE = "Work Experience"
  const BG1 = "bg1";
  const BG2 = "bg2";
  const PROFICIENT = ['Python', 'R', 'TensorFlow', 'PyTorch', 'scikit-learn', 'MySQL', 'JavaScript', 'React and React Native', 'HTML and CSS']
  const CERTIFICATION1 = {
    name: 'Machine Learning A-Z: Hands-On Python & R In Data Science (44.5 hours)', 
    href: 'https://www.udemy.com/certificate/UC-788d256d-355f-4933-b50d-535d6a4d8915/',
    technologies: ['Python', 'R', 'Machine Learning', 'Deep Learning', 'scikit-learn', 'TensorFlow'], 
    img: UDEMY_CERT1
  };
  const CERTIFICATION2 = {
    name: 'Deep Learning A-Z: Hands-On Artificial Neural Networks      (22.5 hours)', 
    href: 'https://www.udemy.com/certificate/UC-eefc8a0f-1e7e-48d6-90fd-3e6178b3176c/',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Deep Learning', 'Self-Organizing Maps', 'Boltzmann Machines', 'Autoencoders'], 
    img: UDEMY_CERT2
  }

  const WORK_EXPERIENCE1 = {
    name: 'Machine Learning Intern (Computer Developer) @ EKI-Digital, January – March 2022',
    href: 'https://www.eki-digital.com/',
    technologies: ['Azure ML', 'Python', 'scikit-learn', 'TensorFlow'],
    descriptions: ['Used Azure ML and Python to develop scripts and models with the aim of maximizing profits.',
    'Received Training based on previous company projects such as predicting housing prices for a client, while using regression, and deep neural networks.',
    'Worked on Researching some of the latest Neural Network architectures (SqueezeNet and AlexNet)']
  }

  const WORK_EXPERIENCE2 = {
    name: 'Front-End Developer @ Perkuno, April 2020 – January 2022 ',
    href: 'https://perkuno.com/',
    technologies: ['React-Native', 'JavaScript', 'TypeScript', 'Python', 'scikit-learn'],
    descriptions: ['Used React Native to implement screens, components, animations, state management and improved the Android version of a Stocks and Trading App.',
    'Lead the Front-End team in completing all tasks on time, resulting in the App placing top 5 among 200 competitors in the analysis report.',
    'Implemented the Machine Learning regression algorithm for predicting Stock Prices.']
  }

  const ALL_WORK_EXPERIENCES = [WORK_EXPERIENCE1, WORK_EXPERIENCE2]
  const ALL_CERTIFICATIONS = [CERTIFICATION2, CERTIFICATION1,]
  const proficient_list = () => {
    // let PROFICIENT = ['Python', 'Flask', 'TensorFlow', 'MySQL', 'React and React Native', 'JavaScript', 'scikit-learn']
    let out = []
    for (let skill of PROFICIENT) out.push( <li style={{display: 'flex', flexDirection:'column', textAlign:'center', alignItems: 'center', flexBasis: '25%', justifyContent:'center'}}>
      <text className="ts-bullets">
       {skill}
      </text>
      <img className={`ts-img ${skill === 'PyTorch' ? 'pt' : undefined || skill === 'scikit-learn' ? 'sl' : undefined} `} src={require(`./Components/images/${skill}.png`)}/>
    </li>)

    return (
    <div className="ts-content">
      {out}
    </div>)
  }

  const handleCertifications = () => {
    let out = []
    for (let {name, href, technologies, img} of ALL_CERTIFICATIONS) out.push(<Certification name={name} href={href} technologies={technologies} img={img}/>)
    
    return (
      <div>
        {out}
      </div>
      )
  }

  const handleWorkExperiences = () => {
    let out = []
    for (let {name, href, technologies, descriptions } of ALL_WORK_EXPERIENCES) out.push(<WorkExperience name={name} href={href} technologies={technologies} descriptions={descriptions}/>)

    return (
      <div>
        {out}
      </div>
      )
  }

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
            <br/>
            M.S In Artificial Intelligence
          </p>
        </div>
        <Settings />
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
          <text className="ts-sub-title">
            Proficient with:
          </text>
          <div>
            {proficient_list()}
          </div>
        </ul>
      </section>

      <section className="body">
        <SectionTitle title={CERTIFICATIONS} bg={BG1} color="white"/>
        {handleCertifications()}
      </section>

      <section className="body bg-white">
        <SectionTitle title={WORK_EXPERIENCE} bg={BG2} color="white" />
        {handleWorkExperiences()}
      </section>
    </div>
  );
}

export default App;
