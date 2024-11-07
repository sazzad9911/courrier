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
  category: string()
    .required("Category is required")
    .oneOf(["regular", "express", "pick&drop"], "Invalid type category"),
  serviceType: string()
    .oneOf(["home", "point"], "Invalid type serviceType")
    .required("Service type is required"),
  pickUpFrom: string()
    .required("Pick-up location is required")
    .oneOf(["home", "hub"], "Invalid type pickUpFrom"),
  phoneNumber: string()
    .typeError("Phone number must be a number")
    .required("Phone number is required"),
  amount: number()
    .typeError("Amount must be a number")
    .required("Amount is required"),
  name: string()
    .required("Name is required")
    .max(150, "Name must be at most 50 characters"),
  invoiceNumber: string().default(""), // Nullable to handle optional values like `undefined` or `null`
  address: string()
    .required("Address is required")
    .max(200, "Address must be at most 200 characters"),
  weight: number()
    .typeError("Weight must be a number")
    .required("Weight is required"),
  district: string().required("District is required"),
  thana: string().required("Thana is required"),
  note: string().default("").max(300, "Note must be at most 300 characters"), // Nullable for optional fields
  merchantNumber: string().default(""), // Nullable for optional fields
  merchantAddress: string().default(""),
  merchantDistrict: string().default(""),
  merchantThana: string().default(""),
  hubId: string().nullable(),
  charge: number().required(),
});

const Pricing = object({
  from: string(),
  to: string(),
  category: string(),
  serviceType: string(),
  weight: number(),
  pickUp: string().oneOf(["home", "hub"], "Invalid pickup type"),
});

const updatePricing = object({
  dhakaToDhaka: number(),
  dhakaAllOverBangladesh: number(),
  OneKgWeight: number(),
  regular: number(),
  express: number(),
  homeDelivery: number(),
  pointDelivery: number(),
  pickUpHome: number(),
  pickUpHub: number(),
});

const updateUserInformation = object({
  name: string(),
  number: string(),
  email: string(),
  businessName: string(),
  address: string(),
});
const addHubSchema = object({
  name: string().required(),
  phone: string().required(),
  address: string().required(),
});

const riderSchema = object({
  riderName: string().required().max(50),
  riderNumber: string().required(),
  riderNID: string().required(),
  riderPassword: string().required(),
  image:string().default("")
});

export {
  userSchema,
  addParcelSchema,
  updateUserInformation,
  Pricing,
  updatePricing,
  addHubSchema,
  riderSchema,
};
