import express from 'express';
///////
import {
  getList,
} from '../controllers/category.controller';

const route = express.Router();

route
  .get('/get',  getList);

export default route;
