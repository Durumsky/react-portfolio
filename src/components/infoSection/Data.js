export const projects = [
  {
    id: "projects",
    github: true,
    githubLink: "https://github.com/Durumsky/react-portfolio",
    deploy: false,
    deployLink: "",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "Projects",
    headline: "This Website",
    description:
      `I created this website as a showcase of my skills, potential and motivation.

React | Styled-Components | Javascript `,
    imgStart: false,
    img: require("../../images/portfolio.png"),
    alt: "Ironhack logo",
    dark: false,
    primary: false,
    darkText: true,
  },
  {
    id: "projects",
    github: true,
    githubLink: "https://github.com/Durumsky/the-card-game-aoe-assesment",
    deploy: true,
    deployLink: "https://the-card-game-aoe-assesment.vercel.app",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "Projects",
    headline: "Card-Game challenge",
    description: 
`The react app fetches players data from a mockup backend and creates an overview of cards showing information of each player. If a card is selected, the card gets a red border and the info from the card is displayed in the details-box.

From the control panel, it is possible to sort the cards and submit the selected player to the mocked server.

React | Styled Components | Json Server | Javascript`,
    imgStart: false,
    img: require("../../images/card-game.png"),
    alt: "Challenge to show react skills",
    dark: false,
    primary: false,
    darkText: true,
  },
  {
    id: "projects",
    github: true,
    githubLink: "https://github.com/Durumsky/ta-da",
    deploy: false,
    deployLink: "",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "Projects",
    headline: "React app for couples",
    description:
`App which tracks the state of relationships and provides insights to improve them. After login, the users are provided with an ID that they can share with their partner to securely connect their accounts.

After that, they have acces to a survey where they can get aware of their differents opinions about their relationship.

React | Express | MongoDB | WebToken | Javascript`,
    imgStart: false,
    img: require("../../images/tada-login.png"),
    alt: "Ironhack logo",
    dark: false,
    primary: false,
    darkText: true,
  },
  {
    id: "projects",
    github: true,
    githubLink: "https://github.com/Durumsky/katas",
    deploy: false,
    deployLink: "",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "Projects",
    headline: "Katas: solutions to pure Javascript",
    description:
`Katas are Javascript problems from the website Codewars that help programmers sharp their skills and creativity.

My repository in Github can give an overview of my current Javascript knowledge.`,
    imgStart: false,
    img: require("../../images/katas.png"),
    alt: "Ironhack logo",
    dark: false,
    primary: false,
    darkText: true,
  },
  {
    id: "projects",
    github: true,
    githubLink: "https://github.com/Durumsky/Minimalfin",
    deploy: true,
    deployLink: "https://minimalfin.herokuapp.com/",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "Projects",
    headline: "Minimalfin",
    description:
`App which tracks expenses and gives an insight of how money is being spent.

Users can also publish post with ideas on financial minimalism.

Express | MongoDB | Node | Javascript`,
    imgStart: false,
    img: require("../../images/minimalfin.png"),
    alt: "Ironhack logo",
    dark: false,
    primary: false,
    darkText: true,
  },
  {
    id: "projects",
    github: true,
    githubLink: "https://github.com/Durumsky/Reminiscence",
    deploy: true,
    deployLink: "https://durumsky.github.io/Reminiscence/",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "Projects",
    headline: "Reminiscence",
    description:
`This concept game was my first project during the Bootcamp at Ironhack.

The character must confront - collect - all his memories in order to advance and stop the worm from erasing them.

P5.js | Javascript | HTML`,
    imgStart: false,
    img: require("../../images/reminiscence.png"),
    alt: "Ironhack logo",
    dark: false,
    primary: false,
    darkText: true,
  },
];

export const education = [
  {
    id: "education",
    certificate: true,
    certificateLink: "https://www.credential.net/0348d362-23e7-413a-97b9-6f04b28d42e6#gs.s2lkf7",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Education",
    headline: "Web Development Bootcamp at Ironhack Berlin",
    description:
      "Over 450 hours of intense training on MERN (MongoDB, Express, React and Node), Javascript, HTML and CSS, coding with pairs using tools as GIT",
    buttonLabel: "Learn more",
    imgStart: true,
    img: require("../../images/ironhack.png"),
    alt: "Coding projects",
    dark: true,
    primary: true,
    darkText: false,
  },
  {
    id: "education",
    certificate: false,
    certificateLink: "",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Education",
    headline: "Complete React Native in 2022: Zero to Mastery (with Hooks)",
    description:
      `Since I am very enthusiastic about React, currently I am taking part of this online course about React Native.
      
React Native allows programmers to create apps that run both in Android and iOS phones.`,
    buttonLabel: "Learn more",
    imgStart: true,
    img: require("../../images/ztm.png"),
    alt: "Coding projects",
    dark: true,
    primary: true,
    darkText: false, 
  },
  {
    id: "education",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Education",
    headline: "Understanding TypeScript - 2022 Edition",
    description: `I am currently learning about Typescript (Javascript with types) in Udemy.`,
    buttonLabel: "Learn more",
    imgStart: true,
    img: require("../../images/udemy.png"),
    alt: "Coding projects",
    dark: true,
    primary: true,
    darkText: false, 
  },
  {
    id: "education",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Education",
    headline: "Higher Education",
    description: 
`- BACHELOR IN PHILOSOPHY (2018-currrently)

Out of pleasure for learning about the history of our Thought, I'm currenty studying Philosphy on a distance university.

- BACHELOR IN EDUCATION SCIENCE (2010-2014)

    I learned about Education, it's theory, history and politics during my first Bachellor`,
    buttonLabel: "Learn more",
    imgStart: true,
    img: require("../../images/undraw_mathematics_-4-otb.svg").default,
    alt: "Coding projects",
    dark: true,
    primary: true,
    darkText: false, 
  },
];

export const aboutMe = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Who I am",
  headline: "Pasionated Web Developer",
  description: `I consider myself a solution oriented person, quite a fast learner, keen to people and motivated by default. Some of my passions are writing and reading, playing tennis and chess, the world of open software and more recently the stock market.
`,
  buttonLabel: "Learn more",
  imgStart: false,
  img: require("../../images/about.jpg"),
  alt: "Coding projects",
  dark: false,
  primary: false,
  darkText: true, 
};

export const contact = {
  id: "contact",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "E-mail",
  headline: "info@josescobedo.com",
  description: `I will try to reply you as soon as possible. I am gladly open for coding challenges proposals. 
`,
  buttonLabel: "Learn more",
  imgStart: false,
  img: require("../../images/about.jpg"),
  alt: "Coding projects",
  dark: false,
  primary: false,
  darkText: true, 
};
