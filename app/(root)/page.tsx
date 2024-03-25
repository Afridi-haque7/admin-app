"use client";

import { UserButton } from "@clerk/nextjs";
// import Navbar from "@/components/my-component/Navbar";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/my-component/Navbar"), {ssr:false});

const SetupPage = () => {
  return (
    <div className="">
      <Navbar />
    </div>
  );
}

export default SetupPage;