import React from 'react';
import Header from "../component/layout/header";
import Dashboard from "../Dashboard/page";

 
export default function HomePage() {
  
  return (
    <div className="min-h-screen flex flex-col style={{ fontFamily: 'Roboto, sans-serif' }}">
      <Header />
      <div className="flex flex-1 mt-16">
        <Dashboard />
        {/* <div className="ml-0 flex-1 p-8 bg-gradient-to-br from-white to-gray-100"> */}
        <div className = "flex-1">  
          <section className="text-center py-12 mt-12 bg-gradient-to-br from-black to-gray-700 shadow-md md mx-auto w-4/5">
            <h1 className="text-4xl font-bold text-white">
              Elevate Your Health Journey with
            </h1>
            <h1>
              <span className="text-5xl font-bold text-blue-400"> MEDATA </span>
            </h1>
            <h1 className="text-4xl font-bold text-white">
              Your Path to Wellness Begins Here !
            </h1>
          </section>
          <section className="p-12 rounded-lg shadow-lg bg-white my-8 mx-auto w-4/5">
            <div className="text-center">
              <h2 className="text-2xl text-gray-500">Our Story</h2>
              <h1 className="text-4xl font-bold text-blue-400">About Us</h1>
            </div>
            <div className="text-center text-gray-700 max-w-4xl mx-auto mt-4 flex flex-col gap-4">
              <p>
                Medata introduces a Blockchain-Based Electronic Health Record (EHR) system, utilizing React,
                Node.js, and Solidity for decentralized and secure storage of patient medical records.
              </p>
              <p className="font-semibold">Your Reports, Our Responsibility</p>
              <p className="font-semibold">Elevating Healthcare, One Record at a Time</p>
            </div>
          </section>
          <section className="p-12 rounded-lg shadow-lg bg-white my-8 mx-auto w-4/5">
            <div className="text-center">
              <h2 className="text-2xl text-gray-500">Dont Hesitate</h2>
              <h1 className="text-4xl font-bold text-blue-400">Contact Us</h1>
            </div>
            <div className="text-center">
              <a className="text-4xl underline text-gray-700" href="tel:+9779800000000">
                +977 980 000 0000
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}