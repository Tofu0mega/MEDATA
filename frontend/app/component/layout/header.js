'use client';
import Link from "next/link";
import Image from "next/image";
// import {FaSignOutAlt} from 'react-icons/fa';
import {FaHome} from 'react-icons/fa';


export default function Header() {
  return (
    <header className="fixed w-full bg-gradient-to-r from-blue-100 via-blue-400 to-blue-200 text-white py-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <div className= "mt-1">
          <Image
            src="/images/logo.png"
            alt="MEDATA logo"
            width={35}
            height={35}
          />
          </div>
          <a href="/">
          <h1 className="mt-1.5 ml-5 mb-1 text-2xl font-bold">MEDATA</h1> 
          </a>
        </div>
        <nav>
          <ul className="flex space-x-4 ">
            <div style={{ marginLeft: '-2cm' }}>
            
              {/* <Link href={'/Signup'} className=" font-bold hover:text-gray-300 transition-colors duration-300"> Logout </Link> */}
              {/* <a href="/Signup" className="flex items-center p-4 hover:text-gray-300 transition-colors duration-300">
              <FaSignOutAlt className="mr-3" /> Logout
            </a> */}
            {/* <a href="/" className="flex items-center p-4 hover:text-gray-600 transition-colors duration-300">
                <FaHome className="mr-3" /> Home
              </a> */}
            </div>  
          </ul>
        </nav>
      </div>
    </header>
  );
}



