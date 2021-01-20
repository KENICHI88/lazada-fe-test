import fs from 'fs';
import path from 'path';

const mockSponsorProductsData = '../data/sponsor-products.json';
const mockProductDetailData = '../data/product.json';
const mockProductReviewData = '../data/product-review.json';
const mockProductQAData = '../data/product-qa.json';
const mockProductAlsoLikeData = '../data/product-also-like.json';

import {
  randomPickReview
} from '../helpers/productHelpers';

exports.getDetail = (req, res, next) => {
  try {
    const mockFile = path.join(__dirname, mockProductDetailData);
    fs.readFile(mockFile, 'utf8', (error, data) => {
      if(error) {
        throw error;
      }
      res.json(JSON.parse(data));
    })
  } catch(error) {
    res.json(err);
    next();
  }
}

exports.getSponsorProducs = (req, res, next) => {
  try {
    const mockFile = path.join(__dirname, mockSponsorProductsData);
    fs.readFile(mockFile, 'utf8', (error, data) => {
      if(error) {
        throw error;
      }
      res.json(JSON.parse(data));
    })
  } catch(error) {
    res.json(err);
    next();
  }
}

exports.getReview = (req, res, next) => {
  try {
    const mockFile = path.join(__dirname, mockProductReviewData);
    fs.readFile(mockFile, 'utf8', (error, data) => {
      if(error) {
        throw error;
      }
      let respondData = JSON.parse(data);
      respondData.data = randomPickReview(respondData.data, 3);
      res.json(respondData);
    })
  }catch(error) {
    res.json(err);
    next();
  }
}

exports.getQA = (req, res, next) => {
  try {
    const mockFile = path.join(__dirname, mockProductQAData);
    fs.readFile(mockFile, 'utf8', (error, data) => {
      if(error) {
        throw error;
      }
      let respondData = JSON.parse(data);
      respondData.data = randomPickReview(respondData.data, 3);
      res.json(respondData);
    })
  }catch(error) {
    res.json(err);
    next();
  }
}

exports.getAlsoLikeProducs = (req, res, next) => {
  try {
    const mockFile = path.join(__dirname, mockProductAlsoLikeData);
    fs.readFile(mockFile, 'utf8', (error, data) => {
      if(error) {
        throw error;
      }
      let respondData = JSON.parse(data);
      respondData.data = randomPickReview(respondData.data, 12);
      res.json(respondData);
    })
  } catch(error) {
    res.json(err);
    next();
  }
}
