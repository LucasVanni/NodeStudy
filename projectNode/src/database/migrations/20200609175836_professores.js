import Knex from 'knex';
export async function up(knex) {
  return Knex.schema.createTable('professores', table => {
      table.increments('id').primary();
      table.string('avatar').notNullable();
      table.string('name').notNullable();
      table.string('password').notNullable()
      table.string('email').notNullable().unique();
      table.integer('CPF').notNullable();
      table.string('Escola').notNullable();

  })
}

export async function down(knex) {
  return knex.schema.dropTable('professores');
}
