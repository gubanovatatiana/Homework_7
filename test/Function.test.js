var {getDays, getPoints, numberToStr} = require('./Function');

//1 

describe ('getDays', function() {
    it ('should be defined', function() {
        expect(getDays).toBeDefined();
    });
    it ('should be function', function() {
        expect(typeof getDays).toBe('function');
    });
    it ('should be only with arguments', function() {
        expect(getDays()).toBe('Error');
    });
    it ('should return Вторник', function() {
        expect(getDays(3)).toString('Вторник');
    });
    it ('should return Понедельник', function() {
        expect(getDays(3)).not.toBe('Понедельник');
    });
});

//2

describe ('getPoints', function() {
    it ('should be defined', function() {
        expect(getPoints).toBeDefined();
    });
    it ('should be function', function() {
        expect(typeof getPoints).toBe('function');
    });
    it ('should be only with arguments', function() {
        expect(getPoints()).toBe('Error');
    });
    it ('should return correct', function() {
        expect(getPoints(1, 3, 8, 5)).toBe(7.280109889280518);
    });
    it ('should return not correct', function() {
        expect(getPoints(1, 3, 8, 5)).not.toBe(1, 3, 8, 5);
    });
});

//3

describe ('numberToStr', function() {
    it ('should be defined', function() {
        expect(numberToStr).toBeDefined();
    });
    it ('should be function', function() {
        expect(typeof numberToStr).toBe('function');
    });
    it ('should be only with arguments', function() {
        expect(numberToStr()).toBe('Error');
    });
    it ('should return correct', function() {
        expect(numberToStr(125)).toBe('сто двадцать пять');
    });
    it ('should return not correct', function() {
        expect(numberToStr(125)).not.toBe('один два пять');
    });
});