import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../libs/prisma";
import { updateUserInformation } from "../../../../validations/modelValidation";
import errorMessage from "../../../../validations/errorMessage";

export const PUT = async (request: NextRequest) => {
  const data = await updateUserInformation.validate(await request.json());
  const token = request.headers.get("ADMIN") as string;
  const user = JSON.parse(token) as { id: string; phone: string };

  try {
    if (!user) {
      return NextResponse.json({ error: "User not authenticated" });
    }
    await prisma.users.update({
      where: {
        id: user.id,
      },
      data: {
        name: data.name,
        phone: data.number,
        email: data.email,
        address: data.address,
      },
    });
    return NextResponse.json({ message: "Admin info updated successful" });
  } catch (error) {
    console.log(error);
    return errorMessage(error);
  }
};

export const GET = async (request: NextRequest) => {
  const token = request.headers.get("ADMIN") as string;
  const admin = JSON.parse(token) as { id: string; phone: string };
  try {
    if (!admin) {
      return NextResponse.json({ error: "User not authenticated" });
    }
    const adminInfo = await prisma.users.findFirst({ where: { id: admin.id } });
    return NextResponse.json(adminInfo);
  } catch (error) {
    errorMessage(error);
  }
};
