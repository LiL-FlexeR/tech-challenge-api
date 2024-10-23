import { DatabaseService } from "../db/db.service";
import { IClientService } from "./client.interface";
import {
  TClientCreateProps,
  TClientDeleteProps,
  TClientFindByProps,
  TClientFindManyProps,
  TClientReturnType,
  TClientUpdateProps,
} from "./client.types";

export class ClientService implements IClientService {
  private readonly db = DatabaseService.getInstance();

  async create<T extends TClientCreateProps>(
    props: T
  ): Promise<TClientReturnType<T>> {
    const client = await this.db.client.create(props);

    return client as TClientReturnType<T>;
  }

  async findBy<T extends TClientFindByProps>(
    props: T
  ): Promise<TClientReturnType<T> | null> {
    const client = await this.db.client.findFirst(props);

    return client as TClientReturnType<T>;
  }

  async findMany<T extends TClientFindManyProps>(
    props: T
  ): Promise<TClientReturnType<T>[]> {
    const clients = await this.db.client.findMany(props);

    return clients as TClientReturnType<T>[];
  }

  async update<T extends TClientUpdateProps>(
    props: T
  ): Promise<TClientReturnType<T>> {
    const client = await this.db.client.update(props);

    return client as TClientReturnType<T>;
  }

  async delete<T extends TClientDeleteProps>(
    props: T
  ): Promise<TClientReturnType<T>> {
    const client = await this.db.client.delete(props);

    return client as TClientReturnType<T>;
  }
}
