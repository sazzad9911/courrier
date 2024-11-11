import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../libs/prisma";
import errorMessage from "../../../../validations/errorMessage";

export const GET = async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const singleHub = await prisma.hublist.findFirst({
      where: { id: id },
    });
    return NextResponse.json(singleHub);
  } catch (error) {
    errorMessage(error);
    return NextResponse.json({ error: "singleHub detels fatching Error" });
  }
};
