import Header from "@/components/header/Header";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="container p-20">
        <div className="w-4/5 mx-auto mt-20 flex flex-col justify-center items-center space-y-4">
          <h1 className="text-4xl font-semibold">404 - Page Not Found</h1>

          <div className="space-x-4">
            <Link
              className="underline text-blue-600 hover:text-red-500 duration-300"
              href="/"
            >
              Homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
