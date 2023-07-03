/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return (value) => {
    return functions.reduceRight((result, fn) => {
      return fn(result);
    }, value);
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */