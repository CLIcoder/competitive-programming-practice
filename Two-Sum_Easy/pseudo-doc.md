# TwoSum

### OBJECTIF :

right a fucntion that take param1 and param2, param1 = array input / param2 = result
the fuction should return all number sum of array, as condition :

#### arr = [elem1, elem2,...] / elem1 + elem2 = result

### return value :

- if nothing is found to satisfy the condition return empty array
- else return result in an object of all true condition as :

#### { indx: [ index1, index2 ], value: [ value1, value2 ] }

## Results examples :

### input

- arr = [1, 2, 3, 4, 5, 6, 7];
- result = 9;

### output

- [ { indx: [ 1, 6 ], value: [ 2, 7 ] }, { indx: [ 2, 5 ], value: [ 3, 6 ] }, { indx: [ 3, 4 ], value: [ 4, 5 ] }]

### input

- arr = [1, 2, 3, 4, 5, 6, 7];
- result = 2;

### output

- [ ]

# TwoSum Solution :

My solution : function TwoSum = (arr, result)

### init variables

<p1> as an object and <p2> as an object and resultObj as an array

```js
let p1 = {
  idx: 0,
  value: 0,
};
let p2 = {
  idx: 0,
  value: 0,
};
let resultObj = [];
```

### traverse the array from indx = 0 to indx = arr.length - 1 :

the loop is there for getting first value and idx into p1(example : p1 = {indx: 0 , value : arr[elem]})

```js
 for (let elem in arr) {
    p1.value = parseInt(arr[elem]);
    p1.idx = parseInt(elem);

```

### traverse the array again in sub loop :

check if the condition is true using if statement(if (p1.value + p2.value === result))
and adding the result into resultObj.

#### notice 📌 : p1.indx + 1 means : p1.idx !== p2.indx && ! (p1.indx < p2.index)

```js
 for (let elem = p1.idx + 1; elem < arr.length; elem++) {
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
  return resultObj;
```
