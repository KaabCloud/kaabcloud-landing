-- CreateTable
CREATE TABLE "LeadMessage" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "LeadMessage_pkey" PRIMARY KEY ("id")
);
