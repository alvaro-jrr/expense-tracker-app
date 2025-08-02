import { PrismaClient } from "@prisma/client";

type GlobalWithPrisma = typeof globalThis & {
  prisma?: PrismaClient;
};

let prisma: PrismaClient;

// Prepare the prisma client based on the environment.
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  const globalPrisma: GlobalWithPrisma = global;

  if (!globalPrisma.prisma) {
    globalPrisma.prisma = new PrismaClient();
  }

  prisma = globalPrisma.prisma;
}

export default prisma;
