import { NextRequest, NextResponse } from "next/server";
import { addParcelSchema } from "../../../../validations/modelValidation";
import prisma from "../../../../libs/prisma";
import errorMessage from "../../../../validations/errorMessage";

export const POST = async (request: NextRequest) => {
  try {
    const data = await addParcelSchema.validate(await request.json());
    const token = request.headers.get("USER") as string;
    const user = JSON.parse(token) as { id: string; phone: string };
    const trackingId = await getUniqueTrackingID();
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
        trackingId: trackingId,
        pickUpFrom: data.pickUp,
      },
    });

    return NextResponse.json({
      message: "Addparcel successfully done",
      parcel,
    });
  } catch (error) {
    return errorMessage(error);
  }
};

export const GET = async (request: NextRequest) => {
  const take = request.nextUrl.searchParams.get("take");
  const skip = request.nextUrl.searchParams.get("skip");
  try {
    const token = request.headers.get("USER") as string;
    const user = JSON.parse(token) as { id: string; phone: string };
    const total = await prisma.addparcel.count({
      where: { userId: user.id },
    });
    const result = await prisma.addparcel.findMany({
      where: {
        userId: user.id,
      },
      take: parseInt(take) || undefined,
      skip: parseInt(skip) || undefined,
    });
    return NextResponse.json({ result, total });
  } catch (error) {
    return errorMessage(error);
  }
};

function generateTrackingID(): string {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let trackingID = "";

  for (let i = 0; i < 7; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    trackingID += characters[randomIndex];
  }

  return trackingID;
}

async function getUniqueTrackingID() {
  let trackingID: string;
  let isUnique = false;

  // Keep generating until we find a unique ID
  while (!isUnique) {
    trackingID = generateTrackingID();
    const existingParcel = await prisma.addparcel.findUnique({
      where: { trackingId: trackingID },
    });

    // If no existing parcel is found with this ID, it's unique
    if (!existingParcel) {
      isUnique = true;
    }
  }
  return trackingID;
}
