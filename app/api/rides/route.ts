import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const posts = await prisma.ride.findFirst({
    include: {
      locations: true,
    },
  });
  return NextResponse.json(posts);
}
