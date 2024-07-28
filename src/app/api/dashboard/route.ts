/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/db/conn";
import { AggregationResult } from "@/lib/types";

export async function GET(req: NextRequest) {
  try {
    const client = clientPromise;
    const db = client.db("shipment_db");
     const pipeline = [
       {
         $group: {
           _id: null,
           totalBookings: { $sum: 1 },
           bookingUtilized: {
             $sum: { $cond: [{ $ne: ["$booking_no", null] }, 1, 0] },
           },
           bookingCanceled: {
             $sum: { $cond: [{ $eq: ["$booking_status", "CANCELED"] }, 1, 0] },
           },
         },
       },
       {
         $project: {
           _id: 0,
           totalBookings: 1,
           bookingUtilized: 1,
           bookingCanceled: 1,
         },
       },
     ];

     const [result]: AggregationResult[] = await db
       .collection("shipments")
       .aggregate<AggregationResult>(pipeline)
       .toArray();

    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
