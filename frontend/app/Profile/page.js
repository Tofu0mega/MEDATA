'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Dashboard from '../Dashboard/page';
import Header from '../component/layout/header';

export default function Profile() {
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token=localStorage.getItem('token')
    const fetchPatientData = async () => {
      try {
        const response = await fetch('http://localhost:5000/users/id',{headers:{
          token:`${token}`
        }}); // Replace with your backend API endpoint
       
        const data = await response.json();
        setPatientData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPatientData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <Header />
      <div className="flex flex-1 mt-16">
        <Dashboard />
        
        <div className="flex-1 flex flex-col items-center p-10">
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
            <div className="flex flex-col items-center mb-8">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300">
                <Image
                  src="/images/patient-profile.jpg"
                  alt="Patient Profile"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <h2 className="mt-4 text-center text-2xl font-semibold text-gray-900">{patientData._name}</h2>
              <hr className="w-full mt-2 border-b-2 border-gray-500" />
            </div>

            <div className="flex mt-10">
              <div className="w-1/2 px-4">
                <h3 className="text-lg font-medium text-gray-700 mb-4">User Information</h3>
                <ul className="text-gray-600 space-y-2">
                  
                  <li><strong>Email:</strong> {patientData._email}</li>
                  <li><strong>Account Type:</strong> {patientData._acctype}</li>
                </ul>
              </div>

              {/* <div className="w-1/2 px-4">
                <h3 className="text-lg font-medium text-gray-700 mb-4">Reports</h3>
                <button class="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
                  <Link href="/Reports" className="text-White hover:underline">
                    View Past Reports
                  </Link>
                </button>
              </div> */}
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}
