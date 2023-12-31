import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main
      className={`py-px text-sky-50 font-semibold ${
        isSticky ? "sticky top-0 bg-slate-900 shadow-md" : ""
      }`}
    >
      <nav className="mt-6 mb-6 flex justify-end uppercase ">
        <Link
          className="mx-4 mr-auto ml-28 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:text-stone-600 duration-300 "
          to="/"
        >
          #J-I-JOEShot
        </Link>
        <Link
          className="mx-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:text-stone-600 duration-300"
          to="/"
        >
          Home
        </Link>
        <Link
          className="mx-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:text-stone-600 duration-300"
          to="/Work"
        >
          Work
        </Link>
        <Link
          className="mx-4 mr-28 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:text-stone-600 duration-300"
          to="/Education"
        >
          Education
        </Link>
      </nav>
    </main>
  );
}

export default Header;
