"use server"
import client from "@/db/conn";

interface AggregationResult {
    totalBookings: number;
    bookingUtilized: number;
    bookingStatuses: string[];
}

export async function getData(): Promise<{
    result: object | null,
    error: null | unknown
}> {
    try {
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
        .aggregate(pipeline)
        .toArray();

      return  {result,error:null} ;
    } catch (error) {
      return { result: null, error };
    }
}