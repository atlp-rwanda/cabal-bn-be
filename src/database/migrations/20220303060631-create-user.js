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
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      address: DataTypes.STRING,
      profile_picture: {
        type: DataTypes.STRING,
        defaultValue:
          'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg'
      },
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
