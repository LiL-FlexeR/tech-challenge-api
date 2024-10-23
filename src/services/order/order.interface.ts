import {
  TOrderCreateProps,
  TOrderDeleteProps,
  TOrderFindByProps,
  TOrderFindManyProps,
  TOrderReturnType,
  TOrderUpdateProps,
} from "./order.types";

export interface IOrderService {
  create<T extends TOrderCreateProps>(props: T): Promise<TOrderReturnType<T>>;
  findBy<T extends TOrderFindByProps>(
    props: T
  ): Promise<TOrderReturnType<T> | null>;
  findMany<T extends TOrderFindManyProps>(
    props: T
  ): Promise<TOrderReturnType<T>[]>;
  update<T extends TOrderUpdateProps>(props: T): Promise<TOrderReturnType<T>>;
  delete<T extends TOrderDeleteProps>(props: T): Promise<TOrderReturnType<T>>;
}
