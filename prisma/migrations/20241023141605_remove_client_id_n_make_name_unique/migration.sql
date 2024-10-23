/*
  Warnings:

  - You are about to drop the column `id` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `clientId` on the `Order` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Client` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clientName` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_clientId_fkey";

-- DropIndex
DROP INDEX "Client_id_key";

-- AlterTable
ALTER TABLE "Client" DROP COLUMN "id";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "clientId",
ADD COLUMN     "clientName" VARCHAR(100) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Client_name_key" ON "Client"("name");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_clientName_fkey" FOREIGN KEY ("clientName") REFERENCES "Client"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
