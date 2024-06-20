'use client'

import Signin from "./Signin/page";
import Signup from "./Signup/page";
import Image from "next/image"
import { useState } from "react"
import Link from 'next/link';


export default function PatientForm(){
    const [isChecked, setIsChecked]= useState(false);

    const handleToggle =() => {
        setIsChecked(prevState => !prevState);
    }

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [race, setRace] = useState('');
    const [ethnicity, setEthnicity] = useState('');
    const [allergies, setAllergies] = useState('');
    const [preConditions, setPreConditions] = useState('');
    const [complain, setComplain] = useState('');
    const [assignedDoctor, setAssignedDoctor] = useState('');
    const [hospital, setHospital] = useState('');
    const [additionalNotes, setAdditionalNotes] = useState('');
    const [error, setError] = useState(false);

    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setCreatingUser(true);
        setError(false);
    }

    return(
        <main className="flex flex-col md:flex-row min-h-screen">
            {/* Left section */}
            <section className= "flex-1 flex items-center justify-center">
                {/* Logo */}
                <div className= "absolute top-5 left-5">
                    <Image 
                        src="/images/logo.png"
                        alt="MEDATA logo"
                        width={100}
                        height={100}
                    />
                </div>
                <h1 className= "text-6xl text-white font-bold transition-transform transform hover:scale-150 duration-1000 ease-in-out">
                    MEDATA
                </h1>
            </section>

            {/* Right Section */}
            <section className= "flex-flex items-center justify-center md:item-start overflow-y-auto p-20">
                <div className="p-6 md:p-12 rounded-lg shadow-xl w-full max-w-lg bg-white">
                    <div className= "sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className= "mt-10 text-cemter text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Patient Information
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" onSubmit={handleFormSubmit}>
                        <form className="space-y-6 action='#' method=POST">
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
                                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={allergies}
            onChange={ev => setAllergies(ev.target.value)}
        ></textarea>
    </div>
</div>
<div>
    <label htmlFor="preConditions" className="block text-sm font-medium leading-6 text-gray-900">
        Pre Conditions
    </label>
    <div className="mt-2">
        <textarea
            id="preConditions"
            name="preConditions"
            autoComplete="preConditions"
            rows="3"
            required
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={preConditions}
            onChange={ev => setPreConditions(ev.target.value)}
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
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={complain}
            onChange={ev => setComplain(ev.target.value)}
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
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={additionalNotes}
            onChange={ev => setAdditionalNotes(ev.target.value)}
        ></textarea>
    </div>
</div>
{/* Agreement checkbox */}
<div className="flex gap-x-4 sm:col-span-2 items-center">
    <div className="relative flex-shrink-0 w-6 h-6 mr-2 transition duration-200 ease-in">
        <input
        type="checkbox"
        id="toggle"
        className="toggle-checkbox absolute block w-6 h-6 rounded-full gb-white border-4 cursor-pointer"
        checked={isChecked}
        onChange={handleToggle}
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
{/* Sign Up button */}
<div>
<button 
        type="submit"
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
    >
        Sign Up 
    </button>
</div>
{/* Sign Up with Google button */}
<button
    type="button"
    className="flex w-full justify-center rounded-md bg-red-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
>
    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mr-2" viewBox="00 16 16" fill="currentColor">
        <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
    </svg>
    Sign Up with Google
</button>

{/* Sign Up with Apple button */}
<button
    type="button"
    className="flex w-full justify-center rounded-md bg-red-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
>
    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mr-2" viewBox="00 16 16" fill="currentColor" >
        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
    </svg>
    Sign Up with Apple
</button>
                        </form>
                        <p className="mt-10 text-center text-sm text-gray-500">
                            Already a member?{' '}
                            <Link href="/">
                                <a className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                    Sign In now
                                </a>
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}
