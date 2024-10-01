/*
  Warnings:

  - Made the column `price` on table `CardPrice` required. This step will fail if there are existing NULL values in that column.
  - Made the column `time` on table `CardPrice` required. This step will fail if there are existing NULL values in that column.
  - Made the column `line1` on table `CardPrice` required. This step will fail if there are existing NULL values in that column.
  - Made the column `line2` on table `CardPrice` required. This step will fail if there are existing NULL values in that column.
  - Made the column `accessGroup` on table `CardPrice` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "CardPrice" ALTER COLUMN "price" SET NOT NULL,
ALTER COLUMN "price" SET DATA TYPE TEXT,
ALTER COLUMN "time" SET NOT NULL,
ALTER COLUMN "line1" SET NOT NULL,
ALTER COLUMN "line2" SET NOT NULL,
ALTER COLUMN "accessDiscord" DROP DEFAULT,
ALTER COLUMN "accessDiscord" SET DATA TYPE TEXT,
ALTER COLUMN "accessGroup" SET NOT NULL,
ALTER COLUMN "accessRange" DROP DEFAULT,
ALTER COLUMN "accessRange" SET DATA TYPE TEXT,
ALTER COLUMN "accessVideos" DROP DEFAULT,
ALTER COLUMN "accessVideos" SET DATA TYPE TEXT;
