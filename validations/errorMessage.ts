import { NextResponse } from "next/server";

const errorMessage = async (error: any) => {
    if (error.name === 'ValidationError') {
        return NextResponse.json({ error: error.errors[0] }, { status: 404 });
    }
    return NextResponse.json({ error: "Server error", code: error }, { status: 404 })
}
export default errorMessage