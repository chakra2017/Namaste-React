/*

ReactELement(object)=>HTML(browser Understands)
*/

import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "./components/About";
import Contacts from "./components/Contacts";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
//import Grocery from "./components/Grocery";
// const Title = () => {
//   return (
//     <h1 className="head" tabIndex="5">
//       Namaste React using JSX
//     </h1>
//   );
// };
// //react element
// const title = (
//   <h1 className="head" tabIndex="5">
//     Namaste React using JSX
//   </h1>
// );

// //functional component
// const HeadingComponent = () => {
//   return (
//     <div id="container">
//       <Title />
//       {title}
//       <h1 className="heading">Namaste React Functional component</h1>
//     </div>
//   );
// };

// const stylecard = {
//   backgroundColor: "#f0f0f0",
// };

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Chakradhar",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

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
        path: "/About",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/Contacts",
        element: <Contacts />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
