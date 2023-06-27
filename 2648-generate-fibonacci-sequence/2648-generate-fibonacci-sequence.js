/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let a = 0, b = 1
    yield 0
    yield 1
    while(true) {
        [a,b] = [b, a + b]
        yield b
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */