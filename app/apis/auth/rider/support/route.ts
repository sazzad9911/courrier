import { NextRequest, NextResponse } from "next/server";

const POST=async(request:NextRequest)=>{
    return NextResponse.json("ok")
}
export {POST}