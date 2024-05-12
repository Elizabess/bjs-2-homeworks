function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if( arr[i] < min){
      min = arr[i];
    }
    if (arr[i] > max){
      max = arr[i];
    }

    sum += arr[i];
  }

  let avg = (sum / arr.length).toFixed(2);
  
  return { min: min, max: max, avg: Number(avg) };
}

function summElementsWorker(...arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }

  return arr.reduce((arr, curr) => arr + curr, 0);
}

function differenceMaxMinWorker(...arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    }
    else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  return (sumEvenElement / countEvenElement);
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity; 
    for (let data of arrOfArr) {
        const result = func(...data);
        if (result > maxWorkerResult) {
            maxWorkerResult = result;
        }
    }
    return maxWorkerResult;
}
