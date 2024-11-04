import { object, string, number, boolean } from "yup";

const userSchema = object({
  businessName: string().required().min(4),
  name: string().required().max(50),
  email: string().email().required(),
  phone: string().length(11).required(),
  password: string().required(),
  pushToken: string().default(""),
  balance: number().default(0),
  isAdmin: boolean().default(false),
  token: string().required(),
  address: string().required(),
});

const addParcelSchema = object({
  category: string().required(),
  serviceType: string().required(),
  phoneNumber: number().required(),
  amount: number().required(),
  name: string().required().max(50),
  invoiceNumber: number(),
  address: string().required().max(200),
  weight: number().required(),
  district: string().required(),
  thana: string().required(),
  note: string().max(300),
});

const Pricing = object({
  from: string(),
  to: string(),
  category: string(),
  serviceType: string(),
  weight: number(),
});

const updateUserInformation = object({
  name: string(),
  number: string(),
  email: string(),
  businessName: string(),
  address: string(),
});

export { userSchema, addParcelSchema, updateUserInformation, Pricing };
