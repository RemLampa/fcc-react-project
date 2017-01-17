# fcc-react-project

A simple boilerplate for [Free Code Camp](https://www.freecodecamp.com) React
projects and exercises.

Features **Webpack Dev Server**, **Hot React Module Reloading**, **SASS**,
**Bootstrap** and **GitHub Pages Deployment.**

## Rationale

Free Code Camp suggests that its students use [Codepen](http://codepen.io) in
working with projects and exercises related to React. The problem with that is
most employers would want to see code in an applicant's GitHub profiles.

This project aims to provide the Free Code Camp students the tool to use GitHub
and GitHub Pages instead of Codepen as a showcase for their React projects,
exercises, and experiments to further bolster their chances at landing that
dream dev job. At the same time, students will become more accustomed to
development tools like the command line, Git, NPM, and Webpack.

Usage of this boilerplate results in the student's project having its own website
hosted at https://username.github.io/project-name.

The project has only the bare essentials to showcase a project in its own GitHub
page. Students will still need to set up features like `react-router`, `redux`,
code splitting, and unit testing by themselves.

## Requirements

- [Node.js and NPM](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/downloads)
- [Sass](http://sass-lang.com/install)

## Installation

1. `$ git clone https://github.com/ibleedfilm/fcc-react-project.git name-of-your-project`

2. `$ cd name-of-your-project`

3. `$ npm install`

## Configuration and Initial GitHub Set-Up

1. Create GitHub Repository.

  This will host your project's files.

  [Follow this guide](https://help.github.com/articles/creating-a-new-repository/)
  but DON'T initialize the new repository with `README`, license, or `gitignore`
  files.

  Take note of the repository's URL.

2. Edit `project.config.json` file:

  - `title` - Your project's name or title

  - `author` - Your name

  - `repoName` - The name of the GitHub repository you created in `step 1` (i.e.
    if the repo is in https://github.com/ibleedfilm/my-new-project, `repoName`
    should be `/my-new-project`)

3. Edit the following in `package.json` file:
  - `name`
  - `version`
  - `description`
  - `repository.url`
  - `keywords`
  - `author`
  - `bugs.url`
  - `homepage`

4. Delete and create your own `README.md` file.

5. `$ git remote rm origin`

6. `$ git remote add origin your-repository-url`
  (i.e. _git remote add origin https://github.com/your-username/your-react-project.git_)

7. `$ git add .`

8. `$ git commit -m "First commit"`

9. `$ git push origin master --set-upstream`

## Usage

- `$ npm start` - Fires up Webpack's development server with hot module reloading.
Local site can be accessed at `http://localhost:3000`

- `$ npm run deploy` - Builds your app in the `gh-pages` git branch and deploys
it in GitHub Pages which can be accessed at `https://your-username.github.io/your-project-name`

- React source files reside in `src` folder. For the most part, this should be
your working folder.

- Styles may use SASS `*.scss` format.

- If Bootstrap is needed, it may be imported by adding the following code at the top of the main SCSS file:

  ```sass
  $icon-font-path: '~bootstrap-sass/assets/fonts/bootstrap/';

  @import '~bootstrap-sass/assets/stylesheets/bootstrap';
  ```

- `webpack.config.js` is the configuration file for Webpack Dev Server

- `webpack.config.prod.js` is the configuration file for Webpack's production
build process

- `public` folder will contain build files from Webpack and SASS. This will be
automatically generated, so you don't have to bother yourself with it.

- `dev` folder contains files needed by Webpack Dev Server to render the app.
You don't need to tinker with this folder unless you make breaking changes to
`webpack.config.js`.

- `index_template.ejs` helps Webpack render production HTML file for deployment.
There's nothing much you need to change in this file.

## CONTRIBUTING

If you're interested in helping out, kindly fork this project and submit pull
requests.

You may also use the project's [Issues Page](https://github.com/ibleedfilm/fcc-react-project/issues)
to submit bug reports and feature requests.

Thanks in advance! ^_^

## LICENSE
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.
