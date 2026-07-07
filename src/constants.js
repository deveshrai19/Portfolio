// =========================
// Skills Section Logos
// =========================
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import javaLogo from './assets/tech_logo/Java.jpg'; // corrected
import IntelliLogo from './assets/tech_logo/IntelliJ.png';


// =========================
// Experience Section Logos
// =========================
import anudipLogo from './assets/company_logo/Anudip.png';

// =========================
// Education Section Logos
// =========================
import rkgitLogo from './assets/education_logo/rkgit_logo.png';
import zcsLogo from './assets/education_logo/schoollogo.png';
import sddtLogo from './assets/education_logo/sddt_logo.png';

// =========================
// Project Section Logos
// =========================
import faceLogo from './assets/work_logo/face.png';
import youtubeLogo from './assets/work_logo/youtube.jpg';
import jobLogo from './assets/work_logo/job.png';
import ticketLogo from './assets/work_logo/ticket.png';
import aiLogo from './assets/work_logo/ai.png';
import dashboardLogo from './assets/work_logo/dashboard.png';
import studyLogo from './assets/work_logo/study.png';
import wander from './assets/work_logo/wanderlust.png';
import food from './assets/work_logo/foodimg.png';
import socio from './assets/work_logo/social.png';





// =========================
// Skills Info
// =========================
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', logo: nodejsLogo },
      { name: 'Express', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo }, // corrected
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Python', logo: pythonLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'IntelliJ IDEA', logo: IntelliLogo }, // corrected
      { name: 'Postman', logo: postmanLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

// =========================
// Experience Info
// =========================
export const experiences = [
  {
    id: 0,
    img: anudipLogo,
    role: 'React Developer Trainee',
    company: 'Anudip Foundation',
    type: 'Training Program',
    date: 'Aug 2025 - Oct 2025',
    desc: 'I completed my training in React Development at Anudip Foundation under the guidance of Mr. Sahil Kaushik, where I gained hands-on experience in building modern, dynamic, and responsive user interfaces using React. During the program, I focused on developing reusable components, efficient state management, and seamless API integration. I also collaborated with a team on real-world projects, contributing to scalable and user-centric applications while following clean code practices and industry standards. This experience strengthened my ability to work in a team environment and deliver high-quality frontend solutions.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
];

// =========================
// Education Info
// =========================
export const education = [
  {
    id: 0,
    img: rkgitLogo,
    school: 'Raj Kumar Goel Institute of Technology, Ghaziabad',
    date: 'July 2021 - June 2025',
    grade: '7.04 CGPA',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
  },
  {
    id: 1,
    img: zcsLogo,
    school: 'Zenith Convent School, Gorakhpur',
    date: 'April 2019 - March 2020',
    grade: '77.8%',
    degree: 'Senior Secondary School, CBSE',
  },
  {
    id: 2,
    img: zcsLogo,
    school: 'Zenith Convent School, Gorakhpur',
    date: 'April 2017 - March 2018',
    grade: '78.4%',
    degree: 'Secondary School, CBSE',
  },
];

// =========================
// Projects Info
// =========================
export const projects = [
  {
    id: 0,
    title: 'Wanderlust Web Application',
    description:
      'Wanderlust is a dynamic travel web application designed to inspire and assist travelers in discovering new destinations. Users can browse popular places, explore trip details, and create personalized itineraries. Built using HTML, CSS, JavaScript, Node.js, Express, and MongoDB, it features a clean, responsive interface with interactive maps and destination data for an engaging user experience.',
    image: wander,
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/deveshrai19/Wanderlust-WebApp/tree/main',
    webapp: 'https://wanderlust-travel-listings.onrender.com/listings',
  },
  {
    id: 1,
    title: 'Food Ordering Web Application',
    description:
      'A responsive food ordering web app built with React. It lets users browse menus, view detailed dishes, and manage their cart in real time, featuring a modern UI, dynamic components, and smooth user interactions for a seamless experience across all devices.',
    image: food,
    tags: ['React', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/deveshrai19/Food-Ordering-WebApp',
    webapp: 'https://app-delivery-de-comida.vercel.app/',
  },
  {
    id: 2,
    title: 'Social Media Platform',
    description:
      'A fully responsive and interactive social media web application built using HTML, CSS, and JavaScript. It enables users to create posts, like, and comment, fostering real-time interaction through a clean and dynamic interface. Designed with a focus on usability, responsiveness, and smooth user experience across all devices.',
    image: socio,
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/deveshrai19/Social-Media-Platform',
    webapp: 'https://social-media-platform-nu.vercel.app/',
  },
];
