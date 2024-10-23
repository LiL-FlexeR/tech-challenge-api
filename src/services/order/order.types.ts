import { Order, Prisma } from "@prisma/client";

// Data types

export type TOrder = Order;

// Args

type TOrderArgs = Prisma.OrderArgs;

// Functions props

export type TOrderCreateProps = Prisma.OrderCreateArgs;
export type TOrderCreateManyProps = Prisma.OrderCreateManyArgs;
export type TOrderFindByProps = Prisma.OrderFindFirstArgs;
export type TOrderFindManyProps = Prisma.OrderFindManyArgs;
export type TOrderUpdateProps = Prisma.OrderUpdateArgs;
export type TOrderDeleteProps = Prisma.OrderDeleteArgs;

// Return types

export type TOrderReturnType<T extends TOrderArgs> = Prisma.OrderGetPayload<T>;
