"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <div className="z-10 bg-white/30 backdrop-blur-sm container1 py-4 flex items-center justify-between fixed top-0 left-0 w-full">
        <h3 className="tracking-widest font-semibold text-2xl text px-2 py-1">
          RIYAZ
        </h3>
        <div>
          <ul className="flex items-center gap-4 md:gap-8">
            <li className="heading relative">
              <Link
                className={pathname == "/" ? "nav-link-selected" : "nav-link"}
                href={"/"}
              >
                HOME
              </Link>
            </li>
            <li className="heading">
              <Link
                href={"/"}
                className={
                  pathname == "/about" ? "nav-link-selected" : "nav-link"
                }
              >
                ABOUT
              </Link>
            </li>
            <li className="heading">
              <Link
                href={"/"}
                className={
                  pathname == "/collections" ? "nav-link-selected" : "nav-link"
                }
              >
                COLLECTIONS
              </Link>
            </li>
            <li className="heading">
              <Link
                href={"/"}
                className={
                  pathname == "/contact" ? "nav-link-selected" : "nav-link"
                }
              >
                CONTACT
              </Link>
            </li>
            {/* <div /> hamburger menu */}
          </ul>
        </div>
      </div>
      <div className="py-[35px]" />
    </header>
  );
};

export default Header;
