import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../libs/prisma";

export const POST = async (request: NextRequest) => {
  try {
    // Update all entries with the specified password
    const hubResult = await prisma.hublist.updateMany({
      where: { password: "update" },
      data: {
        list: ["bg", "ng"],
      },
    });

    // Return the update result as JSON
    return NextResponse.json({ success: true, data: hubResult });
  } catch (error) {
    // Return the error as JSON with a 500 status
    return NextResponse.json(
      { success: false, message: error.message || "An error occurred" },
      { status: 500 }
    );
  }
};
