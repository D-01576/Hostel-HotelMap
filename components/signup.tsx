"use client";

import axios from "axios";
import React, { useState } from "react";
import Message from "@/components/messgae"; 

export default function SignU() {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<string>(""); 
  const [showMessage, setShowMessage] = useState<boolean>(false); 
  const [error,seterr] = useState<boolean>(true)

  const handleemail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlepass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };

  const submitit = () => {
    if (isSubmitting) return; 
    setIsSubmitting(true); 

    axios.post('/api/admin', { email: email, password: pass })
      .then((response) => {
        if (response.data.message === 'success') {
          setMessage(response.data.message ); 
        } else {
          setMessage(response.data.message ); 
          seterr(false)
        }
        setShowMessage(true);
      })
      .catch((error) => {
        console.error('There was an error with the request:', error);
        setMessage(error.message);
        seterr(false) 
        setShowMessage(true); 
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleCloseMessage = () => {
    setShowMessage(false); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
              onChange={handleemail}
              value={email}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
              onChange={handlepass}
              value={pass}
            />
            <a href="#" className="text-sm text-blue-600 hover:underline mt-2 block">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className={`w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-200 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={submitit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
          <div className="flex items-center justify-between mt-4">
            <span className="border-b w-1/5 border-gray-300"></span>
            <span className="text-gray-500">Or</span>
            <span className="border-b w-1/5 border-gray-300"></span>
          </div>
          <div className="flex justify-around mt-4">
            <button className="flex items-center bg-gray-100 text-gray-800 px-4 py-2 rounded-md w-full justify-center">
              <span className="mr-2">Login with Google</span>
            </button>
          </div>
          <p className="mt-4 text-sm text-center text-black w-full flex justify-center">
            Dont have an account?
            <a href="#" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
      
      {showMessage && (
        <Message message={message} onClose={handleCloseMessage} error={error}/>
      )}
    </div>
  );
}
