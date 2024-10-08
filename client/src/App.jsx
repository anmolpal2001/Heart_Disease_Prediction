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
import Authenticated from "./components/Authenticated";
import { Toaster } from "react-hot-toast";
import Profile from "./pages/Profile";
import Output from "./pages/Output";
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
        element: (
          <Authenticated>
            <SignUpPage />
          </Authenticated>
        ),
      },
      {
        path: "sign-in",
        element: (
          <Authenticated>
            <SignInPage />
          </Authenticated>
        ),
      },
      {
        path: "form",
        children : [
          {
            index : true,
            element :<Private><Form /></Private>
          },
          {
            path : "output",
            element: <Private><Output /></Private>,
          }
        ]
      },
      {
        path: "/profile",
        element: <Private><Profile/></Private>,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
      {
        path: "/reset-password/:id/:token",
        element: <ResetPassword />,
      },
      {
        path: "/forgot-password",
        element: <ForgetPassword />,
      },
      {
        path: "/reports",
        element: <Private><Results /></Private>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
