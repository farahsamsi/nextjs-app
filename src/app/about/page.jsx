"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function AboutPage() {
  // for logical routing
  const router = useRouter();
  const isLoggedIn = false;
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };

  return (
    <div>
      <p className="font-bold text-red-800 text-4xl">About Page</p>
      <p>
        <Link href="/about/address">Address</Link>
      </p>
      <button type="button" onClick={handleNavigation} className="">
        Address Page
      </button>
    </div>
  );
}
