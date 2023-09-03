/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Ride` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Ride_userId_key" ON "Ride"("userId");
