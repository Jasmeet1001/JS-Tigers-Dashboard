import { Tabs, TabsList } from "@radix-ui/react-tabs";
import React, { useState } from "react";
import { TabsTriggerBox } from "../ui/tabs";
import FilterBox from "../FilterBox";
import { ChartAnalytics } from "../ChartComp";
import Link from "next/link";
import { ShipTable } from "./dbtable";
import { DownloadIcon } from "../ui/icons/customicons";

const ShipmentInfo = () => {
  return (
    <>
      <ChartAnalytics />
      <div className='flex flex-col w-full mt-10 gap-5'>
        <div className='flex flex-col md:flex-row gap-5'>
          <div className='rounded-xl border bg-card text-card-foreground shadow-lg w-full md:w-1/3 p-5'>
            <p className='font-bold text-lg pb-6'>Loading</p>
            <ul className='flex flex-col overflow-y-scroll overflow-x-hidden h-72 gap-y-4'>
              <li className='border-b-2'>
                <Link href='#'>
                  <div className='flex w-full justify-between pe-7'>
                    <span className='flex justify-start text-base'>
                      NAHAVA SEVA INDIA
                    </span>
                    <span className='flex justify-start'>387</span>
                  </div>
                </Link>
              </li>
              <li className='border-b-2'>
                <Link href='#'>
                  <div className='flex w-full justify-between pe-7'>
                    <span className='flex justify-start text-base'>
                      NAHAVA SEVA INDIA
                    </span>
                    <span className='flex justify-start'>387</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className='rounded-xl border bg-card text-card-foreground shadow-lg w-full md:w-1/3 p-5'>
            <p className='font-bold text-lg pb-6'>Discharge</p>
            <ul className='flex flex-col overflow-y-scroll overflow-x-hidden h-72 gap-y-4'>
              <li className='border-b-2'>
                <Link href='#'>
                  <div className='flex w-full justify-between pe-7'>
                    <span className='flex justify-start text-base'>
                      NAHAVA SEVA INDIA
                    </span>
                    <span className='flex justify-start'>387</span>
                  </div>
                </Link>
              </li>
              <li className='border-b-2'>
                <Link href='#'>
                  <div className='flex w-full justify-between pe-7'>
                    <span className='flex justify-start text-base'>
                      NAHAVA SEVA INDIA
                    </span>
                    <span className='flex justify-start'>387</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className='rounded-xl border bg-card text-card-foreground shadow-lg w-full md:w-1/3 p-5'>
            <p className='font-bold text-lg pb-6'>Delivery</p>
            <ul className='flex flex-col overflow-y-scroll overflow-x-hidden h-72 gap-y-4'>
              <li className='border-b-2'>
                <Link href='#'>
                  <div className='flex w-full justify-between pe-7'>
                    <span className='flex justify-start text-base'>
                      NAHAVA SEVA INDIA
                    </span>
                    <span className='flex justify-start'>387</span>
                  </div>
                </Link>
              </li>
              <li className='border-b-2'>
                <Link href='#'>
                  <div className='flex w-full justify-between pe-7'>
                    <span className='flex justify-start text-base'>
                      NAHAVA SEVA INDIA
                    </span>
                    <span className='flex justify-start'>387</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-5'>
          <div className='rounded-xl border bg-card text-card-foreground shadow-lg w-full md:w-1/3 p-5'>
            <p className='font-bold text-lg pb-6'>Shipper</p>
            <ul className='flex flex-col overflow-y-scroll overflow-x-hidden h-72 gap-y-4'>
              <li className='border-b-2'>
                <Link href='#'>
                  <div className='flex w-full justify-between pe-7'>
                    <span className='flex justify-start text-base'>
                      NAHAVA SEVA INDIA
                    </span>
                    <span className='flex justify-start'>387</span>
                  </div>
                </Link>
              </li>
              <li className='border-b-2'>
                <Link href='#'>
                  <div className='flex w-full justify-between pe-7'>
                    <span className='flex justify-start text-base'>
                      NAHAVA SEVA INDIA
                    </span>
                    <span className='flex justify-start'>387</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className='rounded-xl border bg-card text-card-foreground shadow-lg w-full md:w-1/3 p-5'>
            <p className='font-bold text-lg pb-6'>Consignee</p>
            <ul className='flex flex-col overflow-y-scroll overflow-x-hidden h-72 gap-y-4'>
              <li className='border-b-2'>
                <Link href='#'>
                  <div className='flex w-full justify-between pe-7'>
                    <span className='flex justify-start text-base'>
                      NAHAVA SEVA INDIA
                    </span>
                    <span className='flex justify-start'>387</span>
                  </div>
                </Link>
              </li>
              <li className='border-b-2'>
                <Link href='#'>
                  <div className='flex w-full justify-between pe-7'>
                    <span className='flex justify-start text-base'>
                      NAHAVA SEVA INDIA
                    </span>
                    <span className='flex justify-start'>387</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className='rounded-xl border bg-card text-card-foreground shadow-lg w-full md:w-1/3 p-5'>
            <p className='font-bold text-lg pb-6'>Carrier</p>
            <ul className='flex flex-col overflow-y-scroll overflow-x-hidden h-72 gap-y-4'>
              <li className='border-b-2'>
                <Link href='#'>
                  <div className='flex w-full justify-between pe-7'>
                    <span className='flex justify-start text-base'>
                      NAHAVA SEVA INDIA
                    </span>
                    <span className='flex justify-start'>387</span>
                  </div>
                </Link>
              </li>
              <li className='border-b-2'>
                <Link href='#'>
                  <div className='flex w-full justify-between pe-7'>
                    <span className='flex justify-start text-base'>
                      NAHAVA SEVA INDIA
                    </span>
                    <span className='flex justify-start'>387</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='rounded-xl border bg-card text-card-foreground shadow-lg p-5 mt-12'>
        <div className='flex justify-end'>
          <button
            type='button'
            className='flex bg-[#eb5d50] rounded-3xl px-5 py-2 text-white gap-x-2 justify-center items-center'
          >
            <DownloadIcon />
            <Link href=''>Download</Link>
          </button>
        </div>
        <div className='overflow-y-scroll h-96 mt-10'>
          <ShipTable />
        </div>
      </div>
    </>
  );
};

const ContainerInfo = () => {
  return <div>Container Info</div>;
};

export const SeaTab = () => {
  const [activeTab, setActiveTab] = useState("shipment");

  const getActiveTab = (tabname: string) => {
    setActiveTab(tabname);
  };

  const activeSeaInfo = () => {
    if (activeTab === "shipment") {
      return <ShipmentInfo />;
    } else if (activeTab === "container") {
      return <ContainerInfo />;
    }
  };

  return (
    <>
      <Tabs
        defaultValue='shipment'
        className='flex flex-col justify-center items-center my-10 w-full px-4 md:pe-44'
      >
        <TabsList className='inline-flex h-16 max-w-sm gap-x-5 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground shadow-md md:px-4'>
          <TabsTriggerBox
            value='shipment'
            onClick={() => getActiveTab("shipment")}
          >
            Shipments
          </TabsTriggerBox>
          <TabsTriggerBox
            value='container'
            onClick={() => getActiveTab("container")}
          >
            Containers
          </TabsTriggerBox>
        </TabsList>
      </Tabs>
      <FilterBox />
      {activeSeaInfo()}
    </>
  );
};
