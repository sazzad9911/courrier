import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../libs/prisma";
import errorMessage from "../../../../validations/errorMessage";
export const GET = async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const singleParcel = await prisma.addparcel.findFirst({
      where: { id: id },
    });
    return NextResponse.json(singleParcel);
  } catch (error) {
    errorMessage(error);
    return NextResponse.json({ error: "singleParcel data fatching Fail" });
  }
};
