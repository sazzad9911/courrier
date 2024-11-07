import { NextResponse } from "next/server";
import prisma from "../../../../libs/prisma";

export const GET = async () => {
  try {
    const allMerchant = await prisma.users.findMany({
      where: { isAdmin: false },
    });
    return NextResponse.json(allMerchant);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
};
