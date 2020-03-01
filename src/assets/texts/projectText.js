const whoEN = {
  id: 'who',
  name: 'Fullstack Authentication',
  short: 'Secure application with JWT',
  description: `Create an account, log in, and see all the usernames.
                Passwords are encrypted in the database.
                On log in, if credentials match, a Jason Web Token (JWT) is created and sent to the client.
                Access to the API requires the JWT in the request.
                The authentication server is made on Node with Express, Mongoose, bcrypt, passport.
                The client is made with React.
                The authentication server and the client are made for reusability.
                Responsive, mobile first, accessibility.`,
  imgFileName: 'who.png',
  linkUrl: 'http://www.vemharbetalat.se',
  linkText: 'VemHarBetalat.se'
};

const fastEN = {
  id: 'fast',
  name: 'Blazingly Fast',
  short: 'Lazy-loading, recycling, code splitting, compression, routing, plain JS',
  description: `The image loader lazy-loads the images when each image intersects the viewport.
                The infinitive scroll recycles the DOM elements, giving a seamless scrolling experience.
                Built with plain JavaScript without framework, meaning the code is as lightweight it can be.
                For this reason I've build an own routing and own event bus.
                Webpack configuration for prod/dev, code splitting, bundle name hashing, image compression, SCSS, etc.
                All this gives the user a fast-loading experience with minimum of code loading and processing.
                Responsive, mobile first, accessibility.`,
  imgFileName: 'fast.png',
  linkUrl: 'https://abbeblubb.github.io/fast/',
  linkText: 'Experience fast loading'
};

const scraperEN = {
  id: 'scraper-node',
  name: 'Fullstack Scraper',
  short: 'News scraper with Node.js',
  description: `The server scrapes the Aftonbladet news site and saves the headers with the corresponding links to a database.
                The frontend displays these headers in a list, making it easy and fast to follow the general news.
                JavaScript, Node, Express, Mongoose, React.
                Responsive, mobile first.`,
  imgFileName: 'scraper-node.png',
  linkUrl: 'https://abbeblubb.github.io/scraper-node/',
  linkText: 'Scrape the news site'
};

const taskmanagerEN = {
  id: 'taskmanager',
  name: 'Fullstack Task Manager',
  short: 'Global State with Redux',
  description: `Follow the Redux Store and Redux Actions in the console or in Redux DevTools.
                API server hosted in Heroku, MongoDB server hosted in Atlas.
                JavaScript, React, Redux, Redux-Thunk, Express, Mongoose, SASS.
                Responsive, mobile first.`,
  imgFileName: 'taskmanager.png',
  linkUrl: 'https://abbeblubb.github.io/taskmanager/',
  linkText: 'Look into the task manager'
};

const snakeEN = {
  id: 'snake',
  name: 'JavaScript Snake Game',
  short: 'Eat apples and get bigger!',
  description: `Make swipe gestures on the screen or use the keyboard arrows to control the snake.
                Made with JavaScript.
                Mobile first.`,
  imgFileName: 'snake.png',
  linkUrl: 'https://abbeblubb.github.io/snake/',
  linkText: 'Play'
};

const portfolioEN = {
  id: 'portfolio',
  name: 'This Portfolio',
  short: 'Portfolio with a11y and i18n',
  description: `Reacts Context API and cookies are used for multilanguage purposes.
                Responsive, mobile first, accessibility, internationalization.`,
  imgFileName: 'portfolio.png',
  linkUrl: '',
  linkText: ''
};

export const projectText = {

  en: [
    whoEN,
    fastEN,
    scraperEN,
    taskmanagerEN,
    snakeEN,
    portfolioEN
    //stocksEN
  ],

  es: [
    whoEN,
    fastEN,
    scraperEN,
    taskmanagerEN,
    snakeEN,
    portfolioEN
    //stocksEN
  ],

  ru: [
    whoEN,
    fastEN,
    scraperEN,
    taskmanagerEN,
    snakeEN,
    portfolioEN
    //stocksEN
  ],

  sv: [
    whoEN,
    fastEN,
    scraperEN,
    taskmanagerEN,
    snakeEN,
    portfolioEN
    //stocksEN
  ]
};
