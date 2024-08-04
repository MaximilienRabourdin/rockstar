import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-primary shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">Cookexplorer</h1>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;