/*
const templateEN = {
  id: '',
  name: '',
  short: '',
  description: ``,
  imgFileName: 'webpack.svg',
  linkUrlGui: '',
  linkTextGui: '',
  linkUrlCodeFrontend: '',
  linkTextCodeFrontend: '',
  linkUrlCodeBackend: '',
  linkTextCodeBackend: ''
};
*/

const federationEN = {
  id: 'federation',
  name: 'Webpack 5',
  short: 'Federated modules in 3 applications',
  description: `The public site consumes modules from the modules application and the infrastructure application.`,
  imgFileName: 'webpack.svg',
  linkUrlGui: '',
  linkTextGui: '',
  linkUrlCodeFrontend: 'https://github.com/AbbeBlubb/module-federation',
  linkTextCodeFrontend: 'GitHub repo',
  linkUrlCodeBackend: '',
  linkTextCodeBackend: ''
};

const whoEN = {
  id: 'who',
  name: 'Fullstack Authentication and Apache',
  short: 'Secure application with JWT, Apache configuration',
  description: `Create an account, log in, and see all the usernames.
                Passwords are encrypted in the database.
                On log in, if credentials match, a Jason Web Token (JWT) is created and sent to the client.
                Access to the API requires the JWT in the request.
                The authentication server is made on Node with Express, Mongoose, bcrypt, passport.
                The client is made with React and served on an Apache2 web server on Ubuntu in a Linode virtual machine.
                The authentication server and the client are made for reusability.
                Responsive, mobile first, accessibility.`,
  imgFileName: 'who.png',
  linkUrlGui: 'http://www.vemharbetalat.se',
  linkTextGui: 'VemHarBetalat.se',
  linkUrlCodeFrontend: 'https://github.com/AbbeBlubb/vemharbetalat',
  linkTextCodeFrontend: 'GUI code',
  linkUrlCodeBackend: 'https://github.com/AbbeBlubb/auth-server',
  linkTextCodeBackend: 'Authentication server code'
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
  linkUrlGui: 'https://abbeblubb.github.io/fast/',
  linkTextGui: 'Experience fast loading',
  linkUrlCodeFrontend: 'https://github.com/AbbeBlubb/fast',
  linkTextCodeFrontend: 'GitHub repo',
  linkUrlCodeBackend: '',
  linkTextCodeBackend: ''
};

const qualityEN = {
  id: 'quality',
  name: 'Code Quality',
  short: 'Configuration for Husky, ESLint & Prettier in a TypeScript React application',
  description: `Configuration for Husky, lint-staged, Prettier, Eslint, Webpack, TypeScript and React.
                Husky is used for running the pre-commit Git hook. 
                This pre-commit hook runs lint-staged that runs a Prettier-command on specific files. 
                Prettier thus formats the code on commit. 
                Prettier is integrated with ESLint.
                Also Webpack configuration for React and TypeScript.`,
  imgFileName: 'webpack.svg',
  linkUrlGui: '',
  linkTextGui: '',
  linkUrlCodeFrontend: 'https://github.com/AbbeBlubb/react-ts-husky-eslint-prettier',
  linkTextCodeFrontend: 'GitHub repo',
  linkUrlCodeBackend: '',
  linkTextCodeBackend: ''
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
  linkUrlGui: 'https://abbeblubb.github.io/scraper-node/',
  linkTextGui: 'Scrape the news site',
  linkUrlCodeFrontend: '',
  linkTextCodeFrontend: '',
  linkUrlCodeBackend: 'https://github.com/AbbeBlubb/scraper-node-backend',
  linkTextCodeBackend: 'Scraper server code'
};

const taskmanagerEN = {
  id: 'taskmanager',
  name: 'Fullstack Task Manager',
  short: 'Global State with Redux',
  description: `Follow the Redux Store and Redux Actions in the console or in Redux DevTools.
                API server hosted in Heroku, MongoDB server hosted in Atlas.
                JavaScript, React, Redux, Redux-Thunk, Node, Express, Mongoose, SASS.
                Responsive, mobile first.`,
  imgFileName: 'redux.svg',
  linkUrlGui: 'https://abbeblubb.github.io/taskmanager/',
  linkTextGui: 'Look into the task manager',
  linkUrlCodeFrontend: 'https://github.com/AbbeBlubb/taskmanager',
  linkTextCodeFrontend: 'Frontend code',
  linkUrlCodeBackend: '', // https://github.com/AbbeBlubb/taskmanager-backend
  linkTextCodeBackend: '' // Backend code
};

const taskmanagerES = {
  id: 'taskmanager',
  name: 'Administrador de tareas fullstack',
  short: 'Estado Global con Redux',
  description: `Sigue el store central de Redux y las acciones de Redux en la consola del navegador o en Redux DevTools.
                El servidor API está alojado en Heroku. El servidor MongoDB está alojado en Atlas.
                JavaScript, React, Redux, Redux-Thunk, Node, Express, Mongoose, SASS.
                Responsivo, mobile first.`,
  imgFileName: 'redux.svg',
  linkUrlGui: 'https://abbeblubb.github.io/taskmanager/',
  linkTextGui: 'Mira el administrador',
  linkUrlCodeFrontend: 'https://github.com/AbbeBlubb/taskmanager',
  linkTextCodeFrontend: 'Código frontend',
  linkUrlCodeBackend: 'https://github.com/AbbeBlubb/taskmanager-backend',
  linkTextCodeBackend: 'Código backend'
};

const portfolioEN = {
  id: 'portfolio',
  name: 'This Portfolio',
  short: 'Portfolio with a11y, i18n and React Context',
  description: `React Context API and cookies are used for multilanguage purposes.
                Web manifest to download the page on Android.
                Responsive, mobile first, accessibility, internationalization.`,
  imgFileName: 'portfolio.png',
  linkUrlGui: '',
  linkTextGui: '',
  linkUrlCodeFrontend: '',
  linkTextCodeFrontend: '',
  linkUrlCodeBackend: '',
  linkTextCodeBackend: ''
};

const portfolioES = {
  id: 'portfolio',
  name: 'Este Portfolio',
  short: 'Portfolio con a11y, i18n y React Context',
  description: `La función de multilenguaje utiliza cookies y el API Context de React.
                Web manifest para descargar la página en Android.
                Responsivo, mobile first, accesibilidad, internacionalización.`,
  imgFileName: 'portfolio.png',
  linkUrlGui: '',
  linkTextGui: '',
  linkUrlCodeFrontend: '',
  linkTextCodeFrontend: '',
  linkUrlCodeBackend: '',
  linkTextCodeBackend: ''
};

export const projectText = {

  en: [
    federationEN,
    whoEN,
    fastEN,
    qualityEN,
    scraperEN,
    taskmanagerEN,
    portfolioEN
  ],

  es: [
    federationEN,
    whoEN,
    fastEN,
    qualityEN,
    scraperEN,
    taskmanagerES,
    portfolioES
  ],

  ru: [
    federationEN,
    whoEN,
    fastEN,
    qualityEN,
    scraperEN,
    taskmanagerEN,
    portfolioEN
  ],

  sv: [
    federationEN,
    whoEN,
    fastEN,
    qualityEN,
    scraperEN,
    taskmanagerEN,
    portfolioEN
  ]
};
