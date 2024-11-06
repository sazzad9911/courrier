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
    return errorMessage(error, null, "name");
  }
};
export const GET = async () => {
  try {
    const hub = await prisma.hublist.findMany();
    return NextResponse.json(hub);
  } catch (error) {
    return errorMessage(error);
  }
};

export const PUT = async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url);
    const hubId = searchParams.get("id");
    const data = await addHubSchema.validate(await request.json());
    await prisma.hublist.update({
      where: { id: hubId },
      data: {
        name: data.name,
        phone: data.phone,
        address: data.address,
      },
    });
    return NextResponse.json({ message: "hub Info update successfully done " });
  } catch (error) {
    errorMessage(error);
    return NextResponse.json({ error: "hub Info Update Fail" });
  }
};

export const DELETE = async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url);
    const hubId = searchParams.get("id");
    await prisma.hublist.delete({
      where: { id: hubId },
    });
    return NextResponse.json({ message: "Hub delete successful" });
  } catch (error) {
    errorMessage(error);
    return NextResponse.json({ error: "Delete Fail" });
  }
};
