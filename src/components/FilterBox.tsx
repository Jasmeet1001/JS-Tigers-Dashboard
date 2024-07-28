import React from "react";
// , { useState }
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FilterBox = () => {
  return (
    <div className='flex w-full items-start rounded-xl border bg-card text-card-foreground shadow-lg p-5 '>
      <div className='flex gap-x-6'>
        <div className='flex gap-x-3'>
          <p className='flex justify-center items-center font-semibold'>Type</p>
          <Select>
            <SelectTrigger className='w-60 rounded-3xl'>
              <SelectValue placeholder='Select' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='light'>Light</SelectItem>
              <SelectItem value='dark'>Dark</SelectItem>
              <SelectItem value='system'>System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='flex gap-x-4'>
          <p className='flex justify-center items-center font-semibold'>Date</p>
          <Select>
            <SelectTrigger className='w-60 rounded-3xl'>
              <SelectValue placeholder='Select' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='light'>Light</SelectItem>
              <SelectItem value='dark'>Dark</SelectItem>
              <SelectItem value='system'>System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='flex gap-x-4'>
          <p className='flex justify-center items-center font-semibold'>
            Period
          </p>
          <Select>
            <SelectTrigger className='w-60 rounded-3xl'>
              <SelectValue placeholder='Select' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='light'>Light</SelectItem>
              <SelectItem value='dark'>Dark</SelectItem>
              <SelectItem value='system'>System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className='flex gap-x-4 justify-center items-center ms-16'>
        <button
          type='button'
          className='text-[#6b120a] border-2 rounded-3xl py-[0.4rem] px-6 border-[#6b120a]'
        >
          Cancel
        </button>
        <button
          type='button'
          className='text-white rounded-3xl py-2 px-6 bg-[#6b120a]'
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default FilterBox;
