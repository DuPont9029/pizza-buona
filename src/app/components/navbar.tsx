"use client";

import React from 'react';
import Pizza from "@/../public/pizza.png";
import Image from 'next/image';
import Link from 'next/link';

type NavItem = {
  text: string;
  link: string;
  current?: boolean;
};

type NavbarProps = {
  navItems: NavItem[];
};

export default function Navbar({ navItems }: NavbarProps) {
  return (
    <div>
      <nav className="bg-[#fdfaf2]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              
              <div className="flex flex-shrink-0 items-center">
                <Image
                  className="h-8 w-auto"
                  src= {Pizza}
                  alt="Your Company"
                />
              </div>
              
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className={`rounded-md px-3 py-2 text-sm font-medium ${
                        item.current
                          ? 'text-black'
                          : 'text-gray-900 hover:bg-[#bf950a]  hover:text-white'
                      }`}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>


      </nav>
    </div>
  );
}