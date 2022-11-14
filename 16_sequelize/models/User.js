const User = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      // name VARCHAR(10) NOT NULL,
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      // comment MEDIUMTEXT
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: "user",
      freezeTableName: true,
      timestamps: false,
    }
  );

  return model;
};

module.exports = User;
