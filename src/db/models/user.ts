// models/user.js
import { DataTypes } from "sequelize";
import sequelizeconnection from "../config"; // Adjust the path based on your project structure

const User = sequelizeconnection.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    // Other model options
    timestamps: true,
});

export default User;
