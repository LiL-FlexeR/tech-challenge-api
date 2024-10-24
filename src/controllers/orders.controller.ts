import { Request, Response, Router } from "express";

import { CreateOrderDto } from "@app/dtos/order.dto";

import { validateClientOrdersMiddleware } from "@app/middlewares/orders/validate-create-client-orders.middleware";

import { ClientService } from "@app/services/client/client.service";
import { OrderService } from "@app/services/order/order.service";

const ordersRouter = Router();

const orderService = new OrderService();
const clientService = new ClientService();

ordersRouter.post(
  "/orders",
  validateClientOrdersMiddleware,
  async (req: Request<unknown, unknown, CreateOrderDto>, res: Response) => {
    const dto = req.body;

    let client = await clientService.findBy({
      where: {
        name: dto.userName,
      },
      select: {
        name: true,
      },
    });

    if (!client) {
      client = await clientService.create({
        data: {
          name: dto.userName,
        },
        select: {
          name: true,
        },
      });
    }

    await orderService.createMany({
      data: dto.orderNames.map((n) => ({
        name: n,
        clientName: client.name,
      })),
    });

    res.status(201);

    res.end();
  }
);

ordersRouter.get("/orders", async (_req: Request, res: Response) => {
  const clients = await clientService.findMany({
    select: {
      name: true,
      orders: {
        select: {
          name: true,
          id: true,
        },
      },
    },
  });

  res.json(clients);
});

export default ordersRouter;
