export interface AggregationResult {
  totalBookings: number;
  bookingUtilized: number;
  bookingCanceled: number;
}

export interface TableResult {
  hbl_no: string;
  mbl_no: string;
  po_ref_no: string;
  recipt: string;
  loading: string;
  discharge: string;
  delivery: string;
  booking_no: string;
  size_type: string;
  carrier: string;
  commodity: string;
  milestone: string;
  milestone_group: string;
}

export interface DocumentResult {
  title: string;
  description: string;
  created_at: string;
}