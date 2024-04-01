"use client";
import { useAdmin } from "@/context/AdminSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header = () => {
  const pathname = usePathname();

  const [showNav, setShowNav] = useState(false);

  const { products, setProducts } = useAdmin()

  // const fetchAllProducts = async () => {
  //   try {
  //     const data = await fetch('/api/product/fetchAllProducts');
  //     const res = await data.json()
  //     console.log(res);
      
  //     if(res.success){
  //       setProducts(res.products)
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchAllProducts()
  // }, [])

  return (
    <header>
      <div className="z-10 bg-white/30 backdrop-blur-sm container1 py-4 flex items-center justify-between fixed top-0 left-0 w-full">
        <Link href={"/"}>
          <h3 className="hover:text-current tracking-widest font-medium sm:text-2xl text-lg px-2 py-1">
            Makrana Premium
          </h3>
        </Link>
        <div>
          <i
            onClick={() => setShowNav(true)}
            className="cursor-pointer fi fi-sr-menu-burger sm:hidden"
          />
          <ul
            className={` ${
              showNav ? "w-full  bg-black/40" : "overflow-hidden w-0"
            } text-white sm:text-slate-900 flex flex-col py-8 sm:py-0 fixed top-0 left-0 h-screen sm:w-auto sm:h-auto sm:bg-inherit sm:static sm:flex-row items-center gap-4 md:gap-8`}
          >
            <i
              onClick={() => setShowNav(false)}
              className="fi fi-sr-cross cursor-pointer sm:hidden"
            />
            <li className="heading relative">
              <Link
                onClick={() => setShowNav(false)}
                className={pathname == "/" ? "nav-link-selected" : "nav-link"}
                href={"/"}
              >
                HOME
              </Link>
            </li>

            <li className="heading relative ">
              <Link
                onClick={() => setShowNav(false)}
                className={
                  pathname == "/products" ? "nav-link-selected" : "nav-link"
                }
                href={"/products"}
              >
                MARBLE PRODUCTS
              </Link>
            </li>
            <li className="heading relative">
              <Link
                onClick={() => setShowNav(false)}
                href={"/collections"}
                className={
                  pathname == "/collections" ? "nav-link-selected" : "nav-link"
                }
              >
                COLLECTIONS
              </Link>
            </li>
            <li className="heading  hidden">
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
      <div className="py-[55px] sm:py-[35px]" />
    </header>
  );
};

export default Header;
