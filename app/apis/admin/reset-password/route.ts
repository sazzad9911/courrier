import { NextRequest, NextResponse } from "next/server";
import md5 from "md5";
import errorMessage from "../../../../validations/errorMessage";
import prisma from "../../../../libs/prisma";

interface requestTypes {
  oldPassword: string;
  newPassword: string;
  retypePassword: string;
}

export const POST = async (request: NextRequest) => {
  const { oldPassword, newPassword, retypePassword } =
    (await request.json()) as requestTypes;
  if (!oldPassword || !newPassword || !retypePassword) {
    return NextResponse.json({ error: "Some fields are required" });
  }

  if (oldPassword === newPassword) {
    return NextResponse.json({
      error: "Old password and new password are the same!",
    });
  }

  if (newPassword !== retypePassword) {
    return NextResponse.json({ error: "Passwords do not match" });
  }

  const token = request.headers.get("ADMIN") as string;
  const user = token
    ? (JSON.parse(token) as {
        id: string;
        phone: string;
        tokenExpiration: string;
      })
    : null;

  if (!user || new Date() > new Date(user.tokenExpiration)) {
    return NextResponse.json({
      error: "User not authenticated or session expired",
    });
  }

  try {
    const existingUser = await prisma.users.findUnique({
      where: { id: user.id },
    });

    if (!existingUser || existingUser.password !== md5(oldPassword)) {
      return NextResponse.json({ error: "Old password is incorrect" });
    }

    const encryptedPassword = md5(newPassword);

    await prisma.users.update({
      data: {
        password: encryptedPassword,
      },
      where: {
        id: user.id,
      },
    });

    return NextResponse.json({
      message: "Password reset successful. All sessions have been invalidated.",
    });
  } catch (error) {
    return errorMessage(error);
  }
};
