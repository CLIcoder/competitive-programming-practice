export const TwoSum = (arr, result) => {
  // time complexcity : O(n log n)

  let p1 = {
    idx: 0,
    value: 0,
  };
  let p2 = {
    idx: 0,
    value: 0,
  };

  let resultObj = [];

  for (let elem in arr) {
    // parseInt() return an int from str
    p1.value = parseInt(arr[elem]);
    p1.idx = parseInt(elem);

    for (let elem = p1.idx + 1; elem < arr.length; elem++) {
      // p1.indx + 1 means : p1.idx !== p2.indx && ! (p1.indx < p2.index)
      p2.value = parseInt(arr[elem]);
      p2.idx = parseInt(elem);

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
  // return [] or [{...},{...}]
  return resultObj;
};
