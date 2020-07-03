exports.up = function(knex) {
  return knex.schema.createTable('users', function(table){ //Tabela users
    table.increments('id').primary(); //ID - primary key
    table.string('email').notNullable().unique(); // email - email do usuario
    table.string('first_name').notNullable();// first_name - primeiro nome do usuario
    table.string('last_name').notNullable();// last_name - último nome do usuario
    table.string('avatar').notNullable(); //avatar - imagem avatar usuario
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users'); //Deleta a tabela users
};
