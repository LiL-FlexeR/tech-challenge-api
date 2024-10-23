import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";

const validateDto = <T extends object>(dtoClass: new () => T) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dto = plainToClass(dtoClass, req.body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      res.status(400).json({
        message: "Validation error",
        errors: errors.map((error) => ({
          property: error.property,
          constraints: error.constraints,
        })),
      });

      return;
    }

    next();
  };
};

export default validateDto;
