/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/db/conn";

export async function GET(req: NextRequest) {
  try {
    const client = clientPromise;
    const db = client.db("shipment_db");
    const shipment = await db.collection("shipments").find({}).toArray();

    return NextResponse.json({ shipment });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
