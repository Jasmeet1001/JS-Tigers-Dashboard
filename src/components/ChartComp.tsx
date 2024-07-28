import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { PlaneIcon, ShipIcon, TruckIcon } from "./ui/icons/customicons";
import { PieChartHollow } from "./ui/piecharthollow";
import { PieChartFull } from "./ui/piechartfull";

const ChartDashboard = () => {
  return (
    <div className='flex w-full flex-col md:flex-row'>
      <Tabs defaultValue='ships'>
        <div className='flex flex-col w-full'>
          <TabsList className='flex flex-col md:flex-row w-full'>
            <div className='flex justify-start items-center font-bold text-lg mb-4 md:mb-0 md:pe-8'>
              Pie Chart Analysis
            </div>
            <div className='flex justify-center w-full gap-x-4'>
              <TabsTrigger value='ships'>
                <ShipIcon />
                Ships
              </TabsTrigger>
              <TabsTrigger value='air'>
                <PlaneIcon />
                Air
              </TabsTrigger>
              <TabsTrigger value='land'>
                <TruckIcon />
                Land
              </TabsTrigger>
            </div>
          </TabsList>
          <TabsContent value='ships' className='flex flex-wrap md:flex-nowrap'>
            <PieChartHollow />
            <PieChartHollow />
            <PieChartHollow />
            <PieChartHollow />
            <PieChartHollow />
          </TabsContent>
          <TabsContent
            value='air'
            className='flex flex-wrap mt-4 md:flex-nowrap'
          >
            <PieChartHollow />
            <PieChartHollow />
            <PieChartHollow />
            <PieChartHollow />
            <PieChartHollow />
          </TabsContent>
          <TabsContent
            value='land'
            className='flex flex-wrap mt-4 md:flex-nowrap'
          >
            <PieChartHollow />
            <PieChartHollow />
            <PieChartHollow />
            <PieChartHollow />
            <PieChartHollow />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

const ChartAnalytics = () => {
  return (
    <div className='flex flex-col md:flex-row w-full gap-10 mt-10'>
      <div className='rounded-3xl border bg-card text-card-foreground shadow-lg p-5 w-full md:w-1/2 mb-4 md:mb-0'>
        <PieChartFull title='Milestones' />
      </div>
      <div className='rounded-3xl border bg-card text-card-foreground shadow-lg p-5 w-full md:w-1/2'>
        <PieChartFull title='Timelines' />
      </div>
    </div>
  );
};

export { ChartDashboard, ChartAnalytics };
