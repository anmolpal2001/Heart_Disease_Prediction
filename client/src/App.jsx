<<<<<<< HEAD
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import SignIn from './pages/SignIn';
import UserSignUp from './pages/UserSignUp';
import Home from './pages/Home';
function App() {

    const router =createBrowserRouter([
      {
  
  path:'/',element:<Root/>,children:[{
    index:true,element:<Home/>
  },
  {
    path:'sign-in',element:<SignIn/>
  },
  {
    path:'sign-up',element:<UserSignUp/>
  }
  ]
      }
    ])
    return (
      <RouterProvider router={router}/>
    );
  
=======
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home />
  },
  {
    path : "/sign-up",
    element : <SignUpPage />
  },
  {
    path : "/sign-in",
    element : <SignInPage />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
>>>>>>> a1d13f4a563ccdec66a96cd2e6f58374ac2f2909
}

export default App;
