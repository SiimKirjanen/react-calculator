const isPrime = (num: number) => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

export const findHighestPrimeBetweenToNumbers = (start: number, end: number) => {
    let highestPrime: number = -1;

    for(let i = start; i <= end; i++) {
        if( isPrime(i) && i > highestPrime) {
            highestPrime = i;
        }
    }

    return highestPrime > 1 ? highestPrime : null;
};