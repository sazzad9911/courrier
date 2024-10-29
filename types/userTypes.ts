export default interface userTypes {
    id: string; // @id, @default(auto()), @map("_id"), @db.ObjectId
    businessName: string;
    name: string;
    email: string; // @unique
    phone: string; // @unique
    password: string;
    pushToken?: string | null; // Optional
    balance: number; // Default value 0
    isAdmin: boolean; // Default value false
}