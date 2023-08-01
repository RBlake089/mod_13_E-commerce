// const { Model, DataTypes } = require('sequelize');

// const sequelize = require('../config/connection.js');

// class Category extends Model {}

// Category.init(
//   {
//     // define columns
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'category',
//   }
// );

// module.exports = Category;


// Import necessary modules and dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Define the Category class, which extends the Sequelize Model class
class Category extends Model {}

// Initialize the Category model with column definitions and other options
Category.init(
  {
    // define columns for the Category model
    id: {
      type: DataTypes.INTEGER,        // Column data type is an integer (whole number)
      allowNull: false,               // The column should not allow null values
      primaryKey: true,               // This column will serve as the primary key
      autoIncrement: true,            // The column value will be auto-incremented for each new record
    },
    name: {
      type: DataTypes.STRING,         // Column data type is a string
      allowNull: false,               // The column should not allow null values
    },
  },
  {
    sequelize,                        // Pass the Sequelize connection instance
    timestamps: false,                // Disable automatic timestamps (createdAt and updatedAt)
    freezeTableName: true,            // Prevent Sequelize from pluralizing the table name
    underscored: true,                // Use snake_case for the table and column names
    modelName: 'category',            // Set the model name to be used in associations and other places
  }
);

// Export the Category model
module.exports = Category;

