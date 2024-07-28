"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  PlaneIcon,
  ShipIcon,
  TruckIcon,
} from "@/components/ui/icons/customicons";
import { SeaTab } from "@/components/analyticstabs/seatab";

const AirTab = () => {
  return <div>Air Tab</div>;
};

const LandTab = () => {
  return <div>Land Tab</div>;
};

export default function Analytics() {
  const [activeTab, setActiveTab] = useState("sea");

  const getActiveTab = (tabname: string) => {
    setActiveTab(tabname);
  };

  const activeInfo = () => {
    if (activeTab === "sea") {
      return <SeaTab />;
    } else if (activeTab === "air") {
      return <AirTab />;
    } else if (activeTab === "land") {
      return <LandTab />;
    }
  };

  return (
    <section className='mt-16 p-10 md:p-10'>
      <div className='flex flex-col justify-center items-center'>
        <Tabs defaultValue='sea' className='w-full max-w-[400px]'>
          <TabsList className='flex justify-between md:justify-normal'>
            <TabsTrigger
              value='sea'
              onClick={() => getActiveTab("sea")}
              className='text-center'
            >
              <ShipIcon />
              <span className='hidden sm:inline'>Sea</span>
            </TabsTrigger>
            <TabsTrigger
              value='air'
              onClick={() => getActiveTab("air")}
              className='md:mx-3 text-center'
            >
              <PlaneIcon />
              <span className='hidden sm:inline'>Air</span>
            </TabsTrigger>
            <TabsTrigger
              value='land'
              onClick={() => getActiveTab("land")}
              className=' text-center'
            >
              <TruckIcon />
              <span className='hidden sm:inline'>Land</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className='mt-4 w-full'>{activeInfo()}</div>
    </section>
  );
}
