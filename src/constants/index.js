import amazonIcon from "../assets/company/amazon.png";
import ebayIcon from "../assets/company/ebay.png";

import {
  mobile,
  // amazon,
  // ebay,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  // meta,
  // starbucks,
  // tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// const footerlnks = [
//     { id: "github",url: "https://github.com/your-github-username", icon: faGithub },
//   { id: "linkedin",  url: "https://www.linkedin.com/in/your-linkedin-profile", icon: faLinkedin }
// ]
// ../constants.js
export const navLinks = [
  // { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
  // { id: "github",url: "https://github.com/your-github-username", icon: faGithub },
  // { id: "linkedin",  url: "https://www.linkedin.com/in/your-linkedin-profile", icon: faLinkedin }
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer/ Vue.js",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Chrome extension developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Amazon",
    icon: amazonIcon,
    iconBg: "#383E56",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed and maintained web applications using React.js and other related technologies on Amazon's site, leveraging DOM extensions and AWS services.",
      "Collaborated closely with cross-functional teams, including designers, product managers, and fellow developers, to create high-quality and user-friendly products for Amazon customers.",
      "Implemented responsive design techniques, ensuring seamless user experiences across various devices, and verified cross-browser compatibility to reach a wide audience.",
      "Participated actively in code reviews, providing valuable feedback and suggestions to enhance the overall codebase and improve the team's development practices.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Ebay",
    icon: ebayIcon,
    iconBg: "#E6DEDD",
    date: 
   " Jan 2022 - Jan 2023",
    points: [
      "Led the development of a cutting-edge mobile application for eBay, harnessing the power of React Native to deliver seamless and intuitive user experiences to millions of users worldwide.",
      "Collaborated with multidisciplinary teams, including UX designers and product managers, to transform complex ideas into elegant and user-friendly features, driving engagement and satisfaction among eBay app users.",
      "Implemented performance optimization techniques, ensuring smooth navigation and swift loading times, and utilized platform-specific components to enhance the app's functionality and visual appeal on both iOS and Android platforms.",
      "Engaged in collaborative problem-solving, actively participating in brainstorming sessions, and providing innovative solutions to technical challenges, fostering a culture of creativity and continuous improvement within the development team.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "Specialized in crafting bespoke e-commerce solutions for clients using Shopify, tailoring each website to their unique brand identity and business requirements.",
      "Developed custom themes and applications, ensuring seamless integration of design elements, responsive layouts, and intuitive user interfaces, resulting in enhanced user experiences and increased conversion rates.",
      "Collaborated closely with clients to understand their specific needs, offering expert guidance on e-commerce best practices, payment gateways, and third-party integrations, empowering businesses to thrive in the competitive online marketplace.",
      "Provided ongoing support and maintenance to Shopify stores, implementing performance optimizations, security enhancements, and feature updates, ensuring the long-term success and stability of the e-commerce platforms."
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Fayssal proved me wrong.",
    name: "ElizabeTh",
    designation: "CFO",
    company: "Unpin",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like FayssaL does.",
    name: "TaoufeeQe",
    designation: "COO",
    company: "EXT",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After FayssaL optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "AsmaE",
    designation: "CTO",
    company: "456 Enterprises",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Discord Bot",
    description:
      "A Discord Bot that tracks user activity in voice channels, recording entry and exit times for efficient real-time monitoring and management.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Mern Stack App",
    description:
      " MERN stack app: Dynamic, interactive platform enabling users to share content, connect, and engage in discussions through multimedia posts and comments.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Amazon Extension",
    description:
      "An Amazon product research extension tailored for influencers, streamlining product discovery, analysis, and selection for effective influencer marketing strategies.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
