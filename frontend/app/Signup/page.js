'use client'
import Image from "next/image";
import { useState } from "react";
import Link from 'next/link';

export default function Signup() {
    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [creatingUser, setCreatingUser] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDOB] = useState('');
    const [error, setError] = useState(false);
    const [userType, setUserType] = useState('citizen'); // Default to citizen

    const handleToggle = () => {
        setIsChecked(prevState => !prevState);
    }

    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setCreatingUser(true);
        setError(false);
        console.log(password,confirmPassword)
    
        if (password !== confirmPassword) {
            setError(true);
            setCreatingUser(false);
            return;
        }
    
        try {
            const response = await fetch('http://localhost:5000/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                    dob,
                    userType,
                }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to create user');
            }
    
            setCreatingUser(false);
            alert('User created successfully!');
            // Redirect or handle success as needed
            window.location.href = '/Signin'; // Redirect to signin page after successful signup
        } catch (error) {
            console.error('Error creating user:', error);
            setError(true); // Display error message on form
            setCreatingUser(false); // Reset creating user state
        }
    }

    return (
        <main className="flex flex-col md:flex-row min-h-screen mt-7">
            {/* Left section */}
            <section className="flex-1 flex items-center justify-center md:justify-start">
                <div className="md:fixed left-60 top-1/2 transform -translate-y-1/2 w-auto flex justify-center">
                    <h1 className="text-6xl text-blue-500 font-bold transition-transform transform hover:scale-150 duration-1000 ease-in-out">
                        MEDATA
                    </h1>
                </div>
            </section>

            {/* Right Section */}
            <section className="flex-1 flex items-center justify-center md:items-start ">
                <div className="p-6 md:p-12 rounded-lg shadow-xl w-full max-w-lg bg-white">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign Up to your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleFormSubmit}>
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                                    First Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id='firstName'
                                        name="firstName"
                                        autoComplete="given-name"
                                        type="text"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={firstName}
                                        disabled={creatingUser}
                                        onChange={ev => setFirstName(ev.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                                    Last Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id='lastName'
                                        name="lastName"
                                        autoComplete="family-name"
                                        type="text"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={lastName}
                                        disabled={creatingUser}
                                        onChange={ev => setLastName(ev.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id='email'
                                        name="email"
                                        autoComplete="email"
                                        type="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={email}
                                        disabled={creatingUser}
                                        onChange={ev => setEmail(ev.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    New Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id='password'
                                        name="password"
                                        autoComplete="new-password"
                                        type="password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={password}
                                        disabled={creatingUser}
                                        onChange={ev => setPassword(ev.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                                    Confirm Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id='confirmPassword'
                                        name="confirmPassword"
                                        autoComplete="new-password"
                                        type="password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={confirmPassword}
                                        disabled={creatingUser}
                                        onChange={ev => setConfirmPassword(ev.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="dob" className="block text-sm font-medium leading-6 text-gray-900">
                                    Date of Birth
                                </label>
                                <div className="mt-2">
                                    <input
                                        id='dob'
                                        name="dob"
                                        autoComplete="bday"
                                        type="date"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={dob}
                                        disabled={creatingUser}
                                        onChange={ev => setDOB(ev.target.value)}
                                    />
                                </div>
                            </div>
                            {/* User type selection */}
                            <div>
                                <span className="block text-sm font-medium leading-6 text-gray-900">Are you a:</span>
                                <div className="mt-2 space-x-4">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="form-radio"
                                            name="userType"
                                            value="citizen"
                                            checked={userType === 'citizen'}
                                            onChange={() => setUserType('citizen')}
                                        />
                                        <span className="ml-2">Citizen</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="form-radio"
                                            name="userType"
                                            value="doctor"
                                            checked={userType === 'doctor'}
                                            onChange={() => setUserType('doctor')}
                                        />
                                        <span className="ml-2">Doctor</span>
                                    </label>
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
                                        required
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
                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    disabled={creatingUser}
                                >
                                    Sign Up
                                </button>
                            </div>
                            <p className="mt-4 text-center text-sm text-red-500">{error && 'Passwords do not match'}</p>
                            <p className="mt-10 text-center text-sm text-gray-500">
                                Already a member? {''}
                                <Link href="Signin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                    Sign In now
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

