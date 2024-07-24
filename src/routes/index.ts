import express from 'express';
import languageRouter from './sravani.route';
//import Login from '../db/models/ttt';
//import loginrouter from './ttt.route';
//import service from '../db/models/service';
//import serviceRoute from './service.route';
//import categoriesRoute from './categories.route';
 
 // Adjust the import path as needed


const routes = express.Router();

 
routes.use('/login', languageRouter)
//routes.use('/',loginrouter)
//routes.use('/',serviceRoute)
//routes.use('/',categoriesRoute)
 
 


export default routes;