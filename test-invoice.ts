import { Billing } from "./src";

const invoice = Billing.createInvoice({
  customer: {
    name: "Awadhesh",
    email: "awadhesh@gmail.com",
  },

  items: [
    {
      name: "Laptop",
      quantity: 1,
      price: 50000,
    },

    {
      name: "Mouse",
      quantity: 2,
      price: 1000,
    },
  ],

  tax: 18,

  discount: 10,
});

console.log(invoice);
