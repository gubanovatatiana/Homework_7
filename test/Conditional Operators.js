//1. Если а – четное посчитать а*б, иначе а+б

function sum(a, b) {
    if((a, b) === undefined) {
        return 'Error';
      };

    if(a % 2 == 0) {
       return (a * b);
    } 
    return (a + b);
}
console.log(sum(5, 7));

//2. Определить какой четверти принадлежит точка с координатами (х,у)

function quarted(x, y) {
    if((x, y) === undefined) {
        return 'Error';
      };

    if(x > 0 && y > 0) {
        return 1;
    }
    else if(x > 0 && y < 0) {
        return 4;
    }
    else if(x < 0 && y > 0) {
        return 2;
    }
    else if(x < 0 && y < 0) {
        return 3;
    }
    return 0;
}

console.log(quarted(-2, 5), quarted(5,-7));

//3. Найти суммы только положительных из трех чисел

function sumPositive(a, b, c) {
    if((a, b, c) === undefined) {
        return 'Error';
      };

    var sum = 0;
    if (a > 0) {
        sum = sum + a;
    } if (b > 0) {
        sum = sum + b;
    } if (c > 0) {
        sum = sum + c;
    }
    return sum;
}

console.log(sumPositive(-1, 2, 3));

//4. Посчитать выражение (макс(а*б*с, а+б+с))+3

function getSum (a, b, c) {
    if((a, b, c) === undefined) {
        return 'Error';
      };

    if ((a * b * c) > (a + b + c)) {
        return ((a * b * c) + 3);
     } else if((a * b * c) < (a + b + c)) {
         return ((a + b + c) + 3);
     };
}

console.log(getSum(-5, 2, 3));

// 5. Написать программу определения оценки студента по его рейтингу, на основе следующих правил
//  0-19	F
// 20-39	E
// 40-59	D
// 60-74	C
// 75-89	B
// 90-100	A

function getRating(a) {
    if(a === undefined) {
        return 'Error';
      };

    if (0 <= a && a <= 19) {
        return ("F");
    } 
    if (20 <= a && a <= 39) {
        return ("E");
    } 
    if (40 <= a && a <= 59) {
        return ("D");
    } 
    if (60 <= a && a <= 74) {
        return ("C");
    } 
    if (75 <= a && a <= 89) {
        return ("B");
    } 
    if (90 <= a && a <= 100) {
        return ("A");
    };
}

console.log(getRating(85));


module.exports = {sum, quarted, sumPositive, getSum, getRating}