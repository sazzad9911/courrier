import { time } from "console";
import { object, string, number, date, InferType, boolean } from "yup";
const urlRegex =
  /^(https?:\/\/)?((([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,})|localhost|((25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2}))(:\d{1,5})?(\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]*)?$/;

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
  invoiceNumber: string(),
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

export { Pricing, addParcelSchema, userSchema };
