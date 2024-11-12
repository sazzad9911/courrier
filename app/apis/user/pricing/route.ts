import { NextRequest, NextResponse } from "next/server";
import { Pricing } from "../../../../validations/modelValidation";
import errorMessage from "../../../../validations/errorMessage";
import prisma from "../../../../libs/prisma";

interface CategoryPrice {
  regular: number;
  express: number;
  pickAnddrop: number;
}
interface ServiceTypePrice {
  homeDelivery: number;
  pointDelivery: number;
}
interface pickUpTypePrice {
  pickUpHome: number;
  pickUpHub: number;
}

type WeightData = { weight: number } | null;

export const POST = async (request: NextRequest) => {
  try {
    const data = await Pricing.validate(await request.json());
    const isDhaka = data.from === "Dhaka" && data.to === "Dhaka";

    const locationPrice = isDhaka
      ? (await prisma.pricing.findFirst({ select: { dhakadhaka: true } }))
          ?.dhakadhaka
      : (
          await prisma.pricing.findFirst({
            select: { dhakaalloverbangladesh: true },
          })
        )?.dhakaalloverbangladesh;

    const [categoryPriceData, serviceTypePriceData, weightData, picUpData] =
      await Promise.all([
        (data.category === "Regular"
          ? prisma.pricing.findFirst({ select: { regular: true } })
          : data.category === "Express"
          ? prisma.pricing.findFirst({ select: { express: true } })
          : prisma.pricing.findFirst({
              select: { pickAnddrop: true },
            })) as Promise<CategoryPrice>,
        (data.serviceType === "Home Delivery"
          ? prisma.pricing.findFirst({ select: { homeDelivery: true } })
          : prisma.pricing.findFirst({
              select: { pointDelivery: true },
            })) as Promise<ServiceTypePrice>,
        prisma.pricing.findFirst({
          select: { weight: true },
        }) as Promise<WeightData>,
        (data.pickUp === "Home"
          ? prisma.pricing.findFirst({ select: { pickUpHome: true } })
          : prisma.pricing.findFirst({
              select: { pickUpHub: true },
            })) as Promise<pickUpTypePrice>,
      ]);

    const categoryPrice =
      data.category === "Regular"
        ? categoryPriceData?.regular
        : data.category === "Express"
        ? categoryPriceData?.express
        : categoryPriceData?.pickAnddrop;

    const serviceTypePrice =
      data.serviceType === "Home Delivery"
        ? serviceTypePriceData?.homeDelivery
        : serviceTypePriceData?.pointDelivery;

    const pickUpPrice =
      data.pickUp === "Home" ? picUpData?.pickUpHome : picUpData?.pickUpHub;

    const multipliedWeight = data.weight * (weightData?.weight || 1);

    const total =
      (locationPrice || 0) +
      (categoryPrice || 0) +
      (serviceTypePrice || 0) +
      (pickUpPrice || 0) +
      multipliedWeight;

    return NextResponse.json(total);
  } catch (error) {
    console.log(error);
    return errorMessage(error);
  }
};

export const GET = async () => {
  try {
    const price = await prisma.pricing.findFirst({});
    return NextResponse.json(price);
  } catch (error) {
    errorMessage(error);
  }
};
