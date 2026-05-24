export type PaymentMode =
  | "cash"
  | "upi"
  | "bank"
  | "mixed";

export type PaymentStatus =
  | "paid"
  | "partial"
  | "pending";

export interface PaymentTransaction {
  mode: string;

  amount: number;

  reference?: string;
}

export interface Payment {
  mode: PaymentMode;

  paidAmount: number;

  dueAmount: number;

  status: PaymentStatus;

  udhar: boolean;

  transactions?: PaymentTransaction[];
}