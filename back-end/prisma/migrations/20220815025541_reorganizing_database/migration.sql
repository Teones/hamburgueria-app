/*
  Warnings:

  - You are about to drop the column `addressId` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `cardPayment` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `cardsId` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `code` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `couponId` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `haveCoupon` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the `address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `controlOfOrders` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `coupons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "address" DROP CONSTRAINT "address_userId_fkey";

-- DropForeignKey
ALTER TABLE "controlOfOrders" DROP CONSTRAINT "controlOfOrders_menuId_fkey";

-- DropForeignKey
ALTER TABLE "controlOfOrders" DROP CONSTRAINT "controlOfOrders_ordersId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_addressId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_cardsId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_couponId_fkey";

-- DropIndex
DROP INDEX "orders_code_key";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "addressId",
DROP COLUMN "cardPayment",
DROP COLUMN "cardsId",
DROP COLUMN "code",
DROP COLUMN "couponId",
DROP COLUMN "createdAt",
DROP COLUMN "haveCoupon",
DROP COLUMN "status",
ADD COLUMN     "order" TEXT[],
ALTER COLUMN "total" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "address";

-- DropTable
DROP TABLE "cards";

-- DropTable
DROP TABLE "controlOfOrders";

-- DropTable
DROP TABLE "coupons";
