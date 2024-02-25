/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('donation', function (table){

        table.string('id_donation').primary();
        table.string('name').notNullable();
        table.string('type_donation').notNullable();
        table.string('amount').notNullable();
        table.string('type_delivery').notNullable();
        table.string('description').notNullable();
        table.string('img_donation').notNullable();
        table.string('id_user').notNullable();
        table.string('id_addressDonation').notNullable();

        table.foreign('id_addressDonation').references('id_address').inTable('address');
        table.foreign('id_user').references('id_users').inTable('users');
    });

}
exports.down = function(knex) {
    return knex.schema.dropTable('donation')
};

