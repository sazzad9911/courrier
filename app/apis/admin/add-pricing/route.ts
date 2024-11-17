import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../libs/prisma";
import errorMessage from "../../../../validations/errorMessage";
import { updatePricing } from "../../../../validations/modelValidation";

export const PUT = async (request: NextRequest) => {
  try {
    // Validate incoming data using schema validation
    const data = await updatePricing.validate(await request.json());

    // Perform the update operation
    await prisma.pricing.updateMany({
      where: { pickUpHub: 0 },
      data: {
        dhakadhaka: data.dhakaToDhaka,
        dhakaalloverbangladesh: data.dhakaAllOverBangladesh,
        weight: data.oneKgWeight,
        regular: data.regular,
        express: data.express,
        homeDelivery: data.homeDelivery,
        pointDelivery: data.pointDelivery, // fixed typo
        pickUpHome: data.pickUpHome,
        pickAnddrop: data.pickUpAndDrop,
      },
    });

    // Fetch and return the updated records to display the latest data

    return NextResponse.json({ message: "price update successfully done." });
  } catch (error) {
    return errorMessage(error);
  }
};

export const GET = async () => {
  try {
    const updatedRecords = await prisma.pricing.findFirst({
      where: { pickUpHub: 0 },
    });
    return NextResponse.json(updatedRecords);
  } catch (error) {
    return errorMessage(error);
  }
};
