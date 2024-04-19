import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from  "./pages/Home";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import Root from "./pages/Root";
import Form from "./pages/Form"

const router = createBrowserRouter([
  {
    path : "/",
    element : <Root />
    ,children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path : "sign-up",
        element : <SignUpPage />
      },
      {
        path : "sign-in",
        element : <SignInPage />
      },
      {
        path:"form",
        element:<Form/>
      }
    ]
  }

 
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
