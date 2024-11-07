import React from "react";
import { navItems } from "../constants";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

// import {menu,x} from 'lucide-react'
function Navbar() {
  const [mobiledrawer, setMobiledrawer] = useState(false);

  function mobiledrawerFunction() {
    setMobiledrawer(!mobiledrawer);
  }
  return (
    <>
      <nav className="sticky top-0 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="logo flex items-center flex-shrink-0">
              <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
              <span className="text-2xl tracking-tight">Landing Page</span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12 text-lg">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center   items-center space-x-12">
              <a href="#" className="text-sm py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
              >
                Create an Account
              </a>
            </div>
            <div className="lg:hidden md:flex flex text-2xl text-white">
              <button onClick={mobiledrawerFunction}>
                {mobiledrawer ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobiledrawer && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="flex   space-x-12 ">
                <a href="#" className="text-sm py-2 px-3 border rounded-md">
                  Sign In
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
                >
                  Create an Account
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
