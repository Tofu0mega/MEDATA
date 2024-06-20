'use client'

import Image from "next/image";
import { useState } from "react";
import Link from 'next/link';
import Header from "../component/layout/header";
import Dashboard from "../Dashboard/page";

export default function PatientForm() {
const [isChecked, setIsChecked] = useState(false);
const [image, setImage] = useState(null);
const [preview, setPreview] = useState(null);
const [name, setName] = useState('');
const [age, setAge] = useState('');
const [race, setRace] = useState('');
const [ethnicity, setEthnicity] = useState('');
const [allergies, setAllergies] = useState('');
const [historys, setHistorys] = useState('');
const [complain, setComplain] = useState('');
const [diagnosis, setDiagnosis] = useState('');
const [medicine, setMedicine] = useState('');
const [assignedDoctor, setAssignedDoctor] = useState('');
const [hospital, setHospital] = useState('');
const [additionalNotes, setAdditionalNotes] = useState('');
const [error, setError] = useState('');
const handleToggle = () => {
    setIsChecked(prevState => !prevState);
};

const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
};

const handleFormSubmit = async (ev) => {
    ev.preventDefault();

    const formData = {
        name,
        age,
        race,
        ethnicity,
        allergies,
        historys,
        complain,
        diagnosis,
        medicine,
        assignedDoctor,
        hospital,
        additionalNotes,
        image,
        isChecked
    };

    try {
        console.log(`${formData.image}`)
        const response = await fetch('http://localhost:5000/patients/addreport', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'image':`${formData.image}`
            },
            body: JSON.stringify(formData),
           
        });

        if (!response.ok) {
            throw new Error('Failed to submit form');
        }

        setError('');
        window.alert('Form submission successful!');
        // Optionally redirect or reset form state after successful submission
        // Router.push('/'); // If using Next.js router
    } catch (err) {
        setError('Failed to submit form');
        console.error('Error submitting form:', err);
    }
};

return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: 'Roboto, sans-serif' }}>
        <Header />
        <div className="flex flex-1 mt-16">
            <Dashboard />

            <main className="flex flex-col items-center min-h-screen">
                <section className="flex items-center justify-center w-full px-20 py-10">
                    <div className="px-12 py-6 md:px-24 md:py-12 rounded-lg shadow-xl w-full max-w-lg bg-white">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Patient Information
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" action="#" method="POST" onSubmit={handleFormSubmit}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="name"
                                            name="name"
                                            autoComplete="name"
                                            type="text"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            value={name}
                                            onChange={ev => setName(ev.target.value)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="age" className="block text-sm font-medium leading-6 text-gray-900">
                                        Age
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="age"
                                            name="age"
                                            autoComplete="age"
                                            type="number"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            value={age}
                                            onChange={ev => setAge(ev.target.value)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="race" className="block text-sm font-medium leading-6 text-gray-900">
                                        Race
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="race"
                                            name="race"
                                            autoComplete="race"
                                            type="text"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            value={race}
                                            onChange={ev => setRace(ev.target.value)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="ethnicity" className="block text-sm font-medium leading-6 text-gray-900">
                                        Ethnicity
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="ethnicity"
                                            name="ethnicity"
                                            autoComplete="ethnicity"
                                            type="text"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            value={ethnicity}
                                            onChange={ev => setEthnicity(ev.target.value)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="allergies" className="block text-sm font-medium leading-6 text-gray-900">
                                        Allergies
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="allergies"
                                            name="allergies"
                                            autoComplete="allergies"
                                            rows="3"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            value={allergies}
                                            onChange={ev => setAllergies(ev.target.value)}
                                        ></textarea>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="historys" className="block text-sm font-medium leading-6 text-gray-900">
                                        History
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="historys"
                                            name="historys"
                                            autoComplete="historys"
                                            rows="3"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            value={historys}
                                            onChange={ev => setHistorys(ev.target.value)}
                                        ></textarea>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="complain" className="block text-sm font-medium leading-6 text-gray-900">
                                        Complaint
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="complain"
                                            name="complain"
                                            autoComplete="complain"
                                            rows="3"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            value={complain}
                                            onChange={ev => setComplain(ev.target.value)}
                                        ></textarea>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="diagnosis" className="block text-sm font-medium leading-6 text-gray-900">
                                        Diagnosis
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="diagnosis"
                                            name="diagnosis"
                                            autoComplete="diagnosis"
                                            rows="3"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            value={diagnosis}
                                            onChange={ev => setDiagnosis(ev.target.value)}
                                        ></textarea>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="medicine" className="block text-sm font-medium leading-6 text-gray-900">
                                        Medicine Prescribed
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="medicine"
                                            name="medicine"
                                            autoComplete="medicine"
                                            rows="3"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            value={medicine}
                                            onChange={ev => setMedicine(ev.target.value)}
                                        ></textarea>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="assignedDoctor" className="block text-sm font-medium leading-6 text-gray-900">
                                        Assigned Doctor
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="assignedDoctor"
                                            name="assignedDoctor"
                                            autoComplete="assignedDoctor"
                                            type="text"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            value={assignedDoctor}
                                            onChange={ev => setAssignedDoctor(ev.target.value)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="hospital" className="block text-sm font-medium leading-6 text-gray-900">
                                        Hospital
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="hospital"
                                            name="hospital"
                                            autoComplete="hospital"
                                            type="text"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            value={hospital}
                                            onChange={ev => setHospital(ev.target.value)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="additionalNotes" className="block text-sm font-medium leading-6 text-gray-900">
                                        Additional Notes
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="additionalNotes"
                                            name="additionalNotes"
                                            autoComplete="additionalNotes"
                                            rows="3"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            value={additionalNotes}
                                            onChange={ev => setAdditionalNotes(ev.target.value)}
                                        ></textarea>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="Document" className="block text-sm font-medium leading-6 text-gray-900">
                                        Document
                                    </label>
                                    <div className="mt-2 flex items-center">
                                        {preview && (
                                            <Image
                                                src={preview}
                                                alt="Document Preview"
                                                width={50}
                                                height={50}
                                                className="mr-4 rounded-full"
                                            />
                                        )}
                                        <input
                                            id="Document"
                                            name="Document"
                                            type="file"
                                            accept="image/*"
                                            className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-500"
                                            onChange={handleImageChange}
                                        />
                                    </div>
                                </div>
                                {/* Agreement checkbox */}
                                <div className="flex gap-x-4 sm:col-span-2 items-center">
                                    <div className="relative flex-shrink-0 w-6 h-6 mr-2 transition duration-200 ease-in">
                                        <input
                                            type="checkbox"
                                            id="toggle"
                                            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 cursor-pointer"
                                            checked={isChecked}
                                            onChange={handleToggle}
                                            required
                                        />
                                        <label htmlFor="toggle"></label>
                                    </div>
                                    <label className="text-sm leading-6 text-gray-600">
                                        By selecting this, you agree to our
                                        <a href="#" className="font-semibold text-indigo-600"> privacy policy </a>
                                        and
                                        <a href="#" className="font-semibold text-indigo-600"> Terms conditions </a>
                                    </label>
                                </div>
                                {/* Submit the form */}
                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                            {error && (
                                <div className="text-red-500 text-sm mt-2">
                                    {error}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </div>
);
}