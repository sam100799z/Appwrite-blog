import React from 'react'
import { Link } from 'react-router-dom'
import LogoImage from '../../assets/letter-c.png'

function Footer() {
    return (
        <footer className=" bg-slate-200 p-4 rounded-sm">

            <div className="flex flex-wrap justify-center gap-[100px]">

                {/* Logo and Copyright */}
                <div className="flex flex-col">
                    <Link to="/">
                        <div className="mb-4 flex justify-center w-[70px] items-center">
                            <img src={LogoImage} alt="" />
                            <p className='font-ptserif font-bold'>Chronique</p>
                        </div>
                    </Link>

                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} All Rights Reserved.
                    </p>
                </div>


                <div className="links flex flex-col py-4">
                    <ul>
                        {["About"].map((item) => (
                            <li key={item} className="mb-4">
                                <Link
                                    className="text-base font-medium text-black hover:text-gray-600 transition duration-200"
                                    to="/about"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <ul>
                        {["Contact"].map((item) => (
                            <li key={item} className="mb-4">
                                <Link
                                    className="text-base font-medium text-black hover:text-gray-600 transition duration-200"
                                    to="/contact"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer