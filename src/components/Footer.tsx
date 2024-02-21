import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="container1 py-16 bg-black/90 text-white">
      <div className="flex flex-col items-center sm:items-start sm:flex-row justify-center gap-16">
        {/* Customer Services */}
        <div >
          <h3 className="heading text-lg">CUSTOMER SERVICES</h3>
          <ul>
            <li className="text-center sm:text-start">
              <Link href={"/help"}>Help & Contact</Link>
            </li>
            <li className="text-center sm:text-start">
              <Link href={"/help"}>Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        {/* Company */}
        <div >
          <h3 className="heading text-lg">COMPANY</h3>
          <ul>
            <li className="text-center sm:text-start">
              <Link href={"/help"}>About us</Link>
            </li>
            <li className="text-center sm:text-start">
              <Link href={"/help"}>FAQs</Link>
            </li>
            
            <li className="text-center sm:text-start">
              <Link href={"/help"}>Contact</Link>
            </li>
          </ul>
        </div>
        {/* Social Media */}
        <div>
          <h3 className="heading text-lg">SOCIAL MEDIA</h3>
          <ul>
            <li className="text-center sm:text-start">
              <Link href={"/help"}>Facebook</Link>
            </li>
            <li className="text-center sm:text-start">
              <Link href={"/help"}>Instagram</Link>
            </li>
            
            <li className="text-center sm:text-start">
              <Link href={"/help"}>Twitter</Link>
            </li>
            <li className="text-center sm:text-start">
              <Link href={"/help"}>LinkedIn</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
