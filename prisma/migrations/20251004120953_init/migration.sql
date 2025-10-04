/*
  Warnings:

  - A unique constraint covering the columns `[event_id,user_id]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Booking_event_id_user_id_key" ON "Booking"("event_id", "user_id");
