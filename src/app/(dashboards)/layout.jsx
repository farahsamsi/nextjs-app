import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <div className="grid grid-cols-12 w-full">
        {/* side Nav */}
        <div className="col-span-3">
          <ul>
            <li>User list</li>
          </ul>
        </div>
        {/* Dashboard content */}
        <div
          className="col-span-9
        "
        >
          {children}
        </div>
      </div>
    </div>
  );
}
