/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function(...args) {
       return "Hello World";
    }
};
    const f = createHelloWorld();
    f();
    console.log(f());
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */