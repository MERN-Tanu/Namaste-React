import "./App.css";
import { Provider } from "react-redux";
import store from "./utils/store";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Watch from "./components/Watch";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <Watch />,
      },
    ],
  },
]);
const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <h2>Inside App</h2> */}
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
    /*
   1. Head
   2. Body
   3. Sidebar
   4. MenuItems
   5. MainContainer
   6. ButtonList
   7. VideoContainer
   8. VideoCard
  
*/
  );
};

export default App;
