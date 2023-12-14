import {
  mobile,
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
  meta,
  starbucks,
  lit,
  litkit,
  tesla,
  shopify,
  aot,
  carrent,
  jobit,
  tripguide,
  threejs,
  met_user_guide,
  metaversus,
  youtube_clone,
  met,
  amazon_clone,
  thinklit,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Entrepreneur",
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
    title: "Founder & Full-Stack Developer",
    company_name: "ThinkLit",
    icon: lit,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Created mock ups for screens and websites",
      "Made custom websites for client using React and Firebase",
    ],
  },
  {
    title: "Founder & Full Stack Developer",
    company_name: "LitKit",
    icon: litkit,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Optimized database structure to reduce reads and writes by 30%.",
      "Designed thinking long term, taking into account the health of the code base and programming to make future changes easier.",
      "Did research on different tech stacks to decide what are the best technologies to use for our application.",
      "Created stories for users to view clips uploaded by other users in real-time.",
      "Used Stripe API to manage user payments and payment processing.",
      "Designed and integrated a host management system for users to create parties in real time.",
      "Setup push notifications to keep users coming to the app consistently.",
      "Created custom logos and implemented them into the app with ease.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "AOT-Technologies",
    icon: aot,
    iconBg: "#383E56",
    date: "April 2022 - Present",
    points: [
      "Built an engagement platform for the British Columbia government using React, Redux, Jest, Python Flask, OpenShift, Docker, and Postgres.",
      "Implemented multitenancy feature to enable multiple organizations to use the platform simultaneously.",
      "Created a comprehensive user guide using Jekyll to facilitate onboarding and usage of the platform.",
      "Actively participated in grooming sessions to maintain the Scrum board and plan out the project roadmap.",
      "Collaborated with cross-functional teams to design and implement features that improved user experience and engagement.",
      "Designed and implemented scalable architecture using React and Redux to improve the platform's performance and maintainability.",
      "Developed automated tests with Jest to ensure the reliability of the platform.",
      "Implemented user authentication and authorization using Flask-Login and JWT.",
      "Deployed the platform on OpenShift and used Docker to manage the application's containers.",
      "Implemented database schema and managed data using Postgres.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MET",
    description:
      "Modern Engagement Tools a multi-tenancy platform for the British Columbia government for users to communicate with the public on projects.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "pyflask",
        color: "green-text-gradient",
      },
      {
        name: "postgres",
        color: "pink-text-gradient",
      },
    ],
    image: met,
    source_code_link: "https://engage.eao.gov.bc.ca/",
  },
  {
    name: "MET User Guide",
    description: "A user guide for MET I deployed & maintained for my team.",
    tags: [
      {
        name: "jekyll",
        color: "blue-text-gradient",
      },
      {
        name: "ruby",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: met_user_guide,
    source_code_link: "https://bcgov.github.io/met-guide/",
  },
  {
    name: "Metaversus",
    description: "Conceptual Website for a metaverse game.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: metaversus,
    source_code_link:
      "https://metaverse-site-d3fehz92f-davidjnunezf.vercel.app/",
  },
  {
    name: "Youtube Clone",
    description:
      "A Youtube Clone that shows a youtube homepage with different categories",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidAPI",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: youtube_clone,
    source_code_link: "https://youtube-clone-ivory.vercel.app/",
  },
  {
    name: "Amazon Clone",
    description: "Amazon clone using stripe api & firebase.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: amazon_clone,
    source_code_link: "https://clone-6d92d.web.app/",
  },
  {
    name: "ThinkLit",
    description: "The website for the digital agency I ran during covid",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Greensock.js",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: thinklit,
    source_code_link: "https://thinklit.ca/#/",
  },
];

export { services, technologies, experiences, testimonials, projects };
