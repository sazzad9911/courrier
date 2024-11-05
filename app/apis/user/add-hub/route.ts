import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../libs/prisma";
import errorMessage from "../../../../validations/errorMessage";

export const POST = async (request: NextRequest) => {
  try {
    const hubResult = await prisma.hublist.updateMany({
      where: { password: "update" },
      data: {
        list: ["bg", "ng"],
      },
    });
    return NextResponse.json(hubResult);
  } catch (error) {
    return errorMessage(error);
  }
};
