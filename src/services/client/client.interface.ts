import {
  TClientCreateProps,
  TClientDeleteProps,
  TClientFindByProps,
  TClientFindManyProps,
  TClientReturnType,
  TClientUpdateProps,
} from "./client.types";

export interface IClientService {
  create<T extends TClientCreateProps>(props: T): Promise<TClientReturnType<T>>;
  findBy<T extends TClientFindByProps>(
    props: T
  ): Promise<TClientReturnType<T> | null>;
  findMany<T extends TClientFindManyProps>(
    props: T
  ): Promise<TClientReturnType<T>[]>;
  update<T extends TClientUpdateProps>(props: T): Promise<TClientReturnType<T>>;
  delete<T extends TClientDeleteProps>(props: T): Promise<TClientReturnType<T>>;
}
