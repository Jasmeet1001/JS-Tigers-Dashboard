"use client";

import React, { ElementRef, useEffect, useRef, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useMediaQuery } from "usehooks-ts";

import { cn } from "@/lib/utils";
import { ChevronsLeft, MenuIcon } from "lucide-react";

import { Arrow, NotifBell } from "./ui/icons/customicons";

import UserDropDown from "./UserDropDown";

const Sidebar = () => {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const isResizingRef = useRef(false);
  const sideBarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);

  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);
  const [activeLink, setActiveLink] = useState("Dashboard");
  const [activeButton, setActiveButton] = useState("Dashboard");

  const resetWidth = () => {
    if (sideBarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sideBarRef.current.style.width = isMobile ? "100%" : "240px";
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100% - 240px)"
      );
      navbarRef.current.style.setProperty("left", isMobile ? "100%" : "240px");

      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const collapse = () => {
    if (sideBarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      sideBarRef.current.style.width = "0";
      navbarRef.current.style.setProperty("width", "100%");
      navbarRef.current.style.setProperty("left", "0");

      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizingRef.current) return;

    let newWidth = e.clientX;

    if (newWidth < 240) newWidth = 240;

    if (newWidth > 480) newWidth = 480;

    if (sideBarRef.current && navbarRef.current) {
      sideBarRef.current.style.width = `${newWidth}px`;
      navbarRef.current.style.setProperty("left", `${newWidth}px`);
      navbarRef.current.style.setProperty(
        "width",
        `calc(100% - ${newWidth}px)`
      );
    }
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseMove);
  };

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    if (isMobile) {
      collapse();
    } else {
      resetWidth();
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      collapse();
    }
  }, [isMobile, pathname]);

  const handleButtonClick = (linkname: string) => {
    setActiveLink(linkname);
    setActiveButton(linkname);
  };

  return (
    <>
      <aside
        ref={sideBarRef}
        className={cn(
          "group/sidebar h-full bg-secondary overflow-y-auto relative flex flex-col z-[999] rounded-r-3xl",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-0"
        )}
      >
        <div className='flex flex-col gap-2 justify-between h-full'>
          <div className='flex flex-col bg-[#6b120a]'>
            {/* <div className='flex h-[60px] items-center px-6'>
              <Link
                className='flex items-center gap-2 font-semibold'
                href='/dashboard'
              >
                <Megaphone className='h-6 w-6' />
                <span>Central Sync Hub</span>
              </Link>
            </div> */}

            <div className='flex-1 overflow-auto py-2 mt-40 mb-40'>
              <nav className='flex flex-col items-start px-4 text-sm font-medium gap-y-2 text-white'>
                <Link href='/' className='w-full'>
                  <button
                    type='button'
                    className={`flex before:border-0 ${activeButton === "Dashboard" ? "bg-slate-100 text-muted-foreground" : ""} w-full rounded-md p-3`}
                    onClick={() => handleButtonClick("Dashboard")}
                  >
                    Dashboard
                  </button>
                </Link>
                <Link href='/analytics' className='w-full'>
                  <button
                    type='button'
                    className={`flex before:border-0 ${activeButton === "Analytics" ? "bg-gray-400" : ""} w-full rounded-md p-3`}
                    onClick={() => handleButtonClick("Analytics")}
                  >
                    Analytics
                  </button>
                </Link>
                <Link href='/' className='w-full'>
                  <button
                    type='button'
                    className={`flex before:border-0 ${activeButton === "Rate Request" ? "bg-gray-400" : ""} w-full rounded-md p-3`}
                    onClick={() => handleButtonClick("Rate Request")}
                  >
                    <div className='flex justify-between w-full'>
                      <div>Rate Request</div>
                      <div className=''>
                        <Arrow />
                      </div>
                    </div>
                  </button>
                </Link>
                <Link href='/' className='w-full'>
                  <button
                    type='button'
                    className={`flex before:border-0 ${activeButton === "Quote" ? "bg-gray-400" : ""} w-full rounded-md p-3`}
                    onClick={() => handleButtonClick("Quote")}
                  >
                    <div className='flex justify-between w-full'>
                      <div>Quote</div>
                      <div className=''>
                        <Arrow />
                      </div>
                    </div>
                  </button>
                </Link>
                <Link href='/' className='w-full'>
                  <button
                    type='button'
                    className={`flex before:border-0 ${activeButton === "Shipments" ? "bg-gray-400" : ""} w-full rounded-md p-3`}
                    onClick={() => handleButtonClick("Shipments")}
                  >
                    Shipments
                  </button>
                </Link>
                <Link href='/' className='w-full'>
                  <button
                    type='button'
                    className={`flex before:border-0 ${activeButton === "User List" ? "bg-gray-400" : ""} w-full rounded-md p-3`}
                    onClick={() => handleButtonClick("User List")}
                  >
                    User List
                  </button>
                </Link>
                <Link href='/' className='w-full'>
                  <button
                    type='button'
                    className={`flex before:border-0 ${activeButton === "Archive" ? "bg-gray-400" : ""} w-full rounded-md p-3`}
                    onClick={() => handleButtonClick("Archive")}
                  >
                    <div className='flex justify-between w-full'>
                      <div>Archive</div>
                      <div>
                        <Arrow />
                      </div>
                    </div>
                  </button>
                </Link>
                <Link href='/' className='w-full'>
                  <button
                    type='button'
                    className={`flex before:border-0 ${activeButton === "History" ? "bg-gray-400" : ""} w-full rounded-md p-3`}
                    onClick={() => handleButtonClick("History")}
                  >
                    History
                  </button>
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div
          role='button'
          onClick={collapse}
          className={cn(
            "h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 absolute top-3 right-2 group-hover/sidebar:opacity-100 transition opacity-0",
            isMobile && "opacity-100"
          )}
        >
          <ChevronsLeft className='h-6 w-6' />
        </div>
        <div
          onMouseDown={handleMouseDown}
          onClick={resetWidth}
          className='opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0'
        ></div>
      </aside>
      <div
        ref={navbarRef}
        className={cn(
          "absolute top-0 z-[99] left-60 w-[calc(100%-240px)]",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "left-0 w-full"
        )}
      >
        <nav className='bg-transparent px-3 py-2 w-full flex items-center gap-2  border-0 border-b'>
          {isCollapsed && (
            <MenuIcon
              role='button'
              onClick={resetWidth}
              className='h-6 w-6 text-muted-foreground'
            />
          )}
          <div className='w-full flex justify-between ms-8'>
            <h1 className='flex justify-center items-center font-semibold text-2xl'>
              {activeLink}
            </h1>
            <div className='flex mt-1'>
              <div className='flex justify-center items-center'>
                <NotifBell></NotifBell>
              </div>
              <div>
                <UserDropDown />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
