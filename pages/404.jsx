import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white p-6">
      {/* floating stars */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-20 w-1 h-1 bg-white rounded-full animate-pulse" />
        <div className="absolute top-32 left-64 w-1 h-1 bg-white rounded-full animate-pulse delay-200" />
        <div className="absolute top-56 left-40 w-1 h-1 bg-white rounded-full animate-pulse delay-400" />
        <div className="absolute top-20 left-80 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-600" />
        <div className="absolute top-72 left-16 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-800" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-9xl md:text-[12rem] font-extrabold tracking-tight"><span className='text-[rgb(var(--color-primary))]'>4</span>0<span className='text-[rgb(var(--color-primary))]'>4</span></h1>
        <p className="mt-4 text-xl md:text-2xl max-w-lg text-center">
          Oops! The page you&apos;re looking for has drifted off into deep space.
        </p>
        <Link href="/"className="mt-8 inline-block px-6 py-3 bg-[rgb(var(--color-primary))] hover:bg-[rgb(var(--color-primary-dark))] text-[rgb(var(--color-text-secondary-dark))] rounded-md font-medium transition-colors duration-300">
            Return Home
          
        </Link>
      </div>
    </div>
  );
};

export default NotFound;