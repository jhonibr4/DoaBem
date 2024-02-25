/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('address', function (table){
        table.string('id_address').primary();
        table.string('name_address').notNullable();
        table.integer('cep').notNullable();
        table.integer('number').notNullable();
        table.string('city').notNullable();
        table.string('public_place').notNullable();
        table.string('state').notNullable();
        table.string('neighborhood').notNullable();
        table.string('id_user').notNullable();

        table.foreign('id_user').references('id_users').inTable('users');
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('address')
};
