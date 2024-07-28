/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/db/conn";

export async function GET(req: NextRequest) {
  try {
    const client = clientPromise;
    const db = client.db("shipment_db");
    const projection = {
      hbl_no: 1,
      mbl_no: 1,
      po_ref_no: 1,
      recipt: 1,
      loading: 1,
      discharge: 1,
      delivery: 1,
      booking_no: 1,
      size_type: 1,
      carrier: 1,
      commodity: 1,
      milestone: 1,
      milestone_group: 1,
      _id: 0, // Exclude the _id field
    };
    const shipment = await db
      .collection("shipments")
      .find({}, { projection })
      .toArray();

    return NextResponse.json({ shipment });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
