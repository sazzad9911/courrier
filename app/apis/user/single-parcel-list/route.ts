import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../libs/prisma";
export const GET = async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const singleParcel = await prisma.addparcel.findFirst({
      where: { id: id },
    });
    return NextResponse.json(singleParcel);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "All Percel data fatching Fail" });
  }
};
