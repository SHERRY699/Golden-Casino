"use client";

import { ReactNode, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?:ReactNode
  }
  

export default function AuthModal({ isOpen, onClose }:AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-[#131313] rounded-lg shadow-lg w-full max-w-[700px] flex flex-col md:flex-row overflow-hidden h-[650px]">
        {/* Left Image Section */}
        <div className="hidden md:block w-1/2 relative h-full">
          <Image
            src={isLogin ? "/images/lion.webp" : "/images/lion1.webp"}
            layout="fill"
            objectFit="cover"
            alt="Auth Banner"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-6 relative flex flex-col justify-center">
          <button className="absolute top-3 right-3 text-white" onClick={onClose}>
            <X size={24} />
          </button>

          {/* Tabs */}
          <div className="flex space-x-4 mb-6">
            <button
              className={`px-4 py-2 rounded-md font-semibold transition-colors duration-300 ${isLogin ? "bg-[#ebbe7d] text-black" : "text-white bg-[#262626]"}`}
              onClick={() => setIsLogin(true)}
            >
              Log In
            </button>
            <button
              className={`px-4 py-2 rounded-md font-semibold transition-colors duration-300 ${!isLogin ? "bg-[#ebbe7d] text-black" : "text-white bg-[#262626]"}`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <div className="flex flex-col space-y-4">
            {!isLogin && (
              <input
                type="text"
                placeholder="Username"
                className="w-full p-3 bg-[#262626] text-white rounded-lg border border-gray-700 focus:outline-none"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-[#262626] text-white rounded-lg border border-gray-700 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-[#262626] text-white rounded-lg border border-gray-700 focus:outline-none"
            />
            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-3 bg-[#262626] text-white rounded-lg border border-gray-700 focus:outline-none"
              />
            )}
            <button className="w-full py-3 bg-[#ebbe7d] text-black font-bold rounded-lg">
              {isLogin ? "Login" : "Sign Up"}
            </button>
            
            {/* Social Logins - Only for Login */}
            {isLogin && (
              <>
                <p className="text-center text-gray-400">Or login with:</p>
                <div className="flex justify-center gap-4">
                  <button className="p-2 bg-gray-700 rounded-full">🐻</button> {/* Google */}
                  <button className="p-2 bg-gray-700 rounded-full">🍏</button> {/* Apple */}
                  <button className="p-2 bg-gray-700 rounded-full">🇹</button> {/* Twitter */}
                  <button className="p-2 bg-gray-700 rounded-full">📨</button> {/* Email */}
                </div>
              </>
            )}

            {isLogin && (
              <p className="text-center text-sm text-gray-400 mt-4 cursor-pointer hover:text-gray-300">
                Forgot password?
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
