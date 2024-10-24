import { DatabaseService } from "../db/db.service";

import { IOrderService } from "./order.interface";
import {
  TOrderCreateManyProps,
  TOrderCreateProps,
  TOrderDeleteProps,
  TOrderFindByProps,
  TOrderFindManyProps,
  TOrderReturnType,
  TOrderUpdateProps,
} from "./order.types";

export class OrderService implements IOrderService {
  private readonly db = DatabaseService.getInstance();

  async create<T extends TOrderCreateProps>(
    props: T
  ): Promise<TOrderReturnType<T>> {
    const order = await this.db.order.create(props);

    return order as TOrderReturnType<T>;
  }

  async createMany<T extends TOrderCreateManyProps>(props: T): Promise<void> {
    await this.db.order.createMany(props);
  }

  async findBy<T extends TOrderFindByProps>(
    props: T
  ): Promise<TOrderReturnType<T> | null> {
    const order = await this.db.order.findFirst(props);

    return order as TOrderReturnType<T>;
  }

  async findMany<T extends TOrderFindManyProps>(
    props: T
  ): Promise<TOrderReturnType<T>[]> {
    const order = await this.db.order.findMany(props);

    return order as TOrderReturnType<T>[];
  }

  async update<T extends TOrderUpdateProps>(
    props: T
  ): Promise<TOrderReturnType<T>> {
    const order = await this.db.order.update(props);

    return order as TOrderReturnType<T>;
  }

  async delete<T extends TOrderDeleteProps>(
    props: T
  ): Promise<TOrderReturnType<T>> {
    const order = await this.db.order.delete(props);

    return order as TOrderReturnType<T>;
  }
}
