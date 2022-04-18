import img2048 from "../images/2048screenshot.png";
import imgPunk from "../images/punkscreenshot.png";
import imgTicket from "../images/ticketscreenshot.png";
import imgCalc from "../images/calculatorscreenshot.png";
import imgVocab from "../images/vocabscreenshot.png";
import imgBgAnimation from "../images/bganimationscreenshot.png";
import imgBlog from "../images/blogscreenshot.png";
import imgAPI from "../images/apiscreenshot.png";

const cardsData = [
  {
    id: 0,
    title: "JAMstack and CMS Blog",
    skills: ["HTML/CSS", "Eleventy", "Netlify CMS", "Nunjucks"],
    desc: [
      {
        id: 1,
        text: "The goal of this project was to create a fast and secure blog using JAMStack. Eleventy was used to create a static site, using Netlify CMS to manage adding, removing, and editing blog posts.",
      },
      {
        id: 2,
        text: "A fundamental goal of this website was to create a page that utilised standardised components as much as possible. In doing so, nunjucks and eleventy could be used to integrate multiple components on a range of pages. Standardised components include the base file, header, footer, and article-snippet.",
      },
      {
        id: 3,
        text: "Using the Netlify CMS, and by implementing an admin file, a secure admin section of the site was added, enabling any designated user to access the admin interface, thus enabling them to create new, edit existing, and delete old posts on the blog.",
      },
    ],
    shortDesc: "A fast and secure blog with Eleventy and Netlify CMS",
    img: imgBlog,
    links: {
      github: "https://github.com/samueljacobs98/jamstack-blog",
      deployed: "https://sage-chaja-b1e942.netlify.app/",
    },
  },
  {
    id: 1,
    title: "GCP Hosted Pokemon API",
    skills: ["Google Cloud", "Spring Boot", "Java", "MySQL"],
    desc: [
      {
        id: 1,
        text: "Created an API using Spring Boot and Java with a MySQL database. The functionality of the API was verified in localhost with Postman. The API and it's database was then launched into the cloud using Google Cloud Platform.",
      },
    ],
    shortDesc:
      "Created an API using Spring Boot and Java with a MySQL database.",
    img: imgAPI,
    links: {
      github: "https://github.com/samueljacobs98/gcp-pokemon-api",
      deployed: "",
    },
  },
  {
    id: 2,
    title: "2048 Game",
    skills: ["JavaScript", "HTML", "CSS", "Figma"],
    desc: [
      {
        id: 1,
        text: "The purpose of this project was to create a game using skills in HTML, CSS/SCSS, and JavaScript.",
      },
      {
        id: 2,
        text: "The basic UI was based on that of the original 2048 game, aiming to replicate the style of the original game.",
      },
      {
        id: 3,
        text: "Using media queries, when on a mobile or tablet with no proper mouse cursor available, arrow buttons appear on the interface in order to allow user interaction, even without a keyboard.",
      },
      {
        id: 4,
        text: "Throughout the project, GitHub was used for version control.",
      },
      {
        id: 5,
        text: "The approach to the JavaScript was to use DOM interaction to manipulate a 2D array in the JavaScript. Changes in the JavaScript would be fed back to the DOM for visual representation in the UI.",
      },
    ],
    shortDesc:
      "A browser-based game using modern JavaScript programming techniques and DOM manipulation.",
    img: img2048,
    links: {
      github: "https://github.com/samueljacobs98/game-project",
      deployed: "https://samueljacobs98.github.io/game-project/",
    },
  },
  {
    id: 3,
    title: "General BG Animation",
    skills: ["HTML Canvas", "JavaScript", "HTML", "CSS"],
    desc: [
      {
        id: 1,
        text: "The purpose of this project was to really get to grips with HTML Canvas and explore the impact of different settings. Furthermore, it was about creating a basic template that could be quickly rewritten and modified in the future to create dramatic variations with little altering of code.",
      },
      {
        id: 2,
        text: "Simple DOM manipulation was used to alter the animation properties via the browser.",
      },
      {
        id: 3,
        text: "An OOP approach was used to create an array of circles with a variety of properties such as location, size, and velocity. A bounce method was integrated to ensure that the circles are contained within the screen.",
      },
    ],
    shortDesc: "Website where users to modify the background.",
    img: imgBgAnimation,
    links: {
      github: "https://github.com/samueljacobs98/general-background-animation",
      deployed:
        "https://samueljacobs98.github.io/general-background-animation/",
    },
  },
  {
    id: 4,
    title: "Calculator",
    skills: ["HTML", "CSS", "JavaScript", "Figma"],
    desc: [
      {
        id: 1,
        text: "The purpose of this project was to develop JavaScript skills, particularly pertaining to interaction with the DOM and the use of functions.",
      },
      {
        id: 2,
        text: "The design of the calculator required skills including UI Design, HTML, CSS, SCSS, and, mainly, JavaScript.",
      },
      {
        id: 3,
        text: "The CSS/SCSS used display: grid to organise the calculator elements. The buttons were organised using flexbox.",
      },
      {
        id: 4,
        text: "A mobile-first approach was taken to designing the calculator, ensuring reponsiveness, hence a consistency of experience regardless of the platform through which the calculator is accessed.",
      },
      {
        id: 5,
        text: "Throughout the project, GitHub was used for version control.",
      },
      {
        id: 6,
        text: "Query selectors were used to obtain the necessary assets required from the HTML.",
      },
      {
        id: 7,
        text: "A key aspect of the programming of the calculator was that the eval() function was not to be used. Therefore, a series of functions were divised to control the calculator function. A function called 'checkButtonType' was used to determine what kind of button was clicked and what should happen as a result of the click event.",
      },
      {
        id: 8,
        text: "For each type of button, different functions were employed.",
      },
      {
        id: 9,
        text: "Edge cases were assessed and accounted for. For example, if the prefacing operator to the top line of the display was removed using the delete key and followed with by clicking on any number, the user receives visual feedback in the form of changing button colours to demonstrate the next button pressed should be an operator.",
      },
      {
        id: 10,
        text: "Once the basic calculator had been programmed and functioned correctly, additional buttons were added. These buttons include 'Ans', 'π', '%', '√', '(', and ')'.",
      },
      {
        id: 11,
        text: "Integration of Ans, Pi, and %, required basic functions. However, the square root relied on successful implementation of the bracket function. For the bracket function to work, it was necessary to ensure that mathematical opperator precedence (B.I.D.M.A.S.) was followed.",
      },
      {
        id: 12,
        text: "Finally, a feature was added to allow users to control the maximum number of decimal places to which solutions and pi will be printed.",
      },
    ],
    shortDesc:
      "A browser-based calculator capable of basic and advanced calculations.",
    img: imgCalc,
    links: {
      github: "https://github.com/samueljacobs98/calculator-project",
      deployed: "https://samueljacobs98.github.io/calculator-project/",
    },
  },
  {
    id: 5,
    title: "Ticket Tracker",
    skills: ["React", "State-management", "HTML Canvas"],
    desc: [
      {
        id: 1,
        text: "The aim of this project was to cement foundational knowledge of React. The task was to create a ticket tracker that could be utilised by a team to keep track of how many tickets (tasks) each team member had left to complete.",
      },
      {
        id: 2,
        text: "Mock data was to be imported into app component. This data was then passed down as a prop to the tickets component. Each card was rendered based on props past down from the tickets component. Therefore, by passing down functions as props to the card components, each card state could be lifted up to the tickets component.",
      },
      {
        id: 3,
        text: "Lifting up card state enabled features to be added such as filtering cards visiblity based on colour.",
      },
      {
        id: 4,
        text: "Card colour was another feature enabled by lifting up the state of each card. By lifting up card state an average count could be calculated. Therefore, each card could be coloured in relation to all other cards. This feature was added so that members of a team using the ticket tracker could assess performance and progress in relation to one another.",
      },
      {
        id: 5,
        text: "Buttons were used for all interactive elements so that the user can interact with the app entirely without a mouse if necessary.",
      },
      {
        id: 6,
        text: "HTML Canvas was integrated to make improve the aesthetic of the website. Using an OOP approach, a random number of particles (within limits) at random locations on the page with random colours are created and rendered when the page is loaded.",
      },
      {
        id: 7,
        text: "Noticable on smaller screens, a parallax scroll was added to add movement to the background shapes, giving the page a more dynamic feel.",
      },
    ],
    shortDesc: "A React app that displays team members' remaining tickets.",
    img: imgTicket,
    links: {
      github: "https://github.com/samueljacobs98/ticket-tracker-project",
      deployed: "https://samueljacobs98.github.io/ticket-tracker-project/",
    },
  },
  {
    id: 6,
    title: "Punk API",
    skills: ["Async Coding", "API Integration", "React"],
    desc: [
      {
        id: 1,
        text: "The aim of this project was to further knowledge of React and React integration with an API. The task was to create a responsive page that enables users to search, filter, and sort through beers and respective details. The data about the beers was obtained from the Punk API.",
      },
      {
        id: 2,
        text: "Data was fetched from the API. An error handling method was integrated to deal with errors that may be thrown by the API (i.e. searching for a beer that does not exist in the database).",
      },
      {
        id: 3,
        text: "The useEffect and useState hooks were employed to achieve dynamic performance from the website.",
      },
      {
        id: 4,
        text: "Inputs were used for all interactive elements so that the user can interact entirely without a mouse if necessary.",
      },
      {
        id: 5,
        text: "Toggling filters, performing searches, and sorting results led to state changes that were used as the dependencies of a useEffect hook, allowing the page to update the API request and in turn the data displayed on screen.",
      },
      {
        id: 6,
        text: "A light and dark mode was integrated, allowing the users to adjust the websites visuals at the click of a button.",
      },
      {
        id: 7,
        text: "Lighthouse was used to assess the accessibility of the website. Colours were adjusted and other accessibility requirements, such as giving all form elements a label (though visibly hidden for the search), were met for all combinations of the light, dark, mobile, and desktop versions of the website.",
      },
    ],
    shortDesc:
      "A React application that pulls data from an external public API and presents it in a dashboard.",
    img: imgPunk,
    links: {
      github: "https://github.com/samueljacobs98/punk-api-project",
      deployed: "https://samueljacobs98.github.io/punk-api-project/",
    },
  },
  {
    id: 7,
    title: "MyVocab",
    skills: ["JavaScript", "API Integration", "SCSS", "HTML"],
    desc: [
      {
        id: 1,
        text: "I carried out this project outside of my course at Nology in an effort to consolidate what I had learnt. The main to focus points of this project was DOM manipulation using JavaScript and utilising data from a API (dictionaryapi.dev).",
      },
    ],
    shortDesc: "A simple DOM manipulation project using API integration.",
    img: imgVocab,
    links: {
      github: "https://github.com/samueljacobs98/what-this-mean",
      deployed: "https://samueljacobs98.github.io/what-this-mean/",
    },
  },
];

export default cardsData;
