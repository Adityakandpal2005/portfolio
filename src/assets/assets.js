import { FaLightbulb, FaPaintBrush, FaCode,FaReact, FaChartPie, FaServer, FaPython, FaFire, FaLaptopCode, FaNodeJs, FaStripe,  FaDatabase, FaVuejs, FaCloud, FaRobot } from 'react-icons/fa';
import { SiVercel } from "react-icons/si"; 

import profileImg from './aditya.jpeg';
import projectImg1 from './car_image.jpg';
import projectImg2 from './project2.avif';
import projectImg3 from './Autism_image.webp';
import projectImg4 from './Movie_image.png';
import projectImg5 from './Screenshot(37).png';
import projectImg6 from './Screenshot(38).png';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'Data-driven thinker with an innovative edge. Curiosity-powered analyst turning unstructured, messy datasets into clear, impactful stories through code and clean visualization',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Transforming raw data into clear, decision-ready insights. Skilled in SQL, Python, and dynamic visual dashboards that help businesses bridge the gap between numbers and strategy',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Data Visualization',
    icon: FaChartPie,
    description: 'From raw numbers to interactive dashboards—translating complex data into clear, visual stories that drive strategy',
    tags: ['Power BI', 'Tableau', 'Ms Excel', 'CSV', 'Json', 'API']
  },
  {
    title: 'Data Manipulation and Mining',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Prescriptive Analysis', 'Descriptive Analysis','Diagnosis Analysis','Predictive Analysis']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'NoSQL']
  },
  {
    title: 'Python Development',
    icon: FaPython,
    description: 'Python development is used to build software, websites, and automation tools easily and efficiently.',
    tags: ['Python', 'NumPy', 'scikit Learn', 'scipy']
  },
  {
    title: 'Machine Learning & Model Training',
    icon: FaRobot,
    description: 'Turning raw data into predictive power through end-to-end machine learning pipelines.',
    tags: ['scikit-learn', 'TensorFlow', 'Keras','PyTorch','Model Training','Model Deployment']
  },
  {
    title: 'GenAI & NLP',
    icon: FaLaptopCode,
    description: 'Combining natural language processing with generative AI to turn raw text into actionable insights. From fine-tuning domain-specific models to deploying scalable LLM APIs, I focus on creating fast, reliable, and context-rich language systems',
    tags: ['GenAI', 'LLM', 'NLP', 'ChatGPT','Transformer Models','Text Generation','Language Understanding']
  }
];

export const projects = [
  {
    id: 1,
    title: "Car Price Prediction",
    description: "The goal of this project is to build a machine learning model that predicts the selling price of used cars based on features such as brand, model, year, mileage, fuel type, and other attributes. This helps buyers and sellers make data-driven decisions in the automobile resale market.",
    image: projectImg1,
    tech: ["Pandas","NumPy","Matplotlib","Seaborn", "CSV", "Scikit-Learn"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "https://github.com/arpitachaurasia290-boop/Data-Analyst-Project/tree/main/ML1",
    // code: "https://pokemon-card-app-alpha.vercel.app/",
  },
  // {
  //   id: 2,
  //   title: "E-Commerce Platform",
  //   description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
  //   image: projectImg2,
  //   tech: ["React.js", "REST API", "Tailwind CSS" ,"Node Js", "Express Js"],
  //   icons: [FaVuejs, FaFire, FaCloud, FaDatabase],
  //   demo: "https://e-commerce-frontend-1q7359rqv-anas-projects-8cb9ba05.vercel.app",
  //   // code: "https://github.com/anaskhan08274-alt/E-Commerce-Frontend",
  // },
  {
    id: 2,
    title: "Autism Prediction",
    description: "The aim of this project is to develop a machine learning model that predicts the likelihood of Autism Spectrum Disorder (ASD) based on behavioral, demographic, and medical features. The project demonstrates how data science can support early screening and intervention.",
    image: projectImg3,
    tech: ["Python", "NumPy", "Pandas","Scikit-Learn","Matplotlib","Seaborn","Flask/Streamlit"],
    icons: [FaReact, FaDatabase],
    demo: "https://github.com/arpitachaurasia290-boop/Data-Analyst-Project/tree/main/AUTISM%20PREDICTATION",
    // code: "https://github.com/anaskhan08274-alt/response",
  },
  {
    id: 4,
    title: "Movie Recommendation",
    description: "The goal of this project is to build a recommendation engine that suggests movies to users based on their preferences, viewing history, and ratings. This enhances user experience by providing personalized recommendations and helps streaming platforms increase engagement.",
    image: projectImg4,
    tech: [ "Python", "Pandas", "NumPy", "Scikit-Learn", "Surprise","Flask","Machine Learning Pipelines"],
    icons: [FaReact, FaCloud],
    demo: "https://github.com/arpitachaurasia290-boop/Data-Analyst-Project/tree/main/movie",
    code: "https://github.com/anaskhan08274-alt/Portfolio",
  },
  // {
  //   id: 5,
  //   title: "SS TECH SERVICES ",
  //   description: "A complete company portfolio website for the usa client for the IT Services and Ecommerce Bussiness.",
  //   image: projectImg5,
  //   tech: ["HTML", "CSS", "JavaScript", "React js ", "Node js", "Express js"],
  //   icons: [FaReact, FaNodeJs, FaDatabase],
  //   demo: "https://sstechservices.net/",
  //   code: "https://github.com/anaskhan08274-alt/Adding-machine",
  // },
  
];

export const workData = [
  {
    role: "Data Analyst",
    company: "Hanumant Technology",
    duration: "1 Years",
    description:
      "Bridging raw data and strategic action. I analyze complex user and performance data to reveal trends, optimize key performance indicators (KPIs), and deliver visual stories that empower stakeholders to act with confidence.Passionate about digging into data to answer critical business questions. My focus spans data cleaning, exploratory analysis, statistical modeling, and building dynamic reporting systems that keep teams informed in real time.",
    color: "purple"
  },
  
];


