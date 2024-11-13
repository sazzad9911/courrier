import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../libs/prisma";
import { updateUserInformation } from "../../../../validations/modelValidation";
import errorMessage from "../../../../validations/errorMessage";

export const POST = async (request: NextRequest) => {
  const data = await updateUserInformation.validate(await request.json());
  const token = request.headers.get("USER") as string;
  const user = JSON.parse(token) as { id: string; phone: string };

  try {
    if (!user) {
      return NextResponse.json({ error: "User not authenticated" });
    }
    await prisma.users.update({
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
    return NextResponse.json({ message: "Update info successful" });
  } catch (error) {
    return errorMessage(error);
  }
};

const GET = async (request: NextRequest) => {
  const token = request.headers.get("USER") as string;
  const user = JSON.parse(token) as { id: string; phone: string };
  try {
    // console.log(token)
    const newUser = await prisma.users.findUnique({
      where: {
        id: user.id,
      },
    });
    if (!newUser)
      return NextResponse.json({ error: "User not found" }, { status: 400 });

    return NextResponse.json({ ...newUser });
  } catch (error) {
    return errorMessage(error);
  }
};
export { GET };
