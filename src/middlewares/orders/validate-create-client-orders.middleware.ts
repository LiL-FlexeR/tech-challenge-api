import { validateOrReject, ValidationError } from "class-validator";
import { NextFunction, Request, Response } from "express";

import { CreateOrderDto } from "@app/dtos/order.dto";

import { LoggerService } from "@app/services/logger/logger.service";

const logger = new LoggerService("Dto validation");

export const validateClientOrdersMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dto = new CreateOrderDto();

    dto.orderNames = req.body.orderNames;
    dto.userName = req.body.userName;

    await validateOrReject(dto, {
      skipMissingProperties: false,
    });

    next();
  } catch (err: unknown) {
    logger.error(`Error occurred while validating dto\n${err}`);

    let message: string;
    let status: number;

    if (
      Array.isArray(err) &&
      err.every((err) => err instanceof ValidationError)
    ) {
      if (err[0].constraints) {
        message = Object.values(err[0].constraints)[0];
      } else {
        message = "Validation error";
      }

      status = 400;
    } else {
      message = "Something went wrong!";
      status = 500;
    }

    res.status(status).send({ message });
  }
};
