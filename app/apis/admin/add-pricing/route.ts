import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../libs/prisma";
import errorMessage from "../../../../validations/errorMessage";
import { updatePricing } from "../../../../validations/modelValidation";

export const POST = async (request: NextRequest) => {
  try {
    // Validate incoming data using schema validation
    const data = await updatePricing.validate(await request.json());

    // Extract and parse the user information from the token
    const token = request.headers.get("ADMIN") as string;
    const user = JSON.parse(token) as { id: string; phone: string };

    // Check if user exists and is an admin
    const adminUser = await prisma.users.findFirst({ where: { id: user.id } });
    if (!adminUser || !adminUser.isAdmin) {
      return NextResponse.json(
        { error: "Unauthorized: You don't have permission to update pricing" },
        { status: 403 }
      );
    }

    // Perform the update operation
    await prisma.pricing.updateMany({
      where: { pickUpHub: 0 },
      data: {
        dhakadhaka: data.dhakaToDhaka,
        dhakaalloverbangladesh: data.dhakaAllOverBangladesh,
        weight: data.OneKgWeight,
        regular: data.regular,
        express: data.express,
        homeDelivery: data.homeDelivery,
        pointDelivery: data.poinDelivery, // fixed typo
        pickUpHome: data.pickUpHome,
      },
    });

    // Fetch and return the updated records to display the latest data
    // const updatedRecords = await prisma.pricing.findMany({
    //   where: { pickUpHub: 0 },
    // });

    return NextResponse.json({ message: "price update successfully done." });
  } catch (error) {
    return errorMessage(error);
  }
};
