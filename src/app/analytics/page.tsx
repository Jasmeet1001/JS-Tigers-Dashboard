"use client";
// , { useState }
import React, { useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  PlaneIcon,
  ShipIcon,
  TruckIcon,
} from "@/components/ui/icons/customicons";
import { SeaTab } from "@/components/analyticstabs/seatab";

const AirTab = () => {
  return <div>Air Tab</div>
}

const LandTab = () => {
  return <div>Land Tab</div>
}


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
    <section className='mt-16 p-10'>
      <div className='flex flex-col justify-center items-center'>
        <Tabs defaultValue='sea' className='w-[400px]'>
          <TabsList>
            <div className='flex'>
              <TabsTrigger
                value='sea'
                onClick={() => getActiveTab("sea")}
              >
                <ShipIcon />
                Sea
              </TabsTrigger>
              <TabsTrigger value='air' onClick={() => getActiveTab("air")}>
                <PlaneIcon />
                Air
              </TabsTrigger>
              <TabsTrigger value='land' onClick={() => getActiveTab("land")}>
                <TruckIcon />
                Land
              </TabsTrigger>
            </div>
          </TabsList>
        </Tabs>
      </div>
      {activeInfo()}
    </section>
  );
}
