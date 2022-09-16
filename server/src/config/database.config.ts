import { Connection, createConnection } from "typeorm";
import { Users } from "../entities/Users";

export async function database(): Promise<Connection> {
  return await createConnection({
    type: "mysql",
    database: "db",
    username: "user",
    password: "password",
    logging: true,
    synchronize: true,
    entities: [Users],
    migrations: ["./src/migrations/*.ts"],
  });
}
