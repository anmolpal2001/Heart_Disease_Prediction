import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import Root from "./pages/Root";
import Form from "./pages/Form";
import Private from "./pages/Private";
import PageNotFound from "./pages/404";
import ResetPassword from "./pages/ResetPassword";
import ForgetPassword from "./pages/ForgetPassword";
import Results from "./pages/Results";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
      {
        path: "sign-in",
        element: <SignInPage />,
      },
      {
        path : "form",
        element : <Private><Form/></Private>
      },
      {
        path : "*",
        element : <PageNotFound/>
      },
      {
        path:'/reset-password/:id/:token',
        element:<ResetPassword/>
      },
      {
        path : "/forgot-password",
        element : <ForgetPassword/>
      },{
        path:'/reports',
        element:<Results/>
      }
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
