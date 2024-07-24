// const isDev = true;
// //import categories from './models/categories';
// //import service from './models/service';
// //import Login from './models/ttt';

// import Language from "./models/sravani";
// import User from "./models/user";

// const dbInit =() => {
//     init();
//     addUser();
// }

// export default dbInit;
    



// adi modifi

// dbInit.ts
//import Language from "./models/language";


const isDev = true;
import sequelizeconnection from "./config"; // Adjust the path based on your project structure
import Category from "./models/category";
import Post from "./models/post";
import User from "./models/user";

async function init() {
    try {
        await sequelizeconnection.authenticate



        console.log('Connection has been established successfully.');

        // Sync the Post model
        await Post.sync({ alter: isDev });
        await Category.sync({alter:isDev})
        console.log('Post model was synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

const dbInit = async () => {
    await init();
    // await addUser(); // Uncomment if addUser is defined and you need to call it
};

export default dbInit;


