// models/category.ts
import { DataTypes, Model, Optional } from "sequelize";
import sequelizeconnection from "../config";

interface CategoryAttributes {
    id: number;
    name: string;
    description: string;
}

interface CategoryCreationAttributes extends Optional<CategoryAttributes, 'id'> {}

class Category extends Model<CategoryAttributes, CategoryCreationAttributes> implements CategoryAttributes {
    public id!: number;
    public name!: string;
    public description!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Category.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(256),
        allowNull: true,
    },
}, {
    sequelize: sequelizeconnection,
    tableName: 'categories',
});

export default Category;
