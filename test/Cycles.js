// 1. Найти сумму четных чисел и их количество в диапазоне от 1 до 99

function getSum (a, b) {
    if((a, b) === undefined){
        return 'Error';
      }

    var sum = 0;
    var count = 0;
    for (var i = a ; i < b; i++) {
        if (i % 2 === 0) {
            sum += i;
            count++;
        }
    }
    return [sum, count];
}

console.log(getSum(1, 100));

//2. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

function isPrime(num) {
    if(num === undefined){
        return 'Error';
      }

    for(var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
};

console.log(isPrime(5));

//3. Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)

function getNumber(num) {
    if(num === undefined){
      return 'Error';
    }
    for (i = 1;i < num; i++ ){
      var j = i*i;
      if (num === j) {
        return (i); 
      } 
      if(num < j) {
        return(i - 1);
      } 
    }
};

console.log(getNumber(25));

function getBinar(num) {
    if(num === undefined){
  	return 'Error';
    }

    var a = 1;
    while(a < num) {
		var i = (a + num / a) / 2;
		if  (i === a) break;
		a = i;
	}
  return Math.round(a);
};

console.log(getBinar(25));

//4.	Вычислить факториал числа n. n! = 1*2*…*n-1*n;

function factorial(n) {
    if(n === undefined){
        return 'Error';
      }

    var a = 1;
    for(var i = 1; i < (n + 1); i++) {
        a = a * i;
    }

    return a;
}

console.log(factorial(4));


//5.	Посчитать сумму цифр заданного числа

function sumNumber(n) {
    if(n === undefined){
        return 'Error';
      }

    var sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = (n - n % 10) /10;
    }
    return sum;
};

console.log(sumNumber(1234));

//6.	Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.

function mirror(num) {
    if(num === undefined){
        return 'Error';
      }

    var result = '';
    while (num > 0) {
        result += num % 10;
        num = parseInt (num / 10)
    }
    return result;
}

console.log(mirror(123));


module.exports = {getSum, isPrime, getNumber, getBinar, factorial, sumNumber, mirror}