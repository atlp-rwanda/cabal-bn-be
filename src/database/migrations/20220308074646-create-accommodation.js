module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Accommodations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      imagesId: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      location_id: {
        type: Sequelize.INTEGER
      },
      services: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      amenities: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      user_id: {
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
  async down(queryInterface) {
    await queryInterface.dropTable('Accommodations');
  }
};
