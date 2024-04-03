import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./src/components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
// import UserClass from "./components/UserClass";
import UserContext from "./utils/UserContext";
// import Grocery from "./src/components/Grocery";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import Cart from "./components/Cart";
/***
 *   Header (Nav bar)
 * -> Logo
 * -> Home
 * -> About
 * -> Cart
 *
 *   Body
 *  -> Search
 *  -> ResturantCard
 *  -> Img
 *  -> Name of Res, Star Rating,cuisine, delivery tie
 *
 *
 *   Footer
 *  -> Copyright
 *  -> link
 *  ->Address
 *  -> Contact
 */

// Header Section using React Component

// RestaurantList is JSON Data for displaying cards

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy loading
// on demand loading
// Dynamic import

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [UserName, setuserInfo] = useState();

  // authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Tanu Singh",
    };
    setuserInfo(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: UserName, setuserInfo }}>
        <div className="app">
          {/* <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}>
          <Header />
        </UserContext.Provider> */}
          <Header />
          <Outlet />
          {/* <Body /> */}
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

// list (createBrowserRouter)=[]
// These are the child of outlet :
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <About />
          </Suspense>
        ),
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/resturant/:resId",
        element: <ResturantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
