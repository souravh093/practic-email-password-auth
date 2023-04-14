import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth"
import app from "../../../Firebase/Firebase";

const auth = getAuth(app)



const SingUp = () => {

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('hello')
        const name = event.target.username.value
        const email = event.target.email.value
        const password = event.target.password.value
        if(!/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
            setError('Please enter strong password')
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedInUser = result.user
                profileUpdate(loggedInUser, name)
                emailVerificationSend(loggedInUser)
                console.log(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const profileUpdate = (user, name) => {
        updateProfile(user, {
            displayName: name,
        }).then(() => {
            console.log('Updated profile')
        }).catch(error => {
            console.log('error', error.message)
        })
    }

    const emailVerificationSend = (user) => {
        sendEmailVerification(user)
            .then(() => {
                setSuccess('Check your email')
            })
    }

  return (
    <div className="h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <input type="submit" value="Submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
          <div>
            <Link
              to="/login"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Login
            </Link>
          </div>
        </div>
      <p className="text-red-500 mt-5">{error}</p>
      <p className="text-sky-500 mt-5">{success}</p>
      </form>
    </div>
  );
};

export default SingUp;
