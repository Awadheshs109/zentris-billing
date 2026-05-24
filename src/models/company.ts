
import { BankDetails } from "./bank-details";
import { Branch } from "./branch";

export interface Company {
  name: string;
  address: string;
  phone: string;

  email?: string;

  gstNumber?: string;

  panNumber?: string;

  website?: string;

  bankDetails?: BankDetails;

  branches?: Branch[];
}