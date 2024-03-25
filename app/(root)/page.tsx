"use client";

import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="p-5">
      <UserButton afterSignOutUrl="/"/>
      This is a protected route
    </div>
  );
}

export default SetupPage;