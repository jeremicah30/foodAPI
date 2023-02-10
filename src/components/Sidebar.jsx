import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Logo, LogoSmall } from "public";

const Sidebar = () => {
  return (
    <div className="flex">
      <div className="sidebar bg-white py-8 on">
        <div className="logo flex justify-center ">
          <Image src={LogoSmall} alt="Foodpals Logo" className="img1" />
          <Image src={Logo} alt="Foodpals Logo" className="img2 " />
        </div>
        <ul className="my-3">
          <li>
            <Link href="/" className="flex items-center link">
              <i className="fi fi-rr-apps flex justify-center items-center text-lg"></i>
              <span className="li-title text-base">Dashboard</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
