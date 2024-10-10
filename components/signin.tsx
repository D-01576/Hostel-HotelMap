"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";
import Message from "@/components/messgae"; 
import { auth, provider } from '@/firebase'; 
import { signInWithPopup } from "firebase/auth";
import Link from "next/link";

export default function SignI() {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<string>(""); 
  const [showMessage, setShowMessage] = useState<boolean>(false); 
  const [error,seterr] = useState<boolean>(true);

  const handleemail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlepass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };

  const submitit = () => {
    if (isSubmitting) return; 
    setIsSubmitting(true); 

    axios.post('/api/admin/signin', { email: email, password: pass})
      .then((response) => {
        if (response.data.message === 'Success') { 
          setMessage(response.data.message ); 
        } else {
          setMessage(response.data.code ); 
          seterr(false);
        }
        setShowMessage(true);
      })
      .catch((error) => {
        console.error('There was an error with the request:', error);
        setMessage(error.message);
        seterr(false); 
        setShowMessage(true); 
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handlegoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const token = await userCredential.user.getIdToken(); 
      console.log("Google Sign-in Success:", token);
      setMessage("Google Sign-in Success");
      setShowMessage(true);

    } catch (error: any) {
      console.error('Google Sign-in Error:', error.code, error.message);
      setMessage(`Google Sign-in failed: ${error.message}`);
      seterr(false);
      setShowMessage(true);
    }
  };

  const handleCloseMessage = () => {
    setShowMessage(false); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-bgc">
      <div className="bg-box p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-tc" htmlFor="email">
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
            <label className="block text-sm font-medium text-tc" htmlFor="password">
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
          </div>
          <a href="#" className="text-sm text-toc hover:underline mt-2 block">
              Forgot password?
            </a>
          <button
            type="submit"
            className={`w-full bg-bgbc text-white font-bold py-2 rounded-md hover:bg-gray-700 transition duration-200 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={submitit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading..." : "Sign In"}
          </button>
          
          <div className="flex items-center justify-between mt-4">
            <span className="border-b w-1/5 border-gray-300"></span>
            <span className="text-gray-500">Or</span>
            <span className="border-b w-1/5 border-gray-300"></span>
          </div>
          <div className="flex justify-around mt-4">
            <button className="flex items-center bg-gray-300 text-gray-900 px-4 py-2 rounded-md w-full justify-center" onClick={handlegoogle}>
              <span className="mr-2">Sign In with Google</span>
            </button>
          </div>
          <p className="mt-4 text-sm text-center text-black w-full flex justify-center">
            Do not have an account?
            <Link href="/admin/signup" className="text-toc hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      
      {showMessage && (
        <Message message={message} onClose={handleCloseMessage} error={error}/>
      )}
    </div>
  );
}
