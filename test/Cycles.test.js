var {getSum, isPrime, getNumber, getBinar, factorial, sumNumber, mirror} = require('./Cycles');

//1

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
    it ('should return 2450, 49', function() {
        expect(getSum(1, 100)).toString([ 2450, 49 ]);
    });
});

//2

describe ('isPrime', function() {
    it ('should be defined', function() {
        expect(isPrime).toBeDefined();
    });
    it ('should be function', function() {
        expect(typeof isPrime).toBe('function');
    });
    it ('should be only with arguments', function() {
        expect(isPrime()).toBe('Error');
    });
    it ('should return true', function() {
        expect(isPrime(5)).toBe(true);
    });
    it ('should return false', function() {
        expect(isPrime(5)).not.toBe(false);
    });
});

//3

describe ('getNumber', function() {
    it ('should be defined', function() {
        expect(getNumber).toBeDefined();
    });
    it ('should be function', function() {
        expect(typeof getNumber).toBe('function');
    });
    it ('should be only with arguments', function() {
        expect(getNumber()).toBe('Error');
    });
    it ('should return 5', function() {
        expect(getNumber(25)).toBe(5);
    });
    it ('should return 12', function() {
        expect(getNumber(25)).not.toBe(12);
    });
});

describe ('getBinar', function() {
    it ('should be defined', function() {
        expect(getBinar).toBeDefined();
    });
    it ('should be function', function() {
        expect(typeof getBinar).toBe('function');
    });
    it ('should be only with arguments', function() {
        expect(getBinar()).toBe('Error');
    });
    it ('should return 5', function() {
        expect(getBinar(25)).toBe(5);
    });
    it ('should return 12', function() {
        expect(getBinar(25)).not.toBe(12);
    });
});

//4

describe ('factorial', function() {
    it ('should be defined', function() {
        expect(factorial).toBeDefined();
    });
    it ('should be function', function() {
        expect(typeof factorial).toBe('function');
    });
    it ('should be only with arguments', function() {
        expect(factorial()).toBe('Error');
    });
    it ('should return 24', function() {
        expect(factorial(4)).toBe(24);
    });
    it ('should return 16', function() {
        expect(factorial(4)).not.toBe(16);
    });
});

//5

describe ('sumNumber', function() {
    it ('should be defined', function() {
        expect(sumNumber).toBeDefined();
    });
    it ('should be function', function() {
        expect(typeof sumNumber).toBe('function');
    });
    it ('should be only with arguments', function() {
        expect(sumNumber()).toBe('Error');
    });
    it ('should return 10', function() {
        expect(sumNumber(1234)).toBe(10);
    });
    it ('should return 24', function() {
        expect(sumNumber(1234)).not.toBe(24);
    });
});

//6

describe ('mirror', function() {
    it ('should be defined', function() {
        expect(mirror).toBeDefined();
    });
    it ('should be function', function() {
        expect(typeof mirror).toBe('function');
    });
    it ('should be only with arguments', function() {
        expect(mirror()).toBe('Error');
    });
    it ('should return 321', function() {
        expect(mirror(123)).toString(321);
    });
    it ('should return not correct 123', function() {
        expect(mirror(123)).not.toBe(123);
    });
});
