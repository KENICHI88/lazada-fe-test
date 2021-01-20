import {
  randomBetween2Number
} from './ultils';

export const randomPickReview = (rootList, number) => {
  let newArrayData = [],
      bkRootlist = [...rootList];
  if(rootList.length >= number) {
    for(let i = 0; i< number; i++) {
      const newInd = randomBetween2Number(0, bkRootlist.length);
      const newItem = bkRootlist.splice(newInd, 1);
      newArrayData.push(newItem[0]);
    }
    return newArrayData;
  } else {
    return rootList;
  }
}
