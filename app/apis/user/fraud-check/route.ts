import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../libs/prisma";
import errorMessage from "../../../../validations/errorMessage";

export const POST = async (request: NextRequest) => {
  const { number } = await request.json();

  try {
    const users = await prisma.users.findMany({
      where: {
        fraud: true,
        phone: number,
      },
      select: {
        id: true,
        businessName: true,
        name: true,
        email: true,
        phone: true,
        balance: true,
        address: true,
        image: true,
        Addparcel: true,
      },
    });

    // Check if the users array is empty
    if (users.length === 0) {
      return NextResponse.json({ message: "There is no fraud case" });
    }

    return NextResponse.json(users);
  } catch (error) {
    errorMessage(error);
    return NextResponse.json({ error: "Fraud check error" });
  }
};
