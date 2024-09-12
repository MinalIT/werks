import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="h-10" />
        <h1 className="ml-4 text-xl font-bold">Made-in-China</h1>
      </div>
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Enter a keyword to search products"
          className="border rounded-full px-4 py-2 w-96"
        />
        <button className="bg-red-500 text-white px-4 py-2 rounded-full">
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
