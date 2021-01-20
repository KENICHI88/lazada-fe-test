import fs from 'fs';
import path from 'path';
const mockData = '../data/category.json';

exports.getList = (req, res, next) => {
  try {
    const mockFile = path.join(__dirname, mockData);
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
