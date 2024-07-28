"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChartDashboard } from "@/components/ChartComp";
import {
  FileIcon,
  Monitor,
  PieIcon,
  StopIcon,
  TodoList,
} from "@/components/ui/icons/customicons";
import { AggregationResult, DocumentResult } from "@/lib/types";
import MapComponent from "../MapComponent";

const DashboardPageData = () => {
  const [data, setData] = useState<AggregationResult | null>(null);
  const [documents, setDocuments] = useState<DocumentResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/api/dashboard");
        if (response.ok) {
          const data = await response.json();
          setData(data.result);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    const getDocuments = async () => {
      try {
        const response = await fetch("/api/dashboard/documents");
        if (response.ok) {
          const data = await response.json();
          setDocuments(data.shipment);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      }
    };

    getData();
    getDocuments();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data</p>;
  }

  return (
    <section className='mt-16 w-full p-4 md:p-10'>
      <div
        id='cards'
        className='flex flex-col md:flex-row flex-wrap gap-4 md:gap-6 text-black'
      >
        <div className='flex h-32 bg-white border-2 rounded-3xl w-full md:w-[334px] p-3 shadow-lg'>
          <div className='flex flex-col w-full pb-7 gap-y-5 p-4'>
            <span className='text-xs w-full font-bold'>Total Bookings</span>
            <span className='text-xl font-bold'>
              {data?.totalBookings} Bookings
            </span>
          </div>
          <div className='flex justify-center items-center pe-8'>
            <Monitor />
          </div>
        </div>
        <div className='flex h-32 bg-white border-2 rounded-3xl w-full md:w-[334px] p-3 shadow-lg'>
          <div className='flex flex-col w-full pb-7 gap-y-5 p-4'>
            <span className='text-xs w-full font-bold'>Bookings Utilized</span>
            <span className='text-xl font-bold'>
              {data?.bookingUtilized} Bookings
            </span>
          </div>
          <div className='flex justify-center items-center pe-8'>
            <TodoList />
          </div>
        </div>
        <div className='flex h-32 bg-white border-2 rounded-3xl w-full md:w-[334px] p-3 shadow-lg'>
          <div className='flex flex-col w-full pb-7 gap-y-5 p-4'>
            <span className='text-xs w-full font-bold'>Booking Cancelled</span>
            <span className='text-xl font-bold'>
              {data?.bookingCanceled} Bookings
            </span>
          </div>
          <div className='flex justify-center items-center pe-8'>
            <StopIcon />
          </div>
        </div>
        <div className='flex h-32 bg-white border-2 rounded-3xl w-full md:w-[334px] p-3 shadow-lg'>
          <div className='flex flex-col w-full pb-7 gap-y-5 p-4'>
            <span className='text-xs w-full font-bold'>Utilization</span>
            <span className='text-xl font-bold'>100%</span>
          </div>
          <div className='flex justify-center items-center pe-8'>
            <PieIcon />
          </div>
        </div>
      </div>

      <MapComponent/>
      {/* <div id='map' className='mt-5'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1627.5944820970687!2d77.35615213692951!3d28.52045568014162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce63fea905919%3A0xabddbeb5ef3a3947!2sPavilion%20Court!5e1!3m2!1sen!2sin!4v1721736946298!5m2!1sen!2sin'
          width='100%'
          height='300'
          className='border-0 rounded-lg'
          allowFullScreen={false}
        ></iframe>
      </div> */}

      <div
        id='chart-card'
        className='flex w-full mt-5 rounded-xl border bg-card text-card-foreground shadow-lg'
      >
        <div className='flex w-full justify-start items-center p-5'>
          <ChartDashboard />
        </div>
      </div>

      <div className='flex flex-col md:flex-row w-full h-auto md:h-96 mt-5 gap-4 md:gap-8'>
        <div className='rounded-xl border bg-card text-card-foreground shadow-lg w-full md:w-1/2 p-5'>
          <p className='font-bold text-lg pb-6'>Latest Documents</p>
          <ul className='flex flex-col overflow-y-scroll h-72 gap-y-4'>
            {documents.map((doc, index) => (
              <li key={index}>
                <Link href=''>
                  <div className='flex gap-x-1'>
                    <div className='flex justify-center items-center'>
                      <FileIcon />
                    </div>
                    <div className='flex w-full justify-between px-3'>
                      <div className='flex flex-col gap-y-1'>
                        <span className='flex justify-start text-base font-bold'>
                          {doc.title}
                        </span>
                        <span className='flex justify-start text-xs font-semibold'>
                          {doc.description}
                        </span>
                      </div>
                      <div className='flex flex-col'>
                        <span className='flex justify-start text-xs font-semibold'>
                          {new Date(doc.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='rounded-xl border bg-card text-card-foreground shadow-lg w-full md:w-1/2 p-5'>
          <p className='font-bold text-lg'>Announcements</p>
          <div className='pt-5'>
            <p>No Announcements Currently</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPageData;
