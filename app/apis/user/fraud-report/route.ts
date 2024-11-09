import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../libs/prisma";
import errorMessage from "../../../../validations/errorMessage";

export const POST = async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("id");
    const { riderId } = await request.json();
    // const token = request.headers.get("USER") as string;
    // const rider = JSON.parse(token) as { id: string; phone: string };
    // console.log(userId, riderId);
    const existingReport = await prisma.fraudReport.findUnique({
      where: {
        userId_riderId: {
          userId,
          riderId,
        },
      },
    });

    if (existingReport) {
      return NextResponse.json({
        message: "Rider has already flagged this user.",
      });
    }

    // Create a new fraud report
    await prisma.fraudReport.create({
      data: {
        userId,
        riderId,
      },
    });

    // Count the unique fraud reports for this user
    const fraudCount = await prisma.fraudReport.count({
      where: {
        userId,
      },
    });

    // If fraud count reaches 3, update user's fraud status to true
    if (fraudCount >= 3) {
      await prisma.users.update({
        where: { id: userId },
        data: { fraud: true },
      });
    }

    return NextResponse.json({
      message: "Fraud report submitted successfully.",
    });
  } catch (error) {
    errorMessage(error);
    return NextResponse.json({ error: "fraud Report Error" });
  }
};

export const GET = async () => {
  try {
    const allFraudReport = await prisma.fraudReport.findMany({});
    return NextResponse.json(allFraudReport);
  } catch (error) {
    errorMessage(error);
    return NextResponse.json({ error: "FraudReport getting Error" });
  }
};
