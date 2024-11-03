import { NextRequest, NextResponse } from "next/server";
import { addParcelSchema } from "../../../../validations/modelValidation";
import prisma from "../../../../libs/prisma";
import errorMessage from "../../../../validations/errorMessage";

export const POST = async (request: NextRequest) => {
  try {
    const data = await addParcelSchema.validate(await request.json());
    const token = request.headers.get("USER") as string;
    const user = JSON.parse(token) as { id: string; phone: string };
    function generateTrackingID(): string {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let trackingID = "";

      for (let i = 0; i < 7; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        trackingID += characters[randomIndex];
      }

      return trackingID;
    }
    const trakingId = generateTrackingID();
    const parcel = await prisma.addparcel.create({
      data: {
        userId: user.id,
        category: data.category,
        serviceType: data.serviceType,
        phoneNumber: data.phoneNumber,
        amount: data.amount,
        name: data.name,
        invoiceNumber: data.invoiceNumber,
        address: data.address,
        weight: data.weight,
        district: data.district,
        thana: data.thana,
        note: data.note,
        trackingId: trakingId,
      },
    });
    return NextResponse.json({
      message: "Addparcel successfully done ",
      parcel,
    });
  } catch (error) {
    return errorMessage(error);
  }
};
