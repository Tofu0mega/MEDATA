'use client';

import { useState, useEffect } from 'react';
import Dashboard from '../Dashboard/page';
import Header from '../component/layout/header.js';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// ReportItem component
const ReportItem = ({ report, isOpen, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md mb-2 w-full">
      <button
        className={`w-full py-1 px-8 font-semibold text-left flex justify-between items-center ${isOpen ? 'bg-gray-400 text-white' : 'bg-gray-400 text-white hover:bg-gray-500'} focus:outline-none transition duration-300`}
        onClick={onClick}
      >
        <div>
          <h2 className="text-lg font-bold">{report.title}</h2>
          <p className="text-sm">{`Disease: ${report.disease}`}</p>
          <p className="text-sm">{`Checked In: ${report.checkedInDate}`}</p>
        </div>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <div className="p-6 bg-gray-100 border-t border-gray-300">
          <p>{report.content}</p>
        </div>
      )}
    </div>
  );
};

// Main Report component
const Report = () => {
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);

  useEffect(() => {
    const token=localStorage.getItem('token')
    console.log(token)
    // Fetch report data from the backend
    fetch('http://localhost:5000/patients/getrecord',{headers:{
      token: `${token}`}})

     // Replace with your actual backend URL      
      .then(response => response.json()) // Convert response to JSON
      .then(data => {
        // Map backend response to frontend expected structure
        const mappedData = data.map(report => ({
          id: report._id,
          name: report._name,
          age: report._age,
          race: report._race,
          ethnicity: report._ethnicity,
          address: report._address,
          history: report._history,
          complain: report._complain,
          doctorassigned: report._assigneddoctor,
          title: report._complain, // Example mapping for title
          disease: report._history, // Example mapping for disease
          checkedInDate: report._Checkedin, // Add a placeholder if not provided by the backend
          content: report._notes // Combine fields for content
        }));
        
        setReports(mappedData); // Set transformed data to reports state
      })
      .catch(error => console.error('Error fetching reports:', error)); // Log any errors
  }, []);

  const handleReportClick = (reportId) => {
    setSelectedReport(reportId === selectedReport ? null : reportId);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <Header />
      <div className="flex flex-1 mt-16">
        <Dashboard />
        <div className="flex-1 flex flex-col items-center p-10">
          <div className="min-h-screen flex flex-col items-center justify-center w-full">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Patient Reports</h1>
            <div className="w-full max-w-2xl">
              {reports.map((report) => (
                <div key={report.id} className="bg-white rounded-lg shadow-md mb-2 w-full">
                  <button
                    className={`w-full py-2 px-8 font-semibold text-left ${selectedReport === report.id ? 'bg-gray-600 text-white' : 'bg-gray-400 text-gray-800 hover:bg-gray-500'} focus:outline-none transition duration-300`}
                    onClick={() => handleReportClick(report.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-lg font-bold">{report.title}</h2>
                        <p className="text-sm">{`History: ${report.disease}`}</p>
                        <p className="text-sm">{`Checked In: ${report.checkedInDate}`}</p>
                      </div>
                    </div>
                  </button>
                  {selectedReport === report.id && (
                    <div className="p-6 bg-gray-100 border-t border-gray-300">
                      <p>{`Name: ${report.name}`}</p>
                      <p>{`Age: ${report.age}`}</p>
                      <p>{`Race: ${report.race}`}</p>
                      <p>{`Ethnicity: ${report.ethnicity}`}</p>
                      
                      <p>{`History: ${report.history}`}</p>
                      <p>{`Complain: ${report.complain}`}</p>
                      <p>{`Assigned Doctor: ${report.doctorassigned}`}</p>
                      <p>{`Additional Notes: ${report.content}`}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
