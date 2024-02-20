import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
      <h1 className="text-4xl font-bold mb-4 text-white">Welcome to AlexandriArcade</h1>
      <p className="text-lg text-center mb-8 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="flex space-x-4">
        <Link href="/auth/login" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Login
        </Link>
        <Link href="/auth/register" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Hero;
