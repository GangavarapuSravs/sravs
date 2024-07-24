// import { Sequelize } from "sequelize";

// function getconnection(){
//     return new Sequelize('demoaadi','postgres','password',{
//         host : 'localhost',
//         port : 5432,
//         dialect : 'postgres',
       
//     })
// }

// const sequelizeconnection = getconnection();

// export default sequelizeconnection;


import { Sequelize } from "sequelize";

function getconnection(){
    return new Sequelize('doctorapp1', 'postgres', 'password', {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres',
        logging: false // Optionally disable logging
    });
}

const sequelizeconnection = getconnection();

async function testConnection() {
    try {
        await sequelizeconnection.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection();

export default sequelizeconnection;
