import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../libs/prisma";
import errorMessage from "../../../../validations/errorMessage";
import { addHubSchema } from "../../../../validations/modelValidation";

export const POST = async (request: NextRequest) => {
  try {
    const data = await addHubSchema.validate(await request.json());
    const hubResult = await prisma.hublist.create({
      data: {
        name: data.name,
        address: data.address,
        phone: data.phone,
      },
    });
    return NextResponse.json(hubResult);
  } catch (error) {
    return errorMessage(error,null,"name");
  }
};
export const GET = async (request: NextRequest) => {
  try {
    const hub = await prisma.hublist.findMany();
    return NextResponse.json(hub);
  } catch (error) {
    return errorMessage(error);
  }
};
