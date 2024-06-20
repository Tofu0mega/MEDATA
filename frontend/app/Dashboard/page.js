import Image from "next/image";
import React from 'react';
import { FaUser, FaBell, FaCommentDots, FaCog, FaFileAlt, FaSignOutAlt,FaThLarge, FaFileMedicalAlt } from 'react-icons/fa';

export default function Dashboard() {
  return (
    <div className="flex">
      <div className="h-screen w-64 bg-blue-200 text-black fixed flex flex-col justify-between">
        <div>
          {/* <div className="flex items-center p-4">
            <h1 className="ml-4 text-xl font-bold">DASHBOARD</h1>
          </div> */}
          <div className="flex items-center bg-blue-300  shadow-md">
          {/* <FaTachometerAlt className="ml-4 mt-1 text-white text-xl" /> */}
          <FaThLarge className="ml-4 mt-1 text-white text-xl" /> 
            <h1 className="ml-5 mt-6 text-xl font-bold text-white">DASHBOARD</h1>
          </div>
          <nav className="mt-10 overflow-auto" style={{ maxHeight: 'calc(100vh - 64px)' }}>

            <a href="/Profile" className="flex items-center p-4 hover:bg-gray-400 border-b border-gray-400">
              <FaUser className="mr-3" /> Profile
            </a>
            {/* <a href="#notification" className="flex items-center p-4 hover:bg-gray-400">
              <FaBell className="mr-3" /> Notification
            </a> */}
            {/* <a href="#chat" className="flex items-center p-4 hover:bg-gray-400">
              <FaCommentDots className="mr-3" /> Chat
            </a> */}
            {/* <a href="#settings" className="flex items-center p-4 hover:bg-gray-400">
              <FaCog className="mr-3" /> Settings
            </a> */}
            <a href="/PatientForm" className="flex items-center p-4 hover:bg-gray-400 border-b border-gray-400">
              <FaFileAlt className="mr-3" /> Patient Form
            </a>
            <a href="/Report" className="flex items-center p-4 hover:bg-gray-400 border-b border-gray-400">
              <FaFileMedicalAlt className="mr-3" /> Past Reports
            </a>
            <a href="/Signup" className="flex items-center p-4 hover:bg-gray-400 ">
              <FaSignOutAlt className="mr-3" /> Logout
            </a>
          </nav>
        </div>
      </div>
      <div className="ml-64 w-full p-8">
      </div>
    </div>
  );
}
