import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FilterBox = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full items-start lg:items-center rounded-xl border bg-card text-card-foreground shadow-lg p-5 gap-4 lg:gap-0'>
      <div className='flex flex-col md:flex-row gap-y-4 md:gap-x-6'>
        <div className='flex gap-x-3 items-center'>
          <p className='font-semibold'>Type</p>
          <Select>
            <SelectTrigger className='w-40 md:w-60 rounded-3xl'>
              <SelectValue placeholder='Select' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='light'>Light</SelectItem>
              <SelectItem value='dark'>Dark</SelectItem>
              <SelectItem value='system'>System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='flex gap-x-3 items-center'>
          <p className='font-semibold'>Date</p>
          <Select>
            <SelectTrigger className='w-40 md:w-60 rounded-3xl'>
              <SelectValue placeholder='Select' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='light'>Light</SelectItem>
              <SelectItem value='dark'>Dark</SelectItem>
              <SelectItem value='system'>System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='flex gap-x-3 items-center'>
          <p className='font-semibold'>Period</p>
          <Select>
            <SelectTrigger className='w-40 md:w-60 rounded-3xl'>
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
      <div className='flex flex-col md:flex-row gap-2 md:gap-x-4 justify-center items-center lg:ml-16'>
        <button
          type='button'
          className='text-[#6b120a] border-2 rounded-3xl py-2 px-6 border-[#6b120a] w-full md:w-auto'
        >
          Cancel
        </button>
        <button
          type='button'
          className='text-white rounded-3xl py-2 px-6 bg-[#6b120a] w-full md:w-auto'
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default FilterBox;
