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
  
}

export default App
