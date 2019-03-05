const Util = require('./math');

describe('Factorial', function () {

    test.each([
        [0, 1],
        [1, 1],
        [2, 2],
        [3, 6],
        [4, 24],
        [5, 120],
    ])(
        'Factorial %i equals to %i',
        (n, expected) => {
            expect(Util.factorial(n)).toBe(expected);
        },
    );

    test('Factorial of negative integers throws exception', () => {
        expect(()=> {Util.factorial(-10)}).toThrow();
    });
});

describe("IsPrime", function(){
    var testCases = [
        {
            n : 0,
            isPrime : false
        },
        {
            n : 5,
            isPrime : true
        },
        {
            n : 6,
            isPrime : false
        }
    ];

    testCases.forEach(function(testCase){
        it("Doit retourné " + testCase.isPrime + " quand n = " + testCase.n, function(){
            var result = Util.isPrime(testCase.n);
            expect(result).toEqual(testCase.isPrime);
        })
    });
});


test('IsPrime Négatif', () => {
        expect(()=> {Util.factorial(-10)}).toThrow();
    });

test('IsPrime caractère', () => {
        expect(()=> {Util.factorial('a')}).toThrow();
    });

describe("SumPrime", function(){
    var testCases = [
        {
            n : 6,
            sumPrime : 10
        },
        {
            n : 8,
            sumPrime : 17
        }
    ];

    testCases.forEach(function(testCase){
        it("Doit retourné " + testCase.sumPrime + " quand n = " + testCase.n, function(){
            var result = Util.sumPrime(testCase.n);
            expect(result).toEqual(testCase.sumPrime);
        })
    });

    it("Si non entier", function(){
        var f = function(){
            Util.sumPrime('test');
        }
        expect(f).toThrow('Impossible d\'utiliser la fonction si c\'est un entier');
    })
});


describe("FizzBuzz", function(){

    var tabExample = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"];
    it("Doit retourné " + tabExample + " quand n = 15", function(){
        var result = Util.fizzBuzz(15);
        expect(result).toEqual(tabExample);
    });


    it("Si n < 0", function(){
        var f = function(){
            Util.fizzBuzz(-1);
        }
        expect(f).toThrow('Si n < 0');
    });

    it("Impossible d\'utiliser la fonction si c\'est un entier", function(){
        var f = function(){
            Util.fizzBuzz('test');
        }
        expect(f).toThrow('Impossible d\'utiliser la fonction si c\'est un entier');
    })
});