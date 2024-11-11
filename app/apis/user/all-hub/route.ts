import { NextResponse } from "next/server";
import prisma from "../../../../libs/prisma";
import errorMessage from "../../../../validations/errorMessage";
export const GET = async () => {
  try {
    const hub = await prisma.hublist.findMany();
    return NextResponse.json(hub);
  } catch (error) {
    return errorMessage(error);
  }
};
