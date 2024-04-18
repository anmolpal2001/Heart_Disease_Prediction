import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from  "./pages/Home";
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
}

export default App;
