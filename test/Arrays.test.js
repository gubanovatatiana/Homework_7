var {getMinNumber, getMaxNumber, getMinIndex, getMaxIndex, getSum, getReverse, getElement, arraySwapHalvesNative, bubbleSort, selectionSort, insertionSort} = require('./Arrays');

//1

describe ('getMinNumber', function() {
    it ('should be defined', function() {
        expect(getMinNumber).toBeDefined();
    });
    it ('should be function', function() {
        expect(typeof getMinNumber).toBe('function');
    });
    it ('should be only with arguments', function() {
        expect(getMinNumber()).toBe('Error');
    });
    it ('should not return 17', function() {
        expect(getMinNumber([1, 0, -4, 17])).not.toBe(17);
    });
    it ('should return -4', function() {
        expect(getMinNumber([1, 0, -4, 17])).toBe(-4);
    });
});


// 2

describe ('getMaxNumber', function() {
    it ('should be defined', function() {
        expect(getMaxNumber).toBeDefined();
    });
    it ('should be function', function() {
        expect(typeof getMaxNumber).toBe('function');
    });
    it ('should be only with arguments', function() {
        expect(getMaxNumber()).toBe('Error');
    });
    it ('should not return -5', function() {
        expect(getMaxNumber([1, 0, -5, 17])).not.toBe(-5);
    });
    it ('should return 17', function() {
        expect(getMaxNumber([1, 0, -5, 17])).toBe(17);
    });
});

//3

describe ('getMinIndex', function() {
    it ('should be defined', function() {
        expect(getMinIndex).toBeDefined();
    });
    it ('should be function', function() {
        expect(typeof getMinIndex).toBe('function');
    });
    it ('should be only with arguments', function() {
        expect(getMinIndex()).toBe('Error');
    });
    it ('should not return 3', function() {
        expect(getMinIndex([-3, 0, -5, 5])).not.toBe(3);
    });
    it ('should return 2', function() {
        expect(getMinIndex([-3, 0, -5, 5])).toBe(2);
    });
});


//4

describe ('getMaxIndex', function() {
    it ('should be defined', function() {
        expect(getMaxIndex).toBeDefined();
    });
    it ('should be function', function() {
        expect(typeof getMaxIndex).toBe('function');
    });
    it ('should be only with arguments', function() {
        expect(getMaxIndex()).toBe('Error');
    });
    it ('should not return 2', function() {
        expect(getMaxIndex([-3, 0, -5, 17])).not.toBe(2);
    });
    it ('should return 3', function() {
        expect(getMaxIndex([-3, 0, -5, 17])).toBe(3);
    });
});

//5

describe ('getSum', function() {
    it ('should be defined', function() {
        expect(getSum).toBeDefined();
    });
    it ('should be function', function() {
        expect(typeof getSum).toBe('function');
    });
    it ('should be only with arguments', function() {
        expect(getSum()).toBe('Error');
    });
    it ('should not return -8', function() {
        expect(getSum([-3, 2, -5, 17])).not.toBe(-8);
    });
    it ('should return 19', function() {
        expect(getSum([-3, 2, -5, 17])).toBe(19);
    });
});

//6

describe ('getReverse', function() {
    it ('should be defined', function() {
        expect(getReverse).toBeDefined();
    });
    it ('should be function', function() {
        expect(typeof getReverse).toBe('function');
    });
    it ('should be only with arguments', function() {
        expect(getReverse()).toBe('Error');
    });
    it ('should not correct return', function() {
        expect(getReverse([1, 2, 3, 4, 5])).not.toBe([1, 2, 3, 4, 5]);
    });
    it ('should correct return', function() {
        expect(getReverse([1, 2, 3, 4, 5])).toStrictEqual([5, 4, 3, 2, 1]);
    });
});

//7

describe ('getElement', function() {
    it ('should be defined', function() {
        expect(getElement).toBeDefined();
    });
    it ('should be function', function() {
        expect(typeof getElement).toBe('function');
    });
    it ('should be only with arguments', function() {
        expect(getElement()).toBe('Error');
    });
    it ('should return 1', function() {
        expect(getElement([1, 3, 9, 4, 5])).not.toBe(1);
    });
    it ('should return 4', function() {
        expect(getElement([1, 3, 9, 4, 5])).toBe(4);
    });
});

//8

describe ('arraySwapHalvesNative', function() {
    it ('should be defined', function() {
        expect(arraySwapHalvesNative).toBeDefined();
    });
    it ('should be function', function() {
        expect(typeof arraySwapHalvesNative).toBe('function');
    });
    it ('should be only with arguments', function() {
        expect(arraySwapHalvesNative()).toBe('Error');
    });
    it ('should not correct return', function() {
        expect(arraySwapHalvesNative([1, 2, 3, 4])).not.toBe([1, 2, 3, 4]);
    });
    it ('should correct return', function() {
        expect(arraySwapHalvesNative([1, 2, 3, 4])).toStrictEqual([3, 4, 1, 2]);
    });
});

//9

describe ('bubbleSort', function() {
    it ('should be defined', function() {
        expect(bubbleSort).toBeDefined();
    });
    it ('should be function', function() {
        expect(typeof bubbleSort).toBe('function');
    });
    it ('should be only with arguments', function() {
        expect(bubbleSort()).toBe('Error');
    });
    it ('should not correct return', function() {
        expect(bubbleSort([1, 5, 2, 7, 3])).not.toBe([1, 5, 2, 7, 3]);
    });
    it ('should correct return', function() {
        expect(bubbleSort([1, 5, 2, 7, 3])).toStrictEqual([1, 2, 3, 5, 7]);
    });
});

describe ('selectionSort', function() {
    it ('should be defined', function() {
        expect(selectionSort).toBeDefined();
    });
    it ('should be function', function() {
        expect(typeof selectionSort).toBe('function');
    });
    it ('should be only with arguments', function() {
        expect(selectionSort()).toBe('Error');
    });
    it ('should not correct return', function() {
        expect(selectionSort([1, 5, 2, 7, 3])).not.toBe([1, 5, 2, 7, 3]);
    });
    it ('should correct return', function() {
        expect(selectionSort([1, 5, 2, 7, 3])).toStrictEqual([5, 2, 7, 3, 1]);
    });
});

describe ('insertionSort', function() {
    it ('should be defined', function() {
        expect(insertionSort).toBeDefined();
    });
    it ('should be function', function() {
        expect(typeof insertionSort).toBe('function');
    });
    it ('should be only with arguments', function() {
        expect(insertionSort()).toBe('Error');
    });
    it ('should not correct return', function() {
        expect(insertionSort([1, 5, 2, 7, 3])).not.toBe([1, 5, 2, 7, 3]);
    });
    it ('should correct return', function() {
        expect(insertionSort([1, 5, 2, 7, 3])).toStrictEqual([1, 2, 3, 5, 7]);
    });
});
