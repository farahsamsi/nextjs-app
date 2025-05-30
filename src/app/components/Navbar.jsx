"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();

  if (!pathName?.includes("dashboard")) {
    return (
      <nav className="flex justify-center">
        <ul className="flex justify-around w-1/2">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/services">
            <li>Services</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    );
  } else {
    return <div></div>;
  }
};

export default Navbar;
