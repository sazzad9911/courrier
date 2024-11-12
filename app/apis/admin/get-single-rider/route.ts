import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../libs/prisma";
import errorMessage from "../../../../validations/errorMessage";

export const GET = async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const rider = await prisma.rider.findFirst({
      where: { id: id },
      select: {
        name: true,
        nid: true,
        phone: true,
      },
    });
    return NextResponse.json(rider);
  } catch (error) {
    errorMessage(error);
  }
};
