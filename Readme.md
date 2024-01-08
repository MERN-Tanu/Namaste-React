# How to pass data from child to parent?
1. Lifting-up state : we will initailise the same data to the parent component, so it will easy for us to pass data from child to parent.
2. Callback Function : 




# Some Important Commands for React :

Q: What is NPM?
A: It is a tool used for package management and the default package manager for Node projects.

NPM is installed when NodeJS is installed on a machine.

It comes with a command-line interface (CLI) used to interact with the online database of NPM.

This database is called the NPM Registry, and it hosts public and private 'packages.' To add or update packages, we use the NPM CLI to interact with this database.

npm alternative is yarn

How to initialize npm?

```
   npm init
   npm init -y
```

can be used to skip the setup step, npm takes care of it and creates the package.json json file automatically , but without configurations.

Q: What is Parcel/Webpack? Why do we need it?

A: Parcel/Webpack is type of a web application bundler used for development and productions purposes or power our application with different type functionalities and features.

It offers blazing fast performance utilizing multicore processing, and requires zero configuration.

Parcel can take any type of file as an entry point, but an HTML or JavaScript file is a good place to start.

Parcel/Webpack are type of bundlers that we use to power our application with different type functionalities and features.

Parcel Features:

HMR (Hot Module Replacement) - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files

File watcher algorithm - made with C++

Minification
Cleaning our code
DEV and production Build
Super fast building algorithm
Image optimization
Caching while development
Compresses
Compatible with older version of browser
HTTPS in dev
Port Number
Consistent hashing algorithm
Zero Configuration
Automatic code splitting

installation commands:

Install:

```
npm install -D parcel
```

-D is used for development and as a development dependency.

```
Parcel Commands :

For development build:
npx parcel <entry_point>

For production build :
npx parcel build <entry_point>
```

Q: What is .parcel-cache?

A: .parcel-cache is used by parcel(bundler) to reduce the building time. It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

Q: What is difference between dependencies vs devDependencies?

A: Dependencies should contain library and framework in which your app is built on, needs to function effectively. such as Vue, React, Angular, Express, JQuery and etc.

DevDependencies should contain modules/packages a developer needs during development. such as, parcel, webpack, vite, mocha.

These packages are necessary only while you are developing your project, not necessary on production.

To save a dependency as a devDependency on installation we need to do,

```
npm install --save-dev
```

instead of just,

```
npm install --save
```

# JSX

```
import React from "react";
import ReactDOM from "react-dom/client";

// In react creating element is an object
// React.createElement => Object => HTMLElement(render)

// we will create element in React

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
// console.log(heading);
// JSX (transpiled before it reaches the JS) - Parcel - Babel

// JSX Syntex used

// React Element

// const heading = (
//   <h1 className="head" tabIndex={1}>
//     Namaste React using JSX
//   </h1>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// You will render the React Element like this

// root.render(heading);

// React Component
// Class Based Component - old
//  Functional Component - New

// 1. Functional Component :

const HeadingComponent = () => (
  <div id="container">
    <h1 className="heading"> Namaste react Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// How will you Render your React component?

root.render(<HeadingComponent />);

/***
 * <div id="parent">
 * <div id="child">
 * <h1>I'm a H1 tag</h1>
 * <h2>I'm a H2 tag</h2>
 * </div>
 * </div>
 */

// ReactElement(Object) => HTML(BROWSER UNDERSTAND)
// import React from "react";
// import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     [
//       React.createElement("h1", {}, "I'm a H1 tagg"),
//       React.createElement("h2", {}, "I'm a h2 tag"),
//     ],
//     React.createElement("div", { id: "child2" }, [
//       React.createElement("h1", {}, "I'm a H1 tagg"),
//       React.createElement("h2", {}, "I'm a h2 tag"),
//     ])
//   )
// );
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// const heading = React.createElement(
//   "h1",
//   { id: "headingtag", class: "htag" },
//   "Hello alll"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
```

```
import React from "react";
import ReactDOM from "react-dom/client";

let ele = (
  <table className="tableDataColor">
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Contact</th>
      <th>Address</th>
      <th>location</th>
    </tr>
    <tr>
      <td>Tanu Singh</td>
      <td>tanuyadav91793@gmail.com</td>
      <td>868764546</td>
      <td>Maitri</td>
      <td>Lucknow</td>
    </tr>

    <tr>
      <td>Tanu Singh</td>
      <td>tanuyadav91793@gmail.com</td>
      <td>868764546</td>
      <td>Maitri</td>
      <td>Lucknow</td>
    </tr>
    <tr>
      <td>Tanu Singh</td>
      <td>tanuyadav91793@gmail.com</td>
      <td>868764546</td>
      <td>Maitri</td>
      <td>Lucknow</td>
    </tr>
    <tr>
      <td>Tanu Singh</td>
      <td>tanuyadav91793@gmail.com</td>
      <td>868764546</td>
      <td>Maitri</td>
      <td>Lucknow</td>
    </tr>
    <tr>
      <td>Tanu Singh</td>
      <td>tanuyadav91793@gmail.com</td>
      <td>868764546</td>
      <td>Maitri</td>
      <td>Lucknow</td>
    </tr>
  </table>
);

const element = <span>Hi,Everyone</span>;

const Title = () => (
  <h1 className="head" tabIndex="5">
    {element}
    Namaste React Using JSX
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    {ele}
    {element}
    <Title />
    <h1 className="heading"> Namaste React Functional Component</h1>
  </div>
);

const HeadingComponent1 = () => (
  <div className="container">
    {ele}
    {element}
    <HeadingComponent />
    <h1 id="heading">Hello Everyone</h1>
    <p>Welcome to Namste React</p>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent1 />);

```

#heading {
color: brown;
background-color: antiquewhite;
}

.tableDataColor,
th,
tr,
td {
border: 1px solid black;
border-collapse: collapse;
padding: 10px;
background-color: aquamarine;
}

```

```
