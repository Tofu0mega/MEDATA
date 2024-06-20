'use client';
import { useState } from "react";

export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInProgress, setLoginInProgress] = useState(false);
    const [error, setError] = useState('');

    async function handleFormSubmit(ev) {
        ev.preventDefault();
        console.log("Form submitted");
        setLoginInProgress(true);

        try {
            // Send login credentials to backend API
            const response = await fetch('http://localhost:5000/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            // Check if login was successful
            if (response.ok) {
                alert('Login successful!');
                // Store the token in localStorage
                localStorage.setItem('token', data.token);
                // Redirect to homepage or set logged-in state
                window.location.href = '/HomePage';
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An unexpected error occurred');
        } finally {
            setLoginInProgress(false);
        }
    }

    return (
        <main className="flex flex-col md:flex-row min-h-screen mt-7">
            {/*left section*/}
            <section className="flex-1 flex items-center justify-center md:justify-start">
                <div className="md:fixed left-60 top-1/2 transform -translate-y-1/2 w-auto flex justify-center">
                    <h1 className="text-6xl text-blue-500 font-bold transition-transform transform hover:scale-150 duration-1000 ease-in-out">
                        MEDATA
                    </h1>
                </div>
            </section>

            {/*Right Section */}
            <section className="flex-1 flex items-center justify-center md:item-start">
                <div className="p-6 md:p-12 rounded-lg shadow-xl w-full max-w-lg bg-white">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign In to your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6 action='#' method=POST " onSubmit={handleFormSubmit}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email
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
                                        disabled={loginInProgress}
                                        onChange={ev => setEmail(ev.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Forgot Password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id='password'
                                        name="password"
                                        autoComplete="current-password"
                                        type="password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={password}
                                        disabled={loginInProgress}
                                        onChange={ev => setPassword(ev.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    disabled={loginInProgress}
                                >
                                    Sign In
                                </button>
                            </div>
                        </form>
                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not a member? {''}
                            <a href="Signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Sign Up now
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
