import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#161515] grid sm:grid-cols-2 grid-cols-1">
      <div className="px-10 py-4 space-y-1">
        <p className="text-white text-xl">About us</p>
        <div className="h-0.5 w-full bg-red-500"></div>
        <p className="text-[#959596]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ab
          debitis officia doloremque delectus quisquam. Debitis tempore mollitia
          ipsam eos aut nihil praesentium nostrum iure, rem excepturi. Non, quos
          reiciendis.
        </p>
      </div>

      <div className="px-10 py-4 space-y-0.5">
        <p className="text-white text-xl">Get in touch</p>
        <div className="h-0.5 w-full bg-red-500"></div>
        <p className="text-red-500">Location:</p>
        <p className="text-[#959596] ">New York City.</p>

        <p className="text-red-500">Contact:</p>
        <p className="text-[#959596] ">Phone : +121 098 8907 9987</p>
      </div>
    </footer>
  );
};

export default Footer;
