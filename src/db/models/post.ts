// models/post.ts
import { DataTypes, Model, Optional } from "sequelize";
import sequelizeconnection from "../config";

interface PostAttributes {
    id: number;
    title: string;
    content: string;
   // Foreign key to User model
}

interface PostCreationAttributes extends Optional<PostAttributes, 'id'> {}

class Post extends Model<PostAttributes, PostCreationAttributes> implements PostAttributes {
    public id!: number;
    public title!: string;
    public content!: string;
   

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Post.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING(256),
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    
}, {
    sequelize: sequelizeconnection,
    tableName: 'posts',
});

export default Post;
