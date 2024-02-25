/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('solicitation', function (table){
        table.string('id_solicitation').primary().notNullable();
        table.string('name_donation').notNullable();
        table.string('date').notNullable();
        table.string('hour').notNullable();
        table.string('status').notNullable();
        table.string('name_person').notNullable();
        table.string('public_place').notNullable();
        table.string('number_address').notNullable();
        table.string('neighborhood').notNullable();
        table.string('city').notNullable();
        table.string('state').notNullable();
        table.string('id_donations').notNullable();
        table.string('id_user').notNullable();
    

        table.foreign('id_donations').references('id_donation').inTable('donation');
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('solicitation')
};
