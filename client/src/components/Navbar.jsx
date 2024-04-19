import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import{useSelector,useDispatch} from 'react-redux'
import{logout}from '../redux/auth/authSlice'
const Navbar = () => {
    const location = useLocation();
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const isAuth=useSelector((state)=>state.auth.isAuthenticated)
    const logoutHandler=()=>{
dispatch(logout())
        navigate('/')
    }
  return (
    <header className="sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-3">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            className="w-full h-12"
                            alt="Logo"
                        />
                        <h1 className="text-2xl font-bold text-gray-800">HelthCare</h1>
                    </Link>
                    {(location.pathname === "/"||location.pathname==='/sign-up') && <div className="flex items-center lg:order-2">
                      { isAuth?(<Link
                          
                            className="text-white bg-[#2A8683]  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            <button onClick={logoutHandler}>
                            Logout
                            </button>
                        </Link>):
                       (<Link
                            to="sign-in"
                            className="text-white bg-[#2A8683]  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get Started
                        </Link>)}
                    </div>}
                    {/* <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div> */}
                </div>
            </nav>
        </header>

  )
}

export default Navbar