-- CreateTable
CREATE TABLE "CardPrice" (
    "id" SERIAL NOT NULL,
    "pack" TEXT NOT NULL,
    "price" DOUBLE PRECISION,
    "time" TEXT,
    "line1" TEXT,
    "line2" TEXT,
    "accessDiscord" BOOLEAN NOT NULL DEFAULT false,
    "accessGroup" TEXT,
    "accessRange" BOOLEAN NOT NULL DEFAULT false,
    "accessVideos" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "CardPrice_pkey" PRIMARY KEY ("id")
);
