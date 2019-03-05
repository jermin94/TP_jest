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