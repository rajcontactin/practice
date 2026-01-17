/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    //console.log(n);
    return function() {
        
        return n++;
    };
};
    const f = createCounter();
    console.log(f());
/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */