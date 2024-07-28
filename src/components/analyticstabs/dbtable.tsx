"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableResult } from "@/lib/types";
import React, { useEffect, useState } from "react";

export const ShipTable = () => {
  const [data, setData] = useState<TableResult[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/api/table");

        if (response.ok) {
          const data = await response.json();
          setData(data.shipment);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <Table>
      <TableCaption>Shipment Data</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>HBL#</TableHead>
          <TableHead>MBL#</TableHead>
          <TableHead>PO#/REF#</TableHead>
          <TableHead>Recipt</TableHead>
          <TableHead>Loading</TableHead>
          <TableHead>Discharge</TableHead>
          <TableHead>Delivery</TableHead>
          <TableHead>Booking#</TableHead>
          <TableHead>Size Type</TableHead>
          <TableHead>Carrier</TableHead>
          <TableHead>Commodity</TableHead>
          <TableHead>Milestone</TableHead>
          <TableHead>Milestone Group</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((shipmentinfo, index) => (
          <TableRow key={index}>
            <TableCell>{shipmentinfo.hbl_no}</TableCell>
            <TableCell>{shipmentinfo.mbl_no}</TableCell>
            <TableCell>{shipmentinfo.po_ref_no}</TableCell>
            <TableCell>{shipmentinfo.recipt}</TableCell>
            <TableCell>{shipmentinfo.loading}</TableCell>
            <TableCell>{shipmentinfo.discharge}</TableCell>
            <TableCell>{shipmentinfo.delivery}</TableCell>
            <TableCell>{shipmentinfo.booking_no}</TableCell>
            <TableCell>{shipmentinfo.size_type}</TableCell>
            <TableCell>{shipmentinfo.carrier}</TableCell>
            <TableCell>{shipmentinfo.commodity}</TableCell>
            <TableCell>{shipmentinfo.milestone}</TableCell>
            <TableCell>{shipmentinfo.milestone_group}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
