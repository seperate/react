console.log('Arrow 2 Library Loaded...');

const multiplier =  {
    numbers : [2,3,5],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());

