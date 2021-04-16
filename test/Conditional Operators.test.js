var {sum, quarted, sumPositive, getSum, getRating} = require('./Conditional Operators');

//1

describe ('sum', function() {
    it ('should be defined', function() {
        expect(sum).toBeDefined();
    });
    it ('should be function', function() {
        expect(typeof sum).toBe('function');
    });
    it ('should be only with arguments', function() {
        expect(sum()).toBe('Error');
    });
    it ('should return a + b', function() {
        expect(sum(5, 7)).toBe(12);
    });
    it ('should return a * b', function() {
        expect(sum(10, 7)).toBe(70);
    });
});

//2

describe ('quarted', function() {
    it ('should be defined', function() {
        expect(quarted).toBeDefined();
    });
    it ('should be function', function() {
        expect(typeof quarted).toBe('function');
    });
    it ('should be only with arguments', function() {
        expect(quarted()).toBe('Error');
    });
    it ('should return 2', function() {
        expect(quarted(-2, 5)).toBe(2);
    });
    it ('should return 4', function() {
        expect(quarted(5, -7)).toBe(4);
    });
    it ('should return 3', function() {
        expect(quarted(5, -7)).not.toBe(3);
    });
    it ('should return 1', function() {
        expect(quarted(5, -7)).not.toBe(1);
    });
    it ('should return 2 4', function() {
        expect(quarted(-2, 5), quarted(5,-7)).toBe(2 4);
});

//3

describe ('sumPositive', function() {
    it ('should be defined', function() {
        expect(sumPositive).toBeDefined();
    });
    it ('should be function', function() {
        expect(typeof sumPositive).toBe('function');
    });
    it ('should be only with arguments', function() {
        expect(sumPositive()).toBe('Error');
    });
    it ('should return 5', function() {
        expect(sumPositive(-1, 2, 3)).toBe(5);
    });
    it ('should not return 4', function() {
        expect(sumPositive(-1, 2, 3)).not.toBe(4);
    });
});

//4

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
    it ('should return (a + b + c) + 3', function() {
        expect(getSum(-5, 2, 3)).toBe(3);
    });
    it ('should not return (a * b * c) + 3', function() {
        expect(getSum(-5, 2, 3)).not.toBe(-33);
    });
});

//5

describe ('getRating', function() {
    it ('should be defined', function() {
        expect(getRating).toBeDefined();
    });
    it ('should be function', function() {
        expect(typeof getRating).toBe('function');
    });
    it ('should be only with arguments', function() {
        expect(getRating()).toBe('Error');
    });
    it ('should return "B"', function() {
        expect(getRating(85)).toBe("B");
    });
    it ('should not return "A"', function() {
        expect(getRating(85)).not.toBe("A");
    });
});