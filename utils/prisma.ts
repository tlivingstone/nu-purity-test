// utils/prisma.ts
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma as any) {
    global.prisma = new PrismaClient({ log: ["query"] });
  }
  prisma = global.prisma;
}

export default prisma;
