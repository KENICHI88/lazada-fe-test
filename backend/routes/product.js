import express from 'express';
///////
import {
  getDetail,
  getSponsorProducs,
  getReview,
  getQA,
  getAlsoLikeProducs,
} from '../controllers/product.controller';

const route = express.Router();

route
  .get('/get', getDetail)
  .get('/getSponsorProducts', getSponsorProducs)
  .get('/getQA', getQA)
  .get('/getReview', getReview)
  .get('/getAlsoLike', getAlsoLikeProducs);

export default route;
