/*
  Warnings:

  - You are about to drop the column `order` on the `orders` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "order";

-- CreateTable
CREATE TABLE "controlOfOrders" (
    "id" SERIAL NOT NULL,
    "menuId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "ordersId" INTEGER NOT NULL,

    CONSTRAINT "controlOfOrders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "controlOfOrders" ADD CONSTRAINT "controlOfOrders_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "controlOfOrders" ADD CONSTRAINT "controlOfOrders_ordersId_fkey" FOREIGN KEY ("ordersId") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
