export const TwoSum = (arr, result) => {
  let p1 = {
    idx: 0,
    value: 0,
  };
  let p2 = {
    idx: 0,
    value: 0,
  };

  let resultObj = [];

  // init p1
  for (let elem in arr) {
    p1.value = parseInt(arr[elem]);
    p1.idx = parseInt(elem);

    // check the number to find value
    for (let elem in arr) {
      p2.value = parseInt(arr[elem]);
      p2.idx = parseInt(elem);

      // do not check same value idx or greater idx value
      if (p2.idx <= p1.idx) continue;

      if (p1.value + p2.value === result)
        resultObj = [
          ...resultObj,
          {
            indx: [p1.idx, p2.idx],
            value: [p1.value, p2.value],
          },
        ];
    }
  }
  return resultObj;
};
