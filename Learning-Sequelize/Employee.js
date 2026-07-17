const { DataTypes } = require('sequelize');
const sequelize = require('./Database');

const Employee = sequelize.define('Employee', {
  emp_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  first_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(150),
    allowNull: true
  },
  gender: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  car_id: {
    type: DataTypes.BIGINT,
    allowNull: true,
    unique: true
  }
}, {
  tableName: 'employee',
  timestamps: false
});

module.exports = Employee;