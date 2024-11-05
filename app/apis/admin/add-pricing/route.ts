import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../libs/prisma";
import errorMessage from "../../../../validations/errorMessage";

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json();
    const addPricing = await prisma.pricing.create({});
    return NextResponse.json(addPricing, data);
  } catch (error) {
    return errorMessage(error);
  }
};
