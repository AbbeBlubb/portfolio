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
  linkUrlCodeBackend: '', // https://github.com/AbbeBlubb/apache2
  linkTextCodeBackend: ''
};
*/

const federationEN = {
  id: 'federation',
  name: 'Micro Frontends',
  short: 'Webpack 5 Module Federation between 3 applications',
  description: `In this project, the Public site consumes UI modules from the Modules app and logic from the Infrastructure app.
                Built with React, run locally or in Docker containers.
                Module Federation allows code sharing between applications in the form of federated modules.
                While a typical Micro Frontend framework loads UI:s, Module Federation permits different applications to share all kinds of code, logic and libraries between the appications.
                As JavaScript applications typically bundles with Webpack, Module Federation is a powerful tool for Micro Frontend purposes.`,
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
  name: 'Fullstack Authentication',
  short: 'Secure application with JWT, Apache configuration, Linode VM',
  description: `Create an account, log in, and see all the usernames.
                Passwords are encrypted in the database.
                On log in, if credentials match, a Jason Web Token (JWT) is created and sent to the client.
                Access to the API requires the JWT in the request.
                The authentication server is made on Node with Express, Mongoose, bcrypt, passport.
                The client is made with React and served on an Apache2 Web Server (HTTP Server).
                Apache runs on an Ubuntu server in a Linode virtual machine.
                The authentication server and the client are made for reusability.
                Responsive, mobile first, accessibility.`,
  imgFileName: 'secure-server.svg',
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
  imgFileName: 'quality.png',
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
  imgFileName: 'nodejs.svg',
  linkUrlGui: 'https://abbeblubb.github.io/scraper-node/',
  linkTextGui: 'Scrape the news site',
  linkUrlCodeFrontend: '',
  linkTextCodeFrontend: '',
  linkUrlCodeBackend: 'https://github.com/AbbeBlubb/scraper-node-backend',
  linkTextCodeBackend: 'Scraper server code'
};

const dockerEN = {
  id: 'docker',
  name: 'Docker',
  short: 'Containerization and CI/CD',
  description: `Experimental repo where Docker is used for containerization.`,
  imgFileName: 'docker.png',
  linkUrlGui: '',
  linkTextGui: '',
  linkUrlCodeFrontend: 'https://github.com/AbbeBlubb/docker-react',
  linkTextCodeFrontend: 'GitHub repo',
  linkUrlCodeBackend: '',
  linkTextCodeBackend: ''
};

export const projectText = {

  en: [
    federationEN,
    fastEN,
    whoEN,
    qualityEN,
    scraperEN,
    dockerEN,
  ],

  es: [
    federationEN,
    fastEN,
    whoEN,
    qualityEN,
    scraperEN,
    dockerEN,
  ],

  ru: [
    federationEN,
    fastEN,
    whoEN,
    qualityEN,
    scraperEN,
    dockerEN,
  ],

  sv: [
    federationEN,
    fastEN,
    whoEN,
    qualityEN,
    scraperEN,
    dockerEN,
  ]
};
