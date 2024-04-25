import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="hidden lg:flex lg:items-center">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/showcase"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Showcase
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/faq"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    FAQ
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden text-gray-800 focus:ring-4 focus:ring-gray-300 rounded-lg p-2 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
                                />
                            </svg>
                        </button>
                        <div
                            className={`${
                                isOpen ? 'block' : 'hidden'
                            } lg:hidden absolute top-14 left-0 right-0 bg-white border-t border-gray-200`}
                        >
                            <ul className="flex flex-col mt-4 font-medium">
                                <li>
                                    <NavLink
                                        to="/"
                                        onClick={toggleMenu}
                                        className="block py-2 pl-4 pr-10 text-gray-700 hover:text-orange-700"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/portfolio"
                                        onClick={toggleMenu}
                                        className="block py-2 pl-4 pr-10 text-gray-700 hover:text-orange-700"
                                    >
                                        Portfolio
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about"
                                        onClick={toggleMenu}
                                        className="block py-2 pl-4 pr-10 text-gray-700 hover:text-orange-700"
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact"
                                        onClick={toggleMenu}
                                        className="block py-2 pl-4 pr-10 text-gray-700 hover:text-orange-700"
                                    >
                                        Contact Us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/faq"
                                        onClick={toggleMenu}
                                        className="block py-2 pl-4 pr-10 text-gray-700 hover:text-orange-700"
                                    >
                                        FAQ
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden lg:flex lg:items-center">
                            <Link
                                to="#"
                                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Log in
                            </Link>
                            <Link
                                to="#"
                                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Get started
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
