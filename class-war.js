class ClassA {
    constructor(x) {
        this.x = x;
    }
}

class ClassZ extends ClassA {
    constructor(x, y, z) {
        super(x);
        this.y = y;
        this.z = z;
    }
}

const test = new ClassZ(1, 2, 3);
console.log('test', test);

const base = new ClassA(6);
console.log(base);

test.z = 10;
console.log('test', test);

