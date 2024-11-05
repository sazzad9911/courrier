import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../libs/prisma";
import errorMessage from "../../../../validations/errorMessage";
import { updatePricing } from "../../../../validations/modelValidation";

export const POST = async (request: NextRequest) => {
  try {
    // Validate incoming data using your schema validation function
    const data = await updatePricing.validate(await request.json());

    // Extract and parse the user information from the token
    const token = request.headers.get("USER") as string;
    const user = JSON.parse(token) as { id: string; phone: string };
    console.log(user);

    const adminUser = await prisma.users.findFirst({ where: { id: user.id } });

    // Check if the user exists and is an admin
    if (!adminUser || !adminUser.isAdmin) {
      return NextResponse.json(
        { error: "Unauthorized: You don't have permission to update pricing" },
        { status: 403 }
      );
    }

    // Update pricing data for records where pickUpHub is 0
    const updatedPricing = await prisma.pricing.updateMany({
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

    return NextResponse.json(updatedPricing);
  } catch (error) {
    console.error(error);
    // Call a generic error handler or return specific error information
    return errorMessage(error);
  }
};
