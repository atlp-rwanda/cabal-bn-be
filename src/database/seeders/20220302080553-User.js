module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Alain Shema",
          email: "alain@example.com",
          password: "password",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Eli Hirwa",
          email: "eli@example.com",
          password: "newpass",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Users", null, {}),
};
