import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../libs/prisma";
import errorMessage from "../../../../validations/errorMessage";

export const GET = async (request: NextRequest) => {
  const number = request.nextUrl.searchParams.get('number');
  if (!number) return NextResponse.json({ error: "Invalid number" }, { status: 404 })
  try {
    const fraud = await prisma.fraudReport.findFirst({
      where: {
        phone: number,
      }
    });
    if (!fraud) {
      const parcel = await prisma.addparcel.findMany({
        where: {
          phoneNumber: number
        }
      })
      const totalDelivered = parcel.filter(parcel => parcel.status === "delivered").length;
      const totalPending = parcel.filter(parcel => parcel.status === "pending").length;
      const totalCancelled = parcel.filter(parcel => parcel.status === "cancelled").length;
      const totalParcel = parcel.length;

      return NextResponse.json({ message: "No fraud report found!", result: { totalParcel, totalDelivered, totalPending, totalCancelled } }, { status: 201 })
    }

    return NextResponse.json({ message: "Fraud Alert!!", result: fraud });
  } catch (error) {
    return errorMessage(error);
  }
};
