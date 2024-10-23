import { Client, Prisma } from "@prisma/client";

// Data types

export type TClient = Client;

// Args

type TClientArgs = Prisma.ClientArgs;

// Functions props

export type TClientCreateProps = Prisma.ClientCreateArgs;
export type TClientFindByProps = Prisma.ClientFindFirstArgs;
export type TClientFindManyProps = Prisma.ClientFindManyArgs;
export type TClientUpdateProps = Prisma.ClientUpdateArgs;
export type TClientDeleteProps = Prisma.ClientDeleteArgs;

// Return types

export type TClientReturnType<T extends TClientArgs> =
  Prisma.ClientGetPayload<T>;
