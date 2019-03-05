let Util = {};
Util.factorial = (n) => {

    if (n < 0) {
        throw 'Unable to compute factorial for n < 0'
    }

    if (!(typeof n === "number") || Math.floor(n) !== n) {
        throw 'Unable to compute factorial of non integer values'
    }

    if (n >= 100) {
        throw 'Unable to compute factorial for n > 100'
    }

    if (0 === n) {
        return 1;
    }

    return n * Util.factorial(n - 1);
};

/**
 * Détermine si n est un nombre premier.
 * Util.isPrime(5) => false
 * Util.isPrime(6) => true
 *
 * @param {number} n
 * @returns {boolean}
 */
Util.isPrime = function(n) {
    if (n === 2) {
        return true;
    }
    else if(n > 1){
        for (var i = 2;  i < n; i++) {
            if (n % i !== 0 ) {
                return true;
            }
            else if (n === i * i) {
                return false
            }
            else {
                return false;
            }
        }
    }
    else {
        return false;
    }
};


/**
 * Additionne l'ensemble des nombres premiers de 2 à n
 *
 * Util.sumPrime(6) = 2 + 3 + 5 = 10
 * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
 *
 * @param {number} n
 * @returns {number}
 */
Util.sumPrime = function(n) {
    if (n < 2) {
        throw 'Si non entier'
    }

    if (!(typeof n === "number") || Math.floor(n) !== n) {
        throw 'Impossible d\'utiliser la fonction si c\'est un entier'
    }

    var sum = 0;
    for(var i = 2; i < n; i++)
    {
        if(Util.isPrime(i))
            sum += i;
    }
    return sum;
};

/**
 * Cette méthode doit retourner un tableau de 1 à n tel que:
 * - Pour les nombres multiples de 3, les remplacer par "Fizz"
 * - Pour les nombres multiples de 5, les remplacer par "Buzz"
 * - Pour les nombres multiples de 3 et 5, les remplacer par "FizzBuzz"
 *
 * Exp :
 * Util.fizzBuzz(15) => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 *
 * @param {number} n
 * @returns {array}
 */
Util.fizzBuzz = function(n) {
    if (n < 0) {
        throw 'Unable to compute sumPrime for n < 0'
    }

    if (!(typeof n === "number") || Math.floor(n) !== n) {
        throw 'Unable to compute sumPrime of non integer values'
    }

    var tab = [];
    for(var i = 1; i < n+1 ; i++)
    {
        if(i%15 === 0)
        {
            tab.push("FizzBuzz");
            continue;
        }
        if(i%5 === 0)
        {
            tab.push("Buzz");
            continue;
        }
        if(i%3 === 0)
        {
            tab.push("Fizz");
            continue;
        }
        tab.push(i);
    }
    return tab;
};

/**
 * Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.
 *
 * Exp :
 * Util.cipher("Test Unitaire") => "Uftu Tojubjsf"
 *
 * @param phrase
 * @returns {string}
 */
Util.cipher = function (phrase) {
     if (!(typeof phrase === "string") || /\d/.test(phrase)) {
        throw 'Unable to compute cipher of string values'
    }

    var newPhrase = "";
    for(var i = 0 ; i < phrase.length ; i++)
    {
        switch (phrase.charAt(i).charCodeAt(0))
        {
            case 90: newPhrase+='A';
            case 122: newPhrase+='a';
            case ' '.charCodeAt(0): newPhrase+=' ';
            default: newPhrase+=String.fromCharCode(phrase.charAt(i).charCodeAt(0) + 1);
        }
    }
    return newPhrase;
};


module.exports = Util;

