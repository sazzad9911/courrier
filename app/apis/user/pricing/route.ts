import { NextRequest, NextResponse } from "next/server";
import { Pricing } from "../../../../validations/modelValidation";
import errorMessage from "../../../../validations/errorMessage";
import prisma from "../../../../libs/prisma";

interface CategoryPrice {
  regular: number;
  express: number;
}
interface ServiceTypePrice {
  homeDelivery: number;
  pointDelivery: number;
}

type WeightData = { weight: number } | null;

export const POST = async (request: NextRequest) => {
  try {
    const data = await Pricing.validate(await request.json());
    const isDhaka = data.from === data.to;

    const locationPrice = isDhaka
      ? (await prisma.pricing.findFirst({ select: { dhakadhaka: true } }))
          ?.dhakadhaka
      : (
          await prisma.pricing.findFirst({
            select: { dhakaalloverbangladesh: true },
          })
        )?.dhakaalloverbangladesh;

    const [categoryPriceData, serviceTypePriceData, weightData] =
      await Promise.all([
        (data.category === "regular"
          ? prisma.pricing.findFirst({ select: { regular: true } })
          : prisma.pricing.findFirst({
              select: { express: true },
            })) as Promise<CategoryPrice>,
        (data.serviceType === "homeDelivery"
          ? prisma.pricing.findFirst({ select: { homeDelivery: true } })
          : prisma.pricing.findFirst({
              select: { pointDelivery: true },
            })) as Promise<ServiceTypePrice>,
        prisma.pricing.findFirst({
          select: { weight: true },
        }) as Promise<WeightData>,
      ]);

    const categoryPrice =
      data.category === "regular"
        ? categoryPriceData?.regular
        : categoryPriceData?.express;
    const serviceTypePrice =
      data.serviceType === "homeDelivery"
        ? serviceTypePriceData?.homeDelivery
        : serviceTypePriceData?.pointDelivery;

    const multipliedWeight = data.weight * (weightData?.weight || 1);
    console.log(locationPrice, categoryPrice, serviceTypePrice);
    const total =
      (locationPrice || 0) +
      (categoryPrice || 0) +
      (serviceTypePrice || 0) +
      multipliedWeight;

    return NextResponse.json(total);
  } catch (error) {
    return errorMessage(error);
  }
};
