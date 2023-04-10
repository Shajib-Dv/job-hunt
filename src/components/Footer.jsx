/** @format */

import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 px-4 py-10 md:py-20 md:px-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10">
          <div className="col-span-2">
            <h1 className="text-white text-3xl font-extrabold">Job-Hunter</h1>
            <p className="text-gray-400 my-5">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
          </div>
          <div>
            <h3 className="mb-5 text-white text-xl font-semibold">Company</h3>
            <ul className="grid gap-3 text-gray-400">
              <li>About Us</li>
              <li>Work</li>
              <li>Latest News</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-white text-xl font-semibold">Product</h3>
            <ul className="grid gap-3 text-gray-400">
              <li>Prototype Us</li>
              <li>Plans & Pricing</li>
              <li>Customers</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-white text-xl font-semibold">Support</h3>
            <ul className="grid gap-3 text-gray-400">
              <li>Help Desk</li>
              <li>Sales</li>
              <li>Become a Partner</li>
              <li>Developers</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-white text-xl font-semibold">Contact</h3>
            <ul className="grid gap-3 text-gray-400">
              <li>524 Broadway , NYC</li>
              <li>+1 777 - 978 - 5570</li>
            </ul>
          </div>
        </div>
        <div className="border-b border-gray-600 my-12"></div>
        <div className="text-gray-400 flex-row md:flex md:justify-between text-sm text-center">
          <p>@2023 CareerHub. All Rights Reserved</p>
          <p>Powered by Shajib Hossain</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
