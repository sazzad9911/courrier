import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../libs/prisma";
import { riderSchema } from "../../../../validations/modelValidation";
import md5 from "md5";
import errorMessage from "../../../../validations/errorMessage";
export const POST = async (request: NextRequest) => {
  try {
    const data = await riderSchema.validate(await request.json());
    // const token = request.headers.get("ADMIN") as string;
    // const user = JSON.parse(token) as { id: string; phone: string };

    // Check if user exists and is an admin
    // const adminUser = await prisma.users.findFirst({ where: { id: user.id } });
    // if (!adminUser || !adminUser.isAdmin) {
    //   return NextResponse.json(
    //     {
    //       error:
    //         "Unauthorized: You don't have permission to create Rider account",
    //     },
    //     { status: 403 }
    //   );
    // }
    const hassPassword = md5(data.riderPassword);
    await prisma.rider.create({
      data: {
        name: data.riderName,
        phone: data.riderNumber,
        nid: data.riderNID,
        password: hassPassword,
        image: data.image,
      },
    });
    return NextResponse.json({
      message: "Rider account creation successfully done",
    });
  } catch (error) {
    errorMessage(error);
    return NextResponse.json({ error: "Rider account creation Error" });
  }
};

export const GET = async () => {
  try {
    const allRider = await prisma.rider.findMany({
      select: {
        id: true,
        name: true,
        nid: true,
        phone: true,
        image: true,
      },
    });
    return NextResponse.json(allRider);
  } catch (error) {
    errorMessage(error);
    return NextResponse.json({ error: "Rider account Getting  Error" });
  }
};

export const PUT = async (request: NextRequest) => {
  try {
    const data = await riderSchema.validate(await request.json());
    const { searchParams } = new URL(request.url);
    const riderId = searchParams.get("id");
    const hassPassword = md5(data.riderPassword);
    await prisma.rider.update({
      where: { id: riderId },
      data: {
        name: data.riderName,
        phone: data.riderNumber,
        nid: data.riderNID,
        password: hassPassword,
      },
    });
    return NextResponse.json({ message: "Rider info update success!" });
  } catch (error) {
    errorMessage(error);
    return NextResponse.json({ error: "Rider Info update Fail" });
  }
};

export const DELETE = async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url);
    const riderId = searchParams.get("id");

    if (!riderId) {
      return NextResponse.json(
        { error: "Rider ID is required" },
        { status: 400 }
      );
    }

    // Use a transaction to delete associated FraudReports first, then the Rider
    await prisma.$transaction([
      prisma.fraudReport.deleteMany({
        where: { riderId: riderId },
      }),
      prisma.rider.delete({
        where: { id: riderId },
      }),
    ]);

    return NextResponse.json({
      message: "Rider info and related FraudReports deleted successfully",
    });
  } catch (error) {
    console.error("Rider info Delete Error:", error);
    return NextResponse.json(
      { error: "Rider info Delete Error" },
      { status: 500 }
    );
  }
};
