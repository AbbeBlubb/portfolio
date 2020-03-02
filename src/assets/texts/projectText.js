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
                JavaScript, React, Redux, Redux-Thunk, Node, Express, Mongoose, SASS.
                Responsive, mobile first.`,
  imgFileName: 'taskmanager.png',
  linkUrl: 'https://abbeblubb.github.io/taskmanager/',
  linkText: 'Look into the task manager'
};

const taskmanagerES = {
  id: 'taskmanager',
  name: 'Administrador de tareas fullstack',
  short: 'Estado Global con Redux',
  description: `Sigue el store central de Redux y las acciones de Redux en la consola del navegador o en Redux DevTools.
                El servidor API está alojado en Heroku. El servidor MongoDB está alojado en Atlas.
                JavaScript, React, Redux, Redux-Thunk, Node, Express, Mongoose, SASS.
                Responsivo, mobile first.`,
  imgFileName: 'taskmanager.png',
  linkUrl: 'https://abbeblubb.github.io/taskmanager/',
  linkText: 'Mira el administrador'
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

const snakeES = {
  id: 'snake',
  name: 'Juego Snake en JavaScript',
  short: '¡Come manzanas y hazte grande!',
  description: `Haga gestos de deslizamiento en la pantalla o usa las flechas del teclado para controlar la serpiente.
                Programado en JavaScript.
                Mobile first.`,
  imgFileName: 'snake.png',
  linkUrl: 'https://abbeblubb.github.io/snake/',
  linkText: 'Juega'
};

const portfolioEN = {
  id: 'portfolio',
  name: 'This Portfolio',
  short: 'Portfolio with a11y and i18n',
  description: `React Context API and cookies are used for multilanguage purposes.
                Responsive, mobile first, accessibility, internationalization.`,
  imgFileName: 'portfolio.png',
  linkUrl: '',
  linkText: ''
};

const portfolioES = {
  id: 'portfolio',
  name: 'Este Portfolio',
  short: 'Portfolio con a11y and i18n',
  description: `La función de multilenguaje utiliza cookies y el API Context de React.
                Responsivo, mobile first, accesibilidad, internacionalización.`,
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
  ],

  es: [
    whoEN,
    fastEN,
    scraperEN,
    taskmanagerES,
    snakeES,
    portfolioES
  ],

  ru: [
    whoEN,
    fastEN,
    scraperEN,
    taskmanagerEN,
    snakeEN,
    portfolioEN
  ],

  sv: [
    whoEN,
    fastEN,
    scraperEN,
    taskmanagerEN,
    snakeEN,
    portfolioEN
  ]
};
