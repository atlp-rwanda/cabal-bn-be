'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Trips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status:{
        type:Sequelize.STRING,
        defaultValue:'pending'
        },
        userId:{
          type:Sequelize.INTEGER,
          },
          managerId:{
            type:Sequelize.INTEGER,
            },
            destination: {
              type: Sequelize.STRING
            },
            originCity: {
        type: Sequelize.STRING
      },
      reason: {
        type: Sequelize.STRING
      },
      tripDate: {
        type: Sequelize.DATE
      },
      returnDate: {
        type: Sequelize.DATE
      },
      accomodationId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Trips');
  }
};