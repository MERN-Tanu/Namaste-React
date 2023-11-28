# Types of Testing in React

(Time for the Test)

1. Unit Testing :
   To test the react component in Isolation.

2. Integration Testing :
   Multiple component interact with each other

3. End to End Testing :

   Testing a react application as soon as user land on the website to the user leave the website.
   GUI testing, integration testing, database testing, performance testing, security testing, and usability testing.
   It required different testing Like : Selenium,Cypress, and Appium are commonly used for E2E testing to improve efficiency and accuracy.
   There are two types of E2E testing:
   Horizontal: The most commonly used approach. It tests across multiple applications.
   Vertical: Another way to perform E2E testing.

# Some Important Commands for React :

```
 https://github.com/namastedev/namaste-react/commit/d3f0d801df96fb40a7d03cb411c72a469bbaef51#diff-7a92b40a85bd4f1ecab332c8f6060c5cbc3f358de43ec959cb6e9dbe6e1d8325


 https://github.com/namastedev/namaste-react/commit/b16c4baf3724e8190746f5c3e55e81d76370a8db

 API : Swiggy
  https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9756762&lng=77.6778473&collection=92868&tags=layout_ux4&sortBy=&filters=&type=rcv2&offset=0&page_type=null

```

Shimmer UI : It is skeleton of page it will come when loading occurs

```
Mocky for live API:

https://designer.mocky.io/design

```

```

```

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
// <h1 className="head" tabIndex={1}>
// Namaste React using JSX
// </h1>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// You will render the React Element like this

// root.render(heading);

// React Component
// Class Based Component - old
// Functional Component - New

// 1. Functional Component :

const HeadingComponent = () => (

  <div id="container">
    <h1 className="heading"> Namaste react Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// How will you Render your React component?

root.render(<HeadingComponent />);

/\*\*\*

- <div id="parent">
- <div id="child">
- <h1>I'm a H1 tag</h1>
- <h2>I'm a H2 tag</h2>
- </div>
- </div>
  */

// ReactElement(Object) => HTML(BROWSER UNDERSTAND)
// import React from "react";
// import ReactDOM from "react-dom/client";

// const parent = React.createElement(
// "div",
// { id: "parent" },
// React.createElement(
// "div",
// { id: "child" },
// [
// React.createElement("h1", {}, "I'm a H1 tagg"),
// React.createElement("h2", {}, "I'm a h2 tag"),
// ],
// React.createElement("div", { id: "child2" }, [
// React.createElement("h1", {}, "I'm a H1 tagg"),
// React.createElement("h2", {}, "I'm a h2 tag"),
// ])
// )
// );
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// const heading = React.createElement(
// "h1",
// { id: "headingtag", class: "htag" },
// "Hello alll"
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

# UseState and UseEffect

# React Hooks

(Normal JavaScript Utility functions)

- useState : Superpowerful state variables in react
- useEffect()

```


import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("header render");

  // if no dependency array => useEffect is called on every render
  //  if depenedency array is empty = [] => useEffect is called on initial render (just once)
  //  if dependency array is [btnNameReact] => called everytime [btnNameReact] is updated
  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
          <div>
            <button
              className="login"
              onClick={() => {
                btnNameReact === "Login"
                  ? setbtnNameReact("Logout")
                  : setbtnNameReact("Login");
              }}>
              {btnNameReact}
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;


```

# React Router:

How to install Routers in your code

```
 npm i react-router-dom

```

If you write anything in `<a href=""><a/>`, it will take loading time, but
In Routers, we have another way to add links in your code ,instead of `<a href=""></a>` tags.

```

```

# 2 Types of Routing in web apps

- Client side Routing
- Server side Routing

Swiggy menu Api

```

https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.952083&lng=77.7079919&restaurantId=290187&catalog_qa=undefined&submitAction=ENTER
```

# Redux Toolkit

- install @reduxjs/toolkit react-redux

1. ```
   npm install @reduxjs/toolkit
   ```

```
If you need React bindings:

```

npm install react-redux

```

- Build our store
- Connect our store to our app
- Create slice (cartSlice)
- Dispatch an Action
- Read the data from Selector
```
