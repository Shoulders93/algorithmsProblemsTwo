// Prime Number problem
// Prime Number is only divisable by 1 and itself: 13 is a prime number
// write a method that determines if numbers 1-100 are prime numbers
// Note 2 is the only even prime number
// All the others can be express as the product (2 x n/2)
// All prime number larger than 5 end in 1, 3, 7, or 9

for(let i = 2; i <= 41; i++){
    let isPrime = true
    for (let j = 2;  j < i ; j++){
        console.log("Calc: " + i + " % " + j + " is " + i % j )
        if (i % j === 0) {
            isPrime = false
            break;
        }
    }
    if (isPrime){
        console.log("Number " + i + " is prime.")
    }
}
