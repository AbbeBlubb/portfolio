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
  short: 'Webpack 5 Module Federation and resilent sharing between 3 applications',
  description: `In this project, the Public site resiliently consumes UI modules from the Modules app and logic modules from the Infrastructure app.
                Built with React, run locally or in Docker containers.
                The project has resilent and dynamic imports of functions, values and React Components. 
                A proxy design pattern with cache is used for requests.
                A queue wrapper function queues calls to dynamically imported functions.
                While a typical Micro Frontend framework loads UI:s, Module Federation permits applications to share and consume all kinds of code, logic and libraries between the appications, which makes it a powerful tool for Micro Frontend purposes.
                
                `,
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
  short: 'Lazy-loading, infinite scroll with recycling, code splitting, compression, routing, event bus, all in plain JS',
  description: `The image loader lazy-loads the images when each image intersects the viewport.
                The infinitive scroll recycles the DOM elements, giving a seamless scrolling experience: scrolling up and down is smooth because there will only be 20 DOM elements that are recycled with new content.
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
  linkUrlCodeBackend: 'https://abbeblubb.github.io/fast/fastness',
  linkTextCodeBackend: 'How it has been done'
};

const qualityEN = {
  id: 'quality',
  name: 'Code Quality frontend',
  short: 'Frontend boilerplate: TypeScript, React, Webpack, Husky, lint-staged, ESLint, Prettier',
  description: `Boilerplate configuration for frontend.
                Webpack configuration for React and TypeScript.
                Configuration for Husky, lint-staged, Prettier, Eslint, Webpack, TypeScript and React.
                Husky is used for running the pre-commit Git hook. 
                This pre-commit hook runs lint-staged that runs a Prettier-command on specific files. 
                Prettier thus formats the code on commit. 
                Prettier is integrated with ESLint.`,
  imgFileName: 'quality.png',
  linkUrlGui: '',
  linkTextGui: '',
  linkUrlCodeFrontend: 'https://github.com/AbbeBlubb/react-ts-husky-eslint-prettier',
  linkTextCodeFrontend: 'GitHub repo',
  linkUrlCodeBackend: '',
  linkTextCodeBackend: ''
};

const qualityBackendEN = {
  id: 'qualityBackend',
  name: 'Code Quality backend',
  short: 'Server boilerplate: Docker, Node, TypeScript, Nodemon, Husky, lint-staged, Eslint, Prettier, Pug, dotenv, Jest',
  description: `Boilerplate configuration for backend in Node environment with TypeScript.
                Containarized with Docker, it uses volumes to enable watching with Nodemon. Nodemon is configured with TypeScript to reload on code changes.
                Dotenv file for secrets. 
                Templates with Pug. 
                Husky runs lint-staged on pre-commit, and lint-staged runs Prettier.
                ESLint configuration.
                Jest test runner with ts-jest as preset.`,
  imgFileName: 'quality.png',
  linkUrlGui: '',
  linkTextGui: '',
  linkUrlCodeFrontend: 'https://github.com/AbbeBlubb/node-ts',
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
    qualityBackendEN,
    scraperEN,
    dockerEN,
  ],

  es: [
    federationEN,
    fastEN,
    whoEN,
    qualityEN,
    qualityBackendEN,
    scraperEN,
    dockerEN,
  ],

  ru: [
    federationEN,
    fastEN,
    whoEN,
    qualityEN,
    qualityBackendEN,
    scraperEN,
    dockerEN,
  ],

  sv: [
    federationEN,
    fastEN,
    whoEN,
    qualityEN,
    qualityBackendEN,
    scraperEN,
    dockerEN,
  ]
};
