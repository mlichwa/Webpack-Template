[![webpack version](https://badge.fury.io/js/webpack.svg)](https://badge.fury.io/js/webpack)
[![npm version](https://badge.fury.io/js/npm.svg)](https://badge.fury.io/js/npm)

# Webpack Starter Template
## Getting Started

This website skeleton is build based on npm and Webpack. Modules are installed thrugh npm and later on all files are compiled through Webpack. I decided to keep the html files 
minimal and focused on making it flexible and 


### Prerequisites

Before you install this template, you will need node and npm installed on your machine
* [Node.js](http://nodejs.org/)
* [npm](https://www.npmjs.com/)

### Installing

In order to install the template, you have to navigate to the root of the project's folder in your terminal and then run: 

```
npm install
```

At this point, npm should install all modules necessary to run this example. You can add/remove
modules in the package.js file.


### How this template works

Thanks to the use of Webpack and npm modules, there are lots of features you might want to incorporate into your web workflow:

* Development folder for building your app- /src
* Production folder for compiling the app- /dist
* Minification plugins to make your html/css/js files minified.
* Code documentation with JSDoc module.- /docs
* Jquery already included.
* Bootstrap included.
* Mustache.js enabled.
* Dist and Docs folders rebuild every time you run prod script

### Development

Development enviroment can be run by: 

```
npm run dev
```

Once app compiles, you will be able to access the code by going to http://localhost:8080 in your browser.This command uses webpack-dev-server and doesn't write any new files to the disk. While  webpack-dev-server runs, you can modify your css/js and html files. Localhost website you're working on will be refreshed every time you save your progress.



## Deployment

Deployment is as easy as running npm run dev command in your terminal window.

```
npm run dev
```

Once the code compiles, all files will be stored in the distribution /dist folder. Javascript will be bundled into one file and minified. SCSS files will be converted to CSS, combined and minified as well. HTML files will be minified. Separate /img and /font folders will be added.
Alongside adding the /dist folder, Webpack will run JSDoc plugin and create /docs folder with updated documentation for javascript. Also, this README file will be added to the front page of the documentation.

## Packages and Modules

The goal of this template was to automate as many tedious "behind the scene" processes as possible. In order to understand development and deployment processes, take a look at project.json and webpack.config.js. 



## Authors
* (Michal Lichwa)[http://michallichwa.com]

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* I used [Academind Webpack Tutorial](https://www.youtube.com/watch?v=GU-2T7k9NfI&list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os) while creating this template. 

