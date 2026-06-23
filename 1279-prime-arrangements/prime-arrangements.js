/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
    let prime = 0;
    const MOD = 1000000007n;

    for(let i=1; i<=n; i++){
        if(isPrime(i)){
            prime++;
        }
    }

    let notPrime = n-prime;

    let factPrime = fact(prime,MOD);
    let factNotPrime = fact(notPrime,MOD);

    return Number((factPrime*factNotPrime)%MOD); 
};

function fact(num,MOD){
    let fact = 1n;
    for(let i=2n; i<=BigInt(num); i++){
        fact = (fact*i)%MOD;
    }

    return fact;
}

function isPrime(num){
    if(num==1) return false;
    for(let i=2; i*i<=num; i++){
        if(num%i==0) return false;
    }

    return true;
}