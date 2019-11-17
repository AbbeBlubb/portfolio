const fastEN = {
  id: 'fast',
  name: 'Fast loading',
  short: 'Lazy-loading, recycling, code splitting, routing, plain JS',
  description: `The image loader lazy-loads the images when each image intersects the viewport.
                The infinitive scroll recycles the DOM elements, giving a seamless scrolling experience with only 20 DOM elements.
                Bulit with plain JavaScript without framework, meaning the code is as lightweight it can be.
                I've build an own routing and own event bus.
                Application code is splitted to facilitate caching.
                All this gives the user a fast-loading experience with minimum of code loading and processing.
                Webpack configuration for prod/dev, code splitting, SCSS, etc.
                Responsive, mobile first.`,
  imgFileName: 'fast.png',
  linkUrl: 'https://abbeblubb.github.io/lazy-loading/',
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

const stocksEN = {
  id: 'stocks',
  name: 'Fullstack Stocks Explorer',
  short: 'Financial rating with global newsfeed',
  description: `Explore the Swedish Large Cap list!
                Explained financial information and up-to-date global newsfeed.
                API server hosted in Heroku, MongoDB server hosted in mLab.
                JavaScript, React, Express, Mongoose.
                Responsive, mobile first.`,
  imgFileName: 'value.png',
  linkUrl: 'https://abbeblubb.github.io/stocks/',
  linkText: 'See the project'
};

export const projectText = {

  en: [
    fastEN,
    scraperEN,
    taskmanagerEN,
    snakeEN,
    //stocksEN
  ],

  es: [
    fastEN,
    scraperEN,
    taskmanagerEN,
    snakeEN,
    //stocksEN
  ],

  ru: [
    fastEN,
    scraperEN,
    taskmanagerEN,
    snakeEN,
    //stocksEN
  ],

  sv: [
    fastEN,
    scraperEN,
    taskmanagerEN,
    snakeEN,
    //stocksEN
  ]
};
