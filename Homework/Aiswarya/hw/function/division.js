function division(a, b) {
    try {
         if (b === 0) {
            throw "Can't Divide by zero ";
        }
        return a / b;
    } catch (err) {
        return err;
    }
}

var result = division(10, 4);
console.log(result);