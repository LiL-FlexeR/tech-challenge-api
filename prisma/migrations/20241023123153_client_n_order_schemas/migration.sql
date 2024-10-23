-- CreateTable
CREATE TABLE "Client" (
    "id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL
);

-- CreateTable
CREATE TABLE "Order" (
    "id" UUID NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "clientId" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_id_key" ON "Client"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_id_key" ON "Order"("id");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
