"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ShoppingCart, LocateIcon, Store } from "lucide-react";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import SearchBar from "./searchBar";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full py-6 ${
        stickyMenu
          ? "bg-white !py-4 shadow transition duration-100 dark:bg-black"
          : ""
      }`}
    >
      <div className="relative mx-auto max-w-c-1390 flex flex-wrap items-center justify-between px-4 md:px-8 2xl:px-0">
        {/* Mobile menu toggle */}
        <div className="flex items-center gap-4 xl:hidden">
          <button
            aria-label="hamburger Toggler"
            className="block"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-300" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "delay-400 !w-full" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-500" : "w-0"
                  }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-[0]" : "h-full"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-200" : "h-0.5"
                  }`}
                ></span>
              </span>
            </span>
          </button>
        </div>

        {/* Main Nav */}
        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-auto ${
            navigationOpen &&
            "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
          }`}
        >
          <nav className="flex flex-wrap items-center gap-4">
            <Link href="/" className="mr-6">
              <Image
                src="/images/logo/logo2.png"
                alt="logo"
                width={70}
                height={30}
                className="hidden w-full dark:block"
              />
              <Image
                src="/images/logo/logo.png"
                alt="logo"
                width={70}
                height={30}
                className="w-full dark:hidden"
              />
            </Link>

            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu && "group relative"}>
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => setDropdownToggler(!dropdownToggler)}
                        className="flex items-center gap-2 text-base hover:text-orange-500"
                      >
                        {menuItem.title}
                        <svg
                          className="h-3 w-3 fill-waterloo group-hover:fill-orange-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                        </svg>
                      </button>
                      <ul className={`dropdown ${dropdownToggler ? "flex" : ""} text-base`}>
                        {menuItem.submenu.map((item, key) => (
                          <li key={key} className="hover:text-orange-500">
                            <Link href={item.path || "#"}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={menuItem.path || "#"}
                      className={`text-base ${
                        pathUrl === menuItem.path
                          ? "text-orange-500 font-medium"
                          : "hover:text-orange-500"
                      }`}
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Auth Buttons - SIDE BY SIDE */}
            <div className="mt-6 flex flex-col gap-2 xl:hidden">
              <div className="flex gap-2">
                <Link
                  href="/auth/signin"
                  className="flex-1 rounded bg-orange-500 px-4 py-2 text-center text-sm text-white duration-300 hover:bg-orange-600"
                >
                  Sign in
                </Link>
                <Link
                  href="/auth/signup"
                  className="flex-1 rounded border border-gray-300 px-4 py-2 text-center text-sm text-waterloo hover:text-orange-500"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </nav>
        </div>

        {/* Icons & Actions */}
        <div className="flex w-full flex-wrap items-center justify-end gap-4 sm:gap-5 md:gap-6 xl:w-auto">
          {/* Hamburger next to Search */}
          <div className="flex items-center gap-4 xl:hidden">
            <button
              aria-label="hamburger Toggler"
              className="block"
              onClick={() => setNavigationOpen(!navigationOpen)}
            >
              {/* Hamburger Icon Code */}
              {/* (No changes needed inside here from your original) */}
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex-1 xl:flex-initial">
            <SearchBar />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 sm:gap-6 xl:gap-6">
            <Link href="/cart" aria-label="Cart" className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-lg hover:text-orange-500 transition duration-300">
              <ShoppingCart className="h-5 w-5 text-gray-600 hover:text-orange-500" />
            </Link>
            <div className="ml-1 sm:ml-2">
              <ThemeToggler />
            </div>
          </div>

          {/* Desktop Auth */}
          <div className="hidden xl:flex items-center gap-4">
            <Link
              href="/auth/signup"
              className="text-base font-medium text-waterloo hover:text-orange-500"
            >
              Sign up
            </Link>
            <Link
              href="/auth/signin"
              className="rounded-full bg-orange-500 px-6 py-2 text-base text-white hover:bg-orange-500"
            >
              Sign in
            </Link>
          </div>
        </div> 
      </div>
    </header>
  );
};

export default Header;
