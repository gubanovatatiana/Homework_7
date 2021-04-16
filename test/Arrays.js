// 1. Найти минимальный элемент массива

function getMinNumber(arr) {
    if (arr === undefined) {
        return 'Error';
    };

    var minNum = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < minNum) {
            minNum = arr[i]
        }
    }
    return minNum;
}

console.log(getMinNumber([1, 0, -4, 17]));


// 2. Найти максимальный элемент массива

function getMaxNumber(arr) {
    if (arr === undefined) {
        return 'Error';
    };
    
    var maxNum = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum;
}
console.log(getMaxNumber([1, 0, -5, 17]));


//	3. Найти индекс минимального элемента массива

function getMinIndex(arr) {
    if (arr === undefined) {
        return 'Error';
    };

    var index = arr[0];
    var minInd = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < index) {
            index = arr[0];
            minInd = i;
        }
    }
    return minInd;
}
console.log(getMinIndex([-3, 0, -5, 5]));


// 4.	Найти индекс максимального элемента массива

function getMaxIndex(arr) {
    if (arr === undefined) {
        return 'Error';
    };

    var index = arr[0];
    var maxInd = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > index) {
            index = arr[0];
            maxInd = i;
        }
    }
    return maxInd;
}

console.log(getMaxIndex([-3, 0, -5, 17]));


//	5. Посчитать сумму элементов массива с нечетными индексами 

function getSum(arr) {
    if (arr === undefined) {
        return 'Error';
    };

    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(getSum([-3, 2, -5, 17]));


//	6. Сделать реверс массива (массив в обратном направлении)

function getReverse(arr) {
	if(arr === undefined){
    return 'Error';
  };

  var reverse = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  return reverse;
}
console.log(getReverse([1, 2, 3, 4, 5]));


//	7. Посчитать количество нечетных элементов массива

function getElement(arr) {
    if(arr === undefined) {
        return 'Error';
      };

      var quantity = 0;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            quantity += 1;
        }
    }
    return quantity;
}

console.log(getElement([1, 3, 9, 4, 5]));

//	8. Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2

function arraySwapHalvesNative(arr) {
    if(arr === undefined) {
        return 'Error';
      };

      var half = Math.round(arr.length / 2);
      var out = [];
      for (var i = half; i < arr.length; i++) {
          out.push(arr[i]);
      }
      for (var j = 0; j < half; j++) {
          out.push(arr[j]);
      }
      return out;
}

console.log(arraySwapHalvesNative([1, 2, 3, 4]));

//	9. Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert)) 

function bubbleSort(array) {
    if(array === undefined) {
        return 'Error';
      };

    var sortedArray = Array.from(array);
    var swap;
    do {
      swap = false;
      for (var i = 1; i < sortedArray.length; ++i) {
        if (sortedArray[i - 1] > sortedArray[i]) {
          [sortedArray[i], sortedArray[i - 1]] = [sortedArray[i - 1], sortedArray[i]];
          swap = true;
        }
      }
    } while (swap);
    return sortedArray;
  }
  
console.log(bubbleSort([1, 5, 2, 7, 3]));



function selectionSort(array) {
    if(array === undefined) {
        return 'Error';
      };

    var n = array.length;
    for(var i = 0; i < n; i++) {
        var min = i;
        for(var a = 0; a < n; a++){
            if(array[a] < array[min]) {
                min = a; 
            }
         }
         if (min != i) {
             var tmp = array[i]; 
             array[i] = array[min];
             array[min] = tmp;      
        }
    }
    return array;
}

console.log(selectionSort([1, 5, 2, 7, 3]));


function insertionSort(sort) {
    if(sort === undefined) {
        return 'Error';
      };

    for (var i = 1; i < sort.length; i++) {
        for (var a = i; a > 0; a--) {
            if (sort[a] < sort[a - 1]) {
                var x = sort[a];
                sort[a] = sort[a - 1];
                sort[a - 1] = x;
            } else {
                break;
            }
        }
    }
    return sort;
}

console.log(insertionSort([1, 5, 2, 7, 3]));




module.exports = {getMinNumber, getMaxNumber, getMinIndex, getMaxIndex, getSum, getReverse, getElement, arraySwapHalvesNative, bubbleSort, selectionSort, insertionSort}