import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("tasks", (table) => {
    table.increments("id").primary();
    table.integer("userId").notNullable();
    table.string("title").notNullable();
    table.boolean("completed").notNullable().defaultTo(false);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("tasks");
}
