import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../libs/prisma";
import { updateUserInformation } from "../../../../validations/modelValidation";
import errorMessage from "../../../../validations/errorMessage";

export const POST = async (request: NextRequest) => {
  const data = await updateUserInformation.validate(await request.json());
  const token = request.headers.get("ADMIN") as string;
  const user = JSON.parse(token) as { id: string; phone: string };

  try {
    if (!user) {
      return NextResponse.json({ error: "User not authenticated" });
    }
    const updateInfo = await prisma.users.update({
      data: {
        name: data.name,
        phone: data.number,
        email: data.email,
        address: data.address,
      },
      where: {
        id: user.id,
      },
    });
    return NextResponse.json({ updateInfo });
  } catch (error) {
    return errorMessage(error);
  }
};