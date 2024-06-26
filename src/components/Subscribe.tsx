import React from "react";

const Subscribe = () => {
  return (
    <section className="container-y container1 space-y-2">
      <h3 className="text-center text-2xl">CONTACT US</h3>
      <hr className="w-[100px] mx-auto bg-slate-900 h-[2px] rounded-lg" />
      <div className="flex w-[500px] max-w-full items-center justify-center min-w-fit mx-auto">
        <input
          type="text"
          placeholder="Enter your email"
          className="border border-slate-900 w-full p-4 outline-none"
        />
        <button className="p-4 bg-slate-900 text-white h-full border border-slate-900">
          Subscribe
        </button>
      </div>
      <div className="w-[500px] mx-auto min-w-fit max-w-full">
        <p className="flex items-center text-lg">
        <span>Phone No: </span><span>+91 7976973338</span>
        </p>
        <p className="flex items-center text-lg">
        </p>
      </div>
    </section>
  );
};

export default Subscribe;
