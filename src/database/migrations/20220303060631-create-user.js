const Sequelize = require('sequelize');

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      address: DataTypes.STRING,
      profile_picture: {
        type: DataTypes.TEXT,
        defaultValue:
          'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg'
      },
      provider: {
        type: DataTypes.ENUM,
        values: ['GOOGLE', 'FACEBOOK', 'EMAIL'],
        defaultValue: 'EMAIL'
      },
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      Logged_in: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Users');
  }
};
