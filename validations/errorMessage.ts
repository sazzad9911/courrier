import { NextResponse } from "next/server";
type Types = "admin" | null | 'id'

const errorMessage = async (error: any, message: Types=null, field?: string) => {
    if (message == "admin") return NextResponse.json({ error: "admin not found" }, { status: 404 });
    if (message == "id") return NextResponse.json({ error: "id not found" }, { status: 404 });
    if (error.name === 'ValidationError') {
        return NextResponse.json({ error: error.errors[0] }, { status: 404 });
    }
    if (error.code === "P2002") return NextResponse.json({ error: `${field} is already exists`, code: error }, { status: 404 })
    if (error.code === "P2003") return NextResponse.json({ error: `${field} is not exists`, code: error }, { status: 404 })
    return NextResponse.json({ error: "Server error", code: error }, { status: 404 })
}
export default errorMessage